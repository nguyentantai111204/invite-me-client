"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Button,
  StackColAlignJustCenter,
  StackRowAlignJustCenter,
} from "@/components/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Màn hình hiển thị lỗi máy chủ 500 (Server Error)
export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[Root Error Boundary]:", error);
  }, [error]);

  return (
    <Container maxWidth="md">
      <StackColAlignJustCenter
        component="main"
        sx={{
          minHeight: "100vh",
          textAlign: "center",
          py: 8,
        }}
      >
        <StackColAlignJustCenter spacing={3} sx={{ maxWidth: 580 }}>
          {/* Hình minh họa 500 Server Error Hoàng gia */}
          <Image
            src="/images/error.png"
            alt="500 Server Error"
            width={340}
            height={340}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 12px 24px rgba(220, 38, 38, 0.12))",
            }}
          />

          {/* Tiêu đề & Thông báo */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              fontFamily: "var(--font-playfair), serif",
              color: "text.primary",
              fontSize: { xs: "1.75rem", sm: "2.25rem" },
            }}
          >
            Đã Xảy Ra Lỗi Hệ Thống
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Hệ thống đang gặp gián đoạn tạm thời khi xử lý yêu cầu. Đội ngũ kỹ thuật đã
            ghi nhận để khắc phục sớm nhất. Xin vui lòng thử lại.
          </Typography>

          {/* Nút hành động thử lại và về trang chủ */}
          <StackRowAlignJustCenter
            spacing={2}
            sx={{ pt: 1.5, width: { xs: "100%", sm: "auto" }, flexWrap: "wrap" }}
          >
            <Button
              variant="gradient"
              size="large"
              onClick={() => reset()}
              sx={{ px: 3.5, py: 1.25, width: { xs: "100%", sm: "auto" } }}
            >
              Thử lại ngay
            </Button>

            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="large"
                sx={{ px: 3.5, py: 1.25, width: { xs: "100%", sm: "auto" } }}
              >
                Về trang chủ
              </Button>
            </Link>
          </StackRowAlignJustCenter>
        </StackColAlignJustCenter>
      </StackColAlignJustCenter>
    </Container>
  );
}
