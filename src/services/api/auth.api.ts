import { httpClient } from "./client";

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: "user" | "admin";
  createdAt: string;
}

export interface AuthResponse {
  user: UserProfile;
  accessToken: string;
  refreshToken?: string;
}

export interface LoginDto {
  email: string;
  password?: string;
  provider?: "credentials" | "google" | "facebook";
  idToken?: string;
}

export interface RegisterDto {
  fullName: string;
  email: string;
  password?: string;
}

export const authApi = {
  /**
   * Đăng nhập người dùng
   */
  login(dto: LoginDto): Promise<AuthResponse> {
    return httpClient.post<AuthResponse>("/auth/login", dto);
  },

  /**
   * Đăng ký tài khoản mới
   */
  register(dto: RegisterDto): Promise<AuthResponse> {
    return httpClient.post<AuthResponse>("/auth/register", dto);
  },

  /**
   * Lấy thông tin tài khoản hiện tại
   */
  getMe(): Promise<UserProfile> {
    return httpClient.get<UserProfile>("/auth/me");
  },

  /**
   * Đăng xuất
   */
  logout(): Promise<{ success: boolean }> {
    return httpClient.post<{ success: boolean }>("/auth/logout");
  },
};
