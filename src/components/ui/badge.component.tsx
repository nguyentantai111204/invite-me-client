import React from "react";
import Box, { type BoxProps } from "@mui/material/Box";

export interface BadgeProps extends BoxProps {
  variant?: "primary" | "secondary" | "gold" | "success" | "neutral";
  children: React.ReactNode;
}

export function Badge({
  variant = "primary",
  children,
  sx,
  ...props
}: BadgeProps) {
  let style = {
    backgroundColor: "rgba(139, 92, 246, 0.1)",
    color: "#8B5CF6",
    border: "1px solid rgba(139, 92, 246, 0.2)",
  };

  if (variant === "secondary") {
    style = {
      backgroundColor: "rgba(236, 72, 153, 0.1)",
      color: "#EC4899",
      border: "1px solid rgba(236, 72, 153, 0.2)",
    };
  } else if (variant === "gold") {
    style = {
      backgroundColor: "rgba(183, 134, 40, 0.12)",
      color: "#B78628",
      border: "1px solid rgba(183, 134, 40, 0.25)",
    };
  } else if (variant === "success") {
    style = {
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      color: "#10B981",
      border: "1px solid rgba(16, 185, 129, 0.2)",
    };
  } else if (variant === "neutral") {
    style = {
      backgroundColor: "rgba(107, 114, 128, 0.1)",
      color: "#4B5563",
      border: "1px solid rgba(107, 114, 128, 0.2)",
    };
  }

  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        fontSize: "0.75rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        ...style,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
