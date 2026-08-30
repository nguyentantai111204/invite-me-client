import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosError } from "axios";
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

// Khởi tạo Axios Instance cấu hình chuẩn cho Backend
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
  timeout: 30000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor: Tự động đính kèm Bearer Token
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token =
        localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) ||
        sessionStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Chuẩn hóa dữ liệu trả về và xử lý mã lỗi
axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data;
    // Bóc tách data nếu backend trả về wrapper { data: ... }
    if (data && typeof data === "object" && "data" in data) {
      return data.data;
    }
    return data;
  },
  (error: AxiosError<{ message?: string | string[]; error?: string; errors?: Record<string, string[]> }>) => {
    const statusCode = error.response?.status || 500;
    const responseData = error.response?.data;

    let message = "Đã xảy ra lỗi kết nối đến máy chủ";
    if (responseData?.message) {
      message = Array.isArray(responseData.message)
        ? responseData.message.join(", ")
        : responseData.message;
    } else if (responseData?.error) {
      message = responseData.error;
    } else if (error.message) {
      message = error.message;
    }

    return Promise.reject(new ApiError(message, statusCode, responseData?.errors));
  }
);

// HTTP Client đóng gói các phương thức RESTful
export const httpClient = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.get(url, config);
    return response as unknown as T;
  },

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.post(url, data, config);
    return response as unknown as T;
  },

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.put(url, data, config);
    return response as unknown as T;
  },

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.patch(url, data, config);
    return response as unknown as T;
  },

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.delete(url, config);
    return response as unknown as T;
  },

  // Upload file qua FormData với header multipart/form-data
  async upload<T>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<T> {
    const response = await axiosInstance.post(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "multipart/form-data",
      },
    });
    return response as unknown as T;
  },
};
