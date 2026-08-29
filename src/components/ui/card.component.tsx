import React from "react";
import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";
import { borderRadius } from "@/theme/spacing";

export interface CardProps extends MuiCardProps {
  hoverEffect?: boolean;
  glassmorphism?: boolean;
}

// Thẻ Card tùy biến hỗ trợ hiệu ứng nổi hover và kính mờ
export function Card({
  children,
  hoverEffect = false,
  glassmorphism = false,
  sx,
  ...props
}: CardProps) {
  return (
    <MuiCard
      sx={{
        borderRadius: `${borderRadius.lg}px`, // 16px (chia hết cho 4)
        border: "1px solid rgba(183, 134, 40, 0.12)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        ...(glassmorphism && {
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        }),
        ...(hoverEffect && {
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 14px 30px rgba(183, 134, 40, 0.15)",
          },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
}
