import React from "react";
import Box, { type BoxProps } from "@mui/material/Box";
import { borderRadius, paddings } from "@/theme/spacing";
import { colors } from "@/theme/colors";
import { fontWeights, fontSizes, letterSpacings } from "@/theme/typography";

export interface BadgeProps extends Omit<BoxProps, "color"> {
  color?: "primary" | "secondary" | "gold" | "success" | "neutral";
  variant?: "primary" | "secondary" | "gold" | "success" | "neutral";
  size?: "small" | "medium" | "large";
  // dot=true dùng cho eyebrow label phía trên tiêu đề section
  dot?: boolean;
  children: React.ReactNode;
}

const PALETTE: Record<
  string,
  { bg: string; text: string; borderColor: string; dotColor: string }
> = {
  primary: {
    bg: "rgba(183, 134, 40, 0.08)",
    text: colors.gold.dark,
    borderColor: colors.border.gold,
    dotColor: colors.gold.main,
  },
  gold: {
    bg: "rgba(183, 134, 40, 0.08)",
    text: colors.gold.dark,
    borderColor: colors.border.gold,
    dotColor: colors.gold.main,
  },
  secondary: {
    bg: "rgba(229, 139, 123, 0.08)",
    text: colors.rose.dark,
    borderColor: `${colors.rose.main}50`,
    dotColor: colors.rose.main,
  },
  success: {
    bg: `${colors.status.success.main}12`,
    text: colors.status.success.dark,
    borderColor: `${colors.status.success.main}40`,
    dotColor: colors.status.success.main,
  },
  neutral: {
    bg: "rgba(107, 94, 75, 0.07)",
    text: colors.text.secondary,
    borderColor: colors.border.subtle,
    dotColor: colors.text.secondary,
  },
};

const SIZE_MAP = {
  small: { px: `${paddings.sm}px`, py: "3px", fontSize: "0.7rem", dotSize: 5, gap: "5px" },
  medium: { px: `${paddings.md - 2}px`, py: "5px", fontSize: fontSizes.xs, dotSize: 6, gap: "6px" },
  large: { px: `${paddings.md}px`, py: "6px", fontSize: fontSizes.sm, dotSize: 7, gap: "7px" },
};

// Badge / Eyebrow label — pill shape, compact, không kéo rộng
export function Badge({
  color,
  variant = "primary",
  size = "medium",
  dot = false,
  children,
  sx,
  ...props
}: BadgeProps) {
  const key = color || variant;
  const p = PALETTE[key] ?? PALETTE.primary;
  const s = SIZE_MAP[size];

  return (
    <Box
      component="span"
      sx={{
        // Quan trọng: inline-flex + alignSelf để KHÔNG bị stretch trong flex container
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        width: "fit-content",
        gap: s.gap,
        // Pill shape
        borderRadius: `${borderRadius.full}px`,
        fontWeight: fontWeights.semibold,
        letterSpacing: letterSpacings.wide,
        px: s.px,
        py: s.py,
        fontSize: s.fontSize,
        backgroundColor: p.bg,
        color: p.text,
        border: `1px solid ${p.borderColor}`,
        lineHeight: 1.5,
        whiteSpace: "nowrap",
        ...sx,
      }}
      {...props}
    >
      {/* Chấm accent nhỏ nhấp nháy cho eyebrow label */}
      {dot && (
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            flexShrink: 0,
            width: s.dotSize,
            height: s.dotSize,
            borderRadius: "50%",
            backgroundColor: p.dotColor,
            animation: "badgePulse 2.8s ease-in-out infinite",
            "@keyframes badgePulse": {
              "0%, 100%": { opacity: 1, transform: "scale(1)" },
              "50%": { opacity: 0.4, transform: "scale(0.85)" },
            },
          }}
        />
      )}
      {children}
    </Box>
  );
}
