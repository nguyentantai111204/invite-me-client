import React from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  variant?: "primary" | "secondary" | "gradient" | "outline" | "ghost";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

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
          background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
          color: "#FFFFFF",
          boxShadow: "0 4px 14px rgba(139, 92, 246, 0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)",
            boxShadow: "0 6px 20px rgba(139, 92, 246, 0.45)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease",
        };
        break;
      case "secondary":
        customSx = {
          backgroundColor: "#EC4899",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#DB2777" },
        };
        break;
      case "outline":
        customSx = {
          backgroundColor: "transparent",
          color: "#8B5CF6",
          border: "1.5px solid #8B5CF6",
          "&:hover": {
            backgroundColor: "rgba(139, 92, 246, 0.08)",
            borderColor: "#7C3AED",
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
          backgroundColor: "#8B5CF6",
          color: "#FFFFFF",
          "&:hover": { backgroundColor: "#7C3AED" },
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
