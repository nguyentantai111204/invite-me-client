import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { StackCol, StackCenter, StackRowBetween, stackColumnStyle, centerStyle } from "@/components/ui/stack.component";
import { colors } from "@/theme/colors";
import { paddings, gaps, margins } from "@/theme/spacing";
import { fontSizes } from "@/theme/typography";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        ...stackColumnStyle,
        minHeight: "100vh",
        backgroundColor: colors.background.default,
        backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(183, 134, 40, 0.08) 0%, transparent 70%)`,
      }}
    >
      {/* Auth Navigation Header */}
      <Box
        component="header"
        sx={{
          py: `${paddings.md}px`,
          px: `${paddings.lg}px`,
          borderBottom: `1px solid ${colors.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <StackRowBetween>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <Image src="/images/logo.png" alt="InviteMe Logo" width={32} height={32} />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 800,
                  color: colors.gold.dark,
                  letterSpacing: "-0.01em",
                }}
              >
                InviteMe
              </Typography>
            </Link>

            <Link
              href="/"
              style={{
                fontSize: fontSizes.sm,
                color: colors.text.secondary,
                textDecoration: "none",
              }}
            >
              ← Về trang chủ
            </Link>
          </StackRowBetween>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          ...centerStyle,
          flexGrow: 1,
          py: `${paddings["2xl"]}px`,
          px: `${paddings.md}px`,
        }}
      >
        <Container maxWidth="sm">
          <StackCenter>{children}</StackCenter>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: `${paddings.md}px`,
          textAlign: "center",
          borderTop: `1px solid ${colors.divider}`,
        }}
      >
        <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: fontSizes.xs }}>
          © {new Date().getFullYear()} InviteMe. Tất cả các quyền được bảo lưu.
        </Typography>
      </Box>
    </Box>
  );
}
