import type { BaseEntity } from "./common.type";

export type UserRole = "user" | "admin";

export interface UserProfile extends BaseEntity {
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: UserRole;
  isVerified?: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
}

export interface AuthSession {
  user: UserProfile;
  tokens: AuthTokens;
}

export interface LoginPayload {
  email: string;
  password?: string;
  provider?: "credentials" | "google" | "facebook";
  idToken?: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}
