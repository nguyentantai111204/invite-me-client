import React from "react";
import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";

export interface CardProps extends MuiCardProps {
  hoverEffect?: boolean;
  glassmorphism?: boolean;
}

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
        borderRadius: 3.5,
        border: "1px solid rgba(0, 0, 0, 0.08)",
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
            boxShadow: "0 14px 30px rgba(139, 92, 246, 0.12)",
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
