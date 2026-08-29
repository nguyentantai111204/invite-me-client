import React from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { borderRadius, paddings } from "@/theme/spacing";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { fontWeights } from "@/theme/typography";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  variant?: "primary" | "secondary" | "gradient" | "outline" | "ghost";
  isLoading?: boolean;
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
      leftIcon,
      rightIcon,
      disabled,
      sx,
      ...props
    },
    ref
  ) => {
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
        disabled={disabled || isLoading}
        startIcon={
          isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            leftIcon
          )
        }
        endIcon={!isLoading ? rightIcon : undefined}
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
