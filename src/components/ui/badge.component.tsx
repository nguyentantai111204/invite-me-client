import React from "react";
import Box, { type BoxProps } from "@mui/material/Box";

export interface BadgeProps extends Omit<BoxProps, "color"> {
  color?: "primary" | "secondary" | "gold" | "success" | "neutral";
  variant?: "primary" | "secondary" | "gold" | "success" | "neutral";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

// Huy hiệu nhãn danh mục và trạng thái
export function Badge({
  color,
  variant = "primary",
  size = "medium",
  children,
  sx,
  ...props
}: BadgeProps) {
  const activeColor = color || variant;

  let colorStyle = {
    backgroundColor: "rgba(183, 134, 40, 0.12)",
    color: "#B78628",
    border: "1px solid rgba(183, 134, 40, 0.25)",
  };

  if (activeColor === "secondary") {
    colorStyle = {
      backgroundColor: "rgba(229, 139, 123, 0.12)",
      color: "#E58B7B",
      border: "1px solid rgba(229, 139, 123, 0.25)",
    };
  } else if (activeColor === "primary") {
    colorStyle = {
      backgroundColor: "rgba(183, 134, 40, 0.12)",
      color: "#B78628",
      border: "1px solid rgba(183, 134, 40, 0.25)",
    };
  } else if (activeColor === "gold") {
    colorStyle = {
      backgroundColor: "rgba(183, 134, 40, 0.15)",
      color: "#875C12",
      border: "1px solid rgba(183, 134, 40, 0.3)",
    };
  } else if (activeColor === "success") {
    colorStyle = {
      backgroundColor: "rgba(5, 150, 105, 0.1)",
      color: "#059669",
      border: "1px solid rgba(5, 150, 105, 0.2)",
    };
  } else if (activeColor === "neutral") {
    colorStyle = {
      backgroundColor: "rgba(107, 94, 75, 0.1)",
      color: "#6B5E4B",
      border: "1px solid rgba(107, 94, 75, 0.2)",
    };
  }

  const sizeStyle = {
    small: { px: 1, py: 0.25, fontSize: "0.7rem" },
    medium: { px: 1.5, py: 0.5, fontSize: "0.75rem" },
    large: { px: 2, py: 0.75, fontSize: "0.85rem" },
  }[size];

  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 2,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        ...sizeStyle,
        ...colorStyle,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
