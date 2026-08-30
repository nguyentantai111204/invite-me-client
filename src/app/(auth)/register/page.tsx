import React from "react";
import type { Metadata } from "next";
import { RegisterForm } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản | InviteMe",
  description: "Tạo tài khoản InviteMe miễn phí để bắt đầu tạo những mẫu thiệp mời độc đáo.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
