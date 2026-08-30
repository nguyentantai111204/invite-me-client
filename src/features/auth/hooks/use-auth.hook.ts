"use client";

import useSWR from "swr";
import { useCallback } from "react";
import { authApi } from "@/services/api/auth.api";
import { STORAGE_KEYS } from "@/constants/storage.constant";
import type { LoginDto, RegisterDto, UserProfile } from "../types/auth.type";

// Hook quản lý trạng thái xác thực người dùng toàn cục
export function useAuth() {
  const { data: user, error, isLoading, mutate } = useSWR<UserProfile | null>(
    "/auth/me",
    async () => {
      if (typeof window === "undefined") return null;
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) return null;
      try {
        const profile = await authApi.getMe();
        return profile as UserProfile;
      } catch (err) {
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
        return null;
      }
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  const login = useCallback(
    async (dto: LoginDto) => {
      const res = await authApi.login(dto);
      if (res.accessToken) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, res.accessToken);
        if (res.user) {
          localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(res.user));
        }
      }
      await mutate(res.user as UserProfile, false);
      return res;
    },
    [mutate]
  );

  const register = useCallback(
    async (dto: RegisterDto) => {
      const res = await authApi.register(dto);
      if (res.accessToken) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, res.accessToken);
        if (res.user) {
          localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(res.user));
        }
      }
      await mutate(res.user as UserProfile, false);
      return res;
    },
    [mutate]
  );

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // Bỏ qua lỗi khi logout trên server
    } finally {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
      await mutate(null, false);
    }
  }, [mutate]);

  return {
    user: user ?? null,
    isLoading,
    isAuthenticated: Boolean(user),
    isError: Boolean(error),
    login,
    register,
    logout,
    mutate,
  };
}
