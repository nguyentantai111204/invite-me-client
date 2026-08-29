"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import HomeIcon from "@mui/icons-material/Home";
import { fontPlayfair } from "@/config/fonts.config";
import {
  Button,
  StackCenter,
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
    <StackCenter
      component="main"
      className={fontPlayfair.variable}
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, rgba(220, 38, 38, 0.08), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(183, 134, 40, 0.08), transparent 50%)",
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <StackColAlignJustCenter spacing={3} sx={{ textAlign: "center" }}>

          <StackCenter
            sx={{
              position: "relative",
              width: { xs: 260, sm: 320 },
              height: { xs: 260, sm: 320 },
              mx: "auto",
            }}
          >
            <Image
              src="/images/error.png"
              alt="500 Server Error"
              width={320}
              height={320}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </StackCenter>

          {/* Tiêu đề Serif sang trọng */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.75rem" },
              color: "text.primary",
              letterSpacing: "-0.01em",
              mt: -1,
            }}
          >
            Đã Xảy Ra Lỗi Hệ Thống
          </Typography>

          {/* Mô tả thông báo */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.7,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            Hệ thống đang gặp gián đoạn tạm thời khi xử lý yêu cầu. Đội ngũ kỹ thuật đã
            ghi nhận để khắc phục sớm nhất. Xin vui lòng thử lại.
          </Typography>

          {/* Nút hành động thử lại và về trang chủ */}
          <StackRowAlignJustCenter
            spacing={2}
            sx={{
              pt: 2,
              width: { xs: "100%", sm: "auto" },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="gradient"
              size="large"
              leftIcon={<RefreshIcon />}
              onClick={() => reset()}
              sx={{
                px: 4,
                py: 1.4,
                fontSize: "1rem",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Thử lại ngay
            </Button>

            <Button
              component={Link}
              href="/"
              variant="outline"
              size="large"
              leftIcon={<HomeIcon />}
              sx={{
                px: 4,
                py: 1.4,
                fontSize: "1rem",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Về trang chủ
            </Button>
          </StackRowAlignJustCenter>
        </StackColAlignJustCenter>
      </Container>
    </StackCenter>
  );
}
