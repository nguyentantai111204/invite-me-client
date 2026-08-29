import { envConfig } from "@/config/env.config";
import { STORAGE_KEYS } from "@/constants/storage.constant";

// Chuẩn hóa lỗi API trả về từ NestJS Backend
export class ApiError extends Error {
  statusCode: number;
  errors?: string[] | Record<string, string[]>;

  constructor(
    message: string,
    statusCode = 500,
    errors?: string[] | Record<string, string[]>
  ) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

// Định dạng Response chuẩn của NestJS Backend
export interface ApiResponse<T = unknown> {
  statusCode?: number;
  message?: string;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  token?: string;
}

// Lấy Auth Token từ client storage
function getClientAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return (
    localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) ||
    sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
  );
}

// HTTP Client trung tâm phục vụ toàn bộ API Services
async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, token, headers = {}, ...customConfig } = options;

  // Xử lý query params
  let url = endpoint.startsWith("http")
    ? endpoint
    : `${envConfig.apiUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        searchParams.append(key, String(val));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes("?") ? "&" : "?") + queryString;
    }
  }

  // Tự động gắn Authorization token nếu có
  const authToken = token || getClientAuthToken();
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (authToken) {
    defaultHeaders["Authorization"] = `Bearer ${authToken}`;
  }

  // Khởi tạo fetch request
  const config: RequestInit = {
    headers: {
      ...defaultHeaders,
      ...(headers as Record<string, string>),
    },
    ...customConfig,
  };

  try {
    const response = await fetch(url, config);

    // Xử lý khi API trả về 204 No Content
    if (response.status === 204) {
      return {} as T;
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage =
        data?.message ||
        data?.error ||
        `Lỗi hệ thống (${response.status}): ${response.statusText}`;

      throw new ApiError(
        Array.isArray(errorMessage) ? errorMessage.join(", ") : errorMessage,
        response.status,
        data?.errors
      );
    }

    return (data?.data !== undefined ? data.data : data) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Đã xảy ra lỗi kết nối",
      500
    );
  }
}

export const httpClient = {
  get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "GET" });
  },

  post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  patch<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    });
  },

  delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "DELETE" });
  },

  // Tải lên file ảnh hoặc âm thanh dạng FormData
  async upload<T>(
    endpoint: string,
    formData: FormData,
    options?: RequestOptions
  ): Promise<T> {
    const { headers = {}, ...rest } = options || {};
    const authToken = options?.token || getClientAuthToken();

    const uploadHeaders: HeadersInit = {
      Accept: "application/json",
      ...(headers as Record<string, string>),
    };

    if (authToken) {
      uploadHeaders["Authorization"] = `Bearer ${authToken}`;
    }

    const url = endpoint.startsWith("http")
      ? endpoint
      : `${envConfig.apiUrl}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

    const response = await fetch(url, {
      ...rest,
      method: "POST",
      headers: uploadHeaders,
      body: formData,
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new ApiError(
        data?.message || "Tải lên tệp thất bại",
        response.status,
        data?.errors
      );
    }

    return (data?.data !== undefined ? data.data : data) as T;
  },
};
