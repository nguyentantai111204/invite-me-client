"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import { StackRow, StackRowBetween, StackCenter, stackColumnStyle, centerStyle } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { useAuth } from "@/features/auth";
import { colors } from "@/theme/colors";
import { paddings, gaps, borderRadius } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated, logout } = useAuth();

  // Guard: chuyển hướng về trang login nếu chưa đăng nhập
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isLoading, isAuthenticated, router, pathname]);

  if (isLoading) {
    return (
      <Box
        sx={{
          ...centerStyle,
          minHeight: "100vh",
          backgroundColor: colors.background.default,
        }}
      >
        <CircularProgress sx={{ color: colors.gold.main }} />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Box
      sx={{
        ...stackColumnStyle,
        minHeight: "100vh",
        backgroundColor: colors.background.default,
      }}
    >
      {/* Dashboard Top Header */}
      <Box
        component="header"
        sx={{
          py: `${paddings.sm}px`,
          px: `${paddings.md}px`,
          backgroundColor: colors.background.paper,
          borderBottom: `1px solid ${colors.border.goldLight}`,
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Container maxWidth="lg">
          <StackRowBetween>
            {/* Brand Logo & Navigation Links */}
            <StackRow gap={`${gaps.xl}px`} sx={{ alignItems: "center" }}>
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
                  sx={{
                    fontWeight: fontWeights.extrabold,
                    color: colors.gold.dark,
                    letterSpacing: "-0.01em",
                  }}
                >
                  InviteMe
                </Typography>
              </Link>

              <StackRow gap={`${gaps.xs}px`}>
                <Button
                  component={Link}
                  href="/dashboard"
                  variant={pathname === "/dashboard" ? "contained" : "text"}
                  size="small"
                  startIcon={<DashboardOutlinedIcon sx={{ fontSize: "1rem" }} />}
                  sx={{
                    fontSize: fontSizes.xs,
                    borderRadius: `${borderRadius.full}px`,
                    ...(pathname === "/dashboard"
                      ? { background: colors.gold.gradient, color: colors.text.inverse }
                      : { color: colors.text.secondary }),
                  }}
                >
                  Quản lý thiệp
                </Button>

                <Button
                  component={Link}
                  href="/templates"
                  variant="text"
                  size="small"
                  startIcon={<CollectionsBookmarkIcon sx={{ fontSize: "1rem" }} />}
                  sx={{
                    fontSize: fontSizes.xs,
                    borderRadius: `${borderRadius.full}px`,
                    color: colors.text.secondary,
                  }}
                >
                  Kho mẫu thiệp
                </Button>
              </StackRow>
            </StackRow>

            {/* User Profile & Actions */}
            <StackRow gap={`${gaps.md}px`} sx={{ alignItems: "center" }}>
              <Button
                component={Link}
                href="/dashboard/invitations/create"
                variant="contained"
                size="small"
                startIcon={<AddIcon />}
                sx={{
                  background: colors.gold.gradient,
                  color: colors.text.inverse,
                  fontSize: fontSizes.xs,
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Tạo thiệp mới
              </Button>

              <StackRow gap={`${gaps.xs}px`} sx={{ alignItems: "center" }}>
                <Avatar
                  src={user?.avatarUrl || undefined}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: colors.gold.main,
                    fontSize: fontSizes.xs,
                    fontWeight: fontWeights.bold,
                  }}
                >
                  {user?.fullName?.charAt(0) || "U"}
                </Avatar>
                <Typography
                  sx={{
                    fontSize: fontSizes.xs,
                    fontWeight: fontWeights.semibold,
                    color: colors.text.primary,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {user?.fullName}
                </Typography>
              </StackRow>

              <Button
                variant="outlined"
                size="small"
                onClick={() => logout()}
                startIcon={<LogoutIcon sx={{ fontSize: "0.9rem" }} />}
                sx={{
                  fontSize: fontSizes.xs,
                  borderColor: colors.border.subtle,
                  color: colors.text.secondary,
                }}
              >
                Đăng xuất
              </Button>
            </StackRow>
          </StackRowBetween>
        </Container>
      </Box>

      {/* Main Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: `${paddings.xl}px`,
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}
