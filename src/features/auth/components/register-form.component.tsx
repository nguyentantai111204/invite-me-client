"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonIcon from "@mui/icons-material/Person";

import { StackCol, StackRow, StackCenter } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { Badge } from "@/components/ui/badge.component";
import { useAuth } from "../hooks/use-auth.hook";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps, margins } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";

// Form đăng ký tài khoản thành viên
export function RegisterForm() {
  const router = useRouter();
  const { register } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setErrorMessage("Vui lòng nhập đầy đủ các trường thông tin.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Mật khẩu phải có độ dài tối thiểu 6 ký tự.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      await register({
        fullName: fullName.trim(),
        email: email.trim(),
        password,
      });
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Đăng ký không thành công. Email có thể đã được sử dụng.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      glassmorphism
      sx={{
        width: "100%",
        maxWidth: "460px",
        padding: `${paddings.xl}px`,
        borderRadius: `${borderRadius.xl}px`,
        boxShadow: shadows.goldLg,
        border: `1px solid ${colors.border.goldLight}`,
      }}
    >
      <StackCol gap={`${gaps.lg}px`}>
        {/* Header */}
        <StackCenter gap={`${gaps.xs}px`} sx={{ textAlign: "center" }}>
          <Badge variant="gold" size="small" dot>
            Tạo tài khoản miễn phí
          </Badge>

          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: fontWeights.bold,
              fontSize: fontSizes["2xl"],
              color: colors.text.primary,
              mt: `${margins.xs}px`,
            }}
          >
            Đăng Ký Thành Viên
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: colors.text.secondary,
              fontSize: fontSizes.sm,
            }}
          >
            Bắt đầu tạo và gửi thiệp mời trực tuyến cho sự kiện đặc biệt
          </Typography>
        </StackCenter>

        {/* Error Alert */}
        {errorMessage && (
          <Alert
            severity="error"
            sx={{
              borderRadius: `${borderRadius.sm}px`,
              fontSize: fontSizes.xs,
              alignItems: "center",
            }}
          >
            {errorMessage}
          </Alert>
        )}

        {/* Form Body */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <StackCol gap={`${gaps.md}px`}>
            {/* Full Name */}
            <StackCol gap={`${gaps.xs}px`}>
              <Typography
                component="label"
                htmlFor="register-fullname"
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.semibold,
                  color: colors.text.primary,
                }}
              >
                Họ và tên
              </Typography>
              <TextField
                id="register-fullname"
                type="text"
                required
                fullWidth
                placeholder="Nguyễn Văn A"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: colors.gold.main, fontSize: "1.2rem" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: `${borderRadius.md}px`,
                    backgroundColor: colors.background.paper,
                    fontSize: fontSizes.sm,
                    "& fieldset": { borderColor: colors.border.goldLight },
                    "&:hover fieldset": { borderColor: colors.gold.main },
                    "&.Mui-focused fieldset": { borderColor: colors.gold.dark },
                  },
                }}
              />
            </StackCol>

            {/* Email */}
            <StackCol gap={`${gaps.xs}px`}>
              <Typography
                component="label"
                htmlFor="register-email"
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.semibold,
                  color: colors.text.primary,
                }}
              >
                Địa chỉ Email
              </Typography>
              <TextField
                id="register-email"
                type="email"
                required
                fullWidth
                placeholder="tenban@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: colors.gold.main, fontSize: "1.2rem" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: `${borderRadius.md}px`,
                    backgroundColor: colors.background.paper,
                    fontSize: fontSizes.sm,
                    "& fieldset": { borderColor: colors.border.goldLight },
                    "&:hover fieldset": { borderColor: colors.gold.main },
                    "&.Mui-focused fieldset": { borderColor: colors.gold.dark },
                  },
                }}
              />
            </StackCol>

            {/* Password */}
            <StackCol gap={`${gaps.xs}px`}>
              <Typography
                component="label"
                htmlFor="register-password"
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.semibold,
                  color: colors.text.primary,
                }}
              >
                Mật khẩu (tối thiểu 6 ký tự)
              </Typography>
              <TextField
                id="register-password"
                type={showPassword ? "text" : "password"}
                required
                fullWidth
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon sx={{ color: colors.gold.main, fontSize: "1.2rem" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ fontSize: "1.1rem" }} />
                          ) : (
                            <Visibility sx={{ fontSize: "1.1rem" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: `${borderRadius.md}px`,
                    backgroundColor: colors.background.paper,
                    fontSize: fontSizes.sm,
                    "& fieldset": { borderColor: colors.border.goldLight },
                    "&:hover fieldset": { borderColor: colors.gold.main },
                    "&.Mui-focused fieldset": { borderColor: colors.gold.dark },
                  },
                }}
              />
            </StackCol>

            {/* Confirm Password */}
            <StackCol gap={`${gaps.xs}px`}>
              <Typography
                component="label"
                htmlFor="register-confirm-password"
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.semibold,
                  color: colors.text.primary,
                }}
              >
                Xác nhận mật khẩu
              </Typography>
              <TextField
                id="register-confirm-password"
                type={showPassword ? "text" : "password"}
                required
                fullWidth
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isSubmitting}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon sx={{ color: colors.gold.main, fontSize: "1.2rem" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: `${borderRadius.md}px`,
                    backgroundColor: colors.background.paper,
                    fontSize: fontSizes.sm,
                    "& fieldset": { borderColor: colors.border.goldLight },
                    "&:hover fieldset": { borderColor: colors.gold.main },
                    "&.Mui-focused fieldset": { borderColor: colors.gold.dark },
                  },
                }}
              />
            </StackCol>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              loading={isSubmitting}
              sx={{
                background: colors.gold.gradient,
                color: colors.text.inverse,
                height: "44px",
                fontSize: fontSizes.sm,
                fontWeight: fontWeights.bold,
                borderRadius: `${borderRadius.md}px`,
                boxShadow: shadows.goldMd,
                mt: `${margins.xs}px`,
              }}
            >
              Đăng Ký Tài Khoản
            </Button>
          </StackCol>
        </Box>

        {/* Footer Link */}
        <StackCenter
          gap={`${gaps.xs}px`}
          sx={{
            pt: `${paddings.sm}px`,
            borderTop: `1px solid ${colors.divider}`,
          }}
        >
          <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: fontSizes.xs }}>
            Đã có tài khoản?
          </Typography>
          <Link
            href="/login"
            style={{
              color: colors.gold.dark,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xs,
              textDecoration: "none",
            }}
          >
            Đăng nhập
          </Link>
        </StackCenter>
      </StackCol>
    </Card>
  );
}
