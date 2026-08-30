export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string | null;
  role: "USER" | "ADMIN" | "user" | "admin";
  isVerified?: boolean;
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
}

export interface RegisterDto {
  fullName: string;
  email: string;
  password?: string;
}
