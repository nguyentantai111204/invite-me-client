import React, { Suspense } from "react";
import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Đăng nhập | InviteMe",
  description: "Đăng nhập vào InviteMe để quản lý các mẫu thiệp mời trực tuyến của bạn.",
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Đang tải form đăng nhập...</div>}>
      <LoginForm />
    </Suspense>
  );
}
