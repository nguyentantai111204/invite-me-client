import React from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

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
          background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
          color: "#FFFFFF",
          boxShadow: "0 4px 14px rgba(183, 134, 40, 0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #A1721C 0%, #DE7C66 100%)",
            boxShadow: "0 6px 20px rgba(183, 134, 40, 0.45)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease",
        };
        break;
      case "secondary":
        customSx = {
          backgroundColor: "#E58B7B",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#DE7C66" },
        };
        break;
      case "outline":
        customSx = {
          backgroundColor: "transparent",
          color: "#B78628",
          border: "1.5px solid #B78628",
          "&:hover": {
            backgroundColor: "rgba(183, 134, 40, 0.08)",
            borderColor: "#875C12",
          },
        };
        break;
      case "ghost":
        customSx = {
          backgroundColor: "transparent",
          color: "text.primary",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
        };
        break;
      case "primary":
      default:
        customSx = {
          backgroundColor: "#B78628",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#875C12" },
        };
        break;
    }

    return (
      <MuiButton
        ref={ref}
        disabled={disabled || isLoading}
        sx={{
          borderRadius: 2.5,
          textTransform: "none",
          fontWeight: 600,
          px: 3,
          py: 1.1,
          ...customSx,
          ...sx,
        }}
        {...props}
      >
        {isLoading ? (
          <CircularProgress size={20} color="inherit" sx={{ mr: children ? 1 : 0 }} />
        ) : (
          leftIcon && <span style={{ display: "inline-flex", marginRight: 8 }}>{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span style={{ display: "inline-flex", marginLeft: 8 }}>{rightIcon}</span>
        )}
      </MuiButton>
    );
  }
);

Button.displayName = "Button";
