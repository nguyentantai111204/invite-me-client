import React from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { borderRadius, paddings } from "@/theme/spacing";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { fontWeights } from "@/theme/typography";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  variant?:
    | "primary"
    | "secondary"
    | "gradient"
    | "outline"
    | "ghost"
    | "contained"
    | "outlined"
    | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit";
  isLoading?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
  href?: string;
}

// Nút bấm tùy chỉnh với hỗ trợ loading, gradient và biểu tượng
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      isLoading = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      sx,
      ...props
    },
    ref
  ) => {
    const isSpinning = isLoading || loading;
    let customSx = {};

    switch (variant) {
      case "gradient":
        customSx = {
          background: colors.brand.goldButtonGradient,
          color: colors.text.inverse,
          boxShadow: shadows.goldMd,
          "&:hover": {
            background: colors.brand.goldButtonHoverGradient,
            boxShadow: shadows.goldLg,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
      case "secondary":
        customSx = {
          backgroundColor: colors.rose.main,
          color: colors.text.inverse,
          boxShadow: shadows.roseSm,
          "&:hover": {
            backgroundColor: colors.rose.dark,
            boxShadow: shadows.roseLg,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
      case "outline":
        customSx = {
          backgroundColor: "transparent",
          color: colors.gold.dark,
          border: `1.5px solid ${colors.border.gold}`,
          boxShadow: shadows.sm,
          "&:hover": {
            backgroundColor: colors.background.paper,
            borderColor: colors.gold.main,
            boxShadow: shadows.cardHover,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
      case "ghost":
        customSx = {
          backgroundColor: "transparent",
          color: "text.primary",
          "&:hover": { backgroundColor: "rgba(183, 134, 40, 0.08)", color: "primary.main" },
          transition: "all 0.2s ease",
        };
        break;
      case "contained":
        customSx = {
          background: colors.gold.gradient,
          color: colors.text.inverse,
          boxShadow: shadows.goldSm,
          "&:hover": {
            boxShadow: shadows.goldMd,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
      case "outlined":
        customSx = {
          backgroundColor: "transparent",
          color: colors.gold.dark,
          border: `1px solid ${colors.border.gold}`,
          "&:hover": {
            backgroundColor: "rgba(183, 134, 40, 0.04)",
            borderColor: colors.gold.main,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
      case "text":
        customSx = {
          backgroundColor: "transparent",
          color: colors.text.primary,
          "&:hover": {
            backgroundColor: "rgba(183, 134, 40, 0.06)",
            color: colors.gold.dark,
          },
          transition: "all 0.2s ease",
        };
        break;
      case "primary":
      default:
        customSx = {
          backgroundColor: colors.gold.main,
          color: colors.text.inverse,
          boxShadow: shadows.roseSm,
          "&:hover": {
            backgroundColor: colors.gold.dark,
            boxShadow: shadows.goldMd,
            transform: "translateY(-1px)",
          },
          transition: "all 0.25s ease",
        };
        break;
    }

    return (
      <MuiButton
        ref={ref}
        disabled={disabled || isSpinning}
        startIcon={
          isSpinning ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            leftIcon
          )
        }
        endIcon={!isSpinning ? rightIcon : undefined}
        sx={{
          borderRadius: `${borderRadius.sm}px`,
          textTransform: "none",
          fontWeight: fontWeights.semibold,
          px: `${paddings.md}px`,
          py: `${paddings.sm}px`,
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          ...customSx,
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = "Button";
