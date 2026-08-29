import React from "react";
import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";
import { borderRadius } from "@/theme/spacing";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";

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
        borderRadius: `${borderRadius.md}px`,
        border: `1px solid ${colors.border.goldLight}`,
        boxShadow: shadows.card,
        ...(glassmorphism && {
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${colors.border.whiteSubtle}`,
        }),
        ...(hoverEffect && {
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: shadows.cardHover,
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
