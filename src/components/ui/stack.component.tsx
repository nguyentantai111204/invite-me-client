import React from "react";
import Stack, { type StackProps } from "@mui/material/Stack";
import {
  stackRowStyle,
  stackRowAlignJustCenterStyle,
  stackRowAlignJustBetweenStyle,
  stackRowAlignJustStartStyle,
  stackRowAlignJustEndStyle,
  stackRowWrapStyle,
  stackColumnStyle,
  stackColAlignJustCenterStyle,
  stackColAlignJustBetweenStyle,
  stackColAlignJustStartStyle,
  stackColAlignJustEndStyle,
  centerStyle,
} from "@/theme/styles/layout.styles";

// Export các layout styles để dùng chung cho TableCell, Box, v.v.
export * from "@/theme/styles/layout.styles";

export interface CustomStackProps extends Omit<StackProps, "gap"> {
  gap?: string | number;
}

// Stack hướng ngang (Row) cơ bản
export const StackRow = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowStyle, ...sx }}
      {...props}
    />
  )
);
StackRow.displayName = "StackRow";

// Stack hàng ngang căn giữa 2 trục (Align Center + Justify Center)
export const StackRowAlignJustCenter = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowAlignJustCenterStyle, ...sx }}
      {...props}
    />
  )
);
StackRowAlignJustCenter.displayName = "StackRowAlignJustCenter";
export const StackRowCenter = StackRowAlignJustCenter;

// Stack hàng ngang căn đều 2 bên (Align Center + Justify Space-Between)
export const StackRowAlignJustBetween = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowAlignJustBetweenStyle, ...sx }}
      {...props}
    />
  )
);
StackRowAlignJustBetween.displayName = "StackRowAlignJustBetween";
export const StackRowBetween = StackRowAlignJustBetween;

// Stack hàng ngang căn đầu (Align Center + Justify Flex-Start)
export const StackRowAlignJustStart = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowAlignJustStartStyle, ...sx }}
      {...props}
    />
  )
);
StackRowAlignJustStart.displayName = "StackRowAlignJustStart";
export const StackRowStart = StackRowAlignJustStart;

// Stack hàng ngang căn cuối (Align Center + Justify Flex-End)
export const StackRowAlignJustEnd = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowAlignJustEndStyle, ...sx }}
      {...props}
    />
  )
);
StackRowAlignJustEnd.displayName = "StackRowAlignJustEnd";
export const StackRowEnd = StackRowAlignJustEnd;

// Stack hàng ngang tự động xuống dòng khi đầy
export const StackRowWrap = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "row", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackRowWrapStyle, ...sx }}
      {...props}
    />
  )
);
StackRowWrap.displayName = "StackRowWrap";

// Stack hướng dọc (Column) cơ bản
export const StackCol = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "column", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackColumnStyle, ...sx }}
      {...props}
    />
  )
);
StackCol.displayName = "StackCol";
export const StackColumn = StackCol;

// Stack cột dọc căn giữa 2 trục (Align Center + Justify Center)
export const StackColAlignJustCenter = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "column", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackColAlignJustCenterStyle, ...sx }}
      {...props}
    />
  )
);
StackColAlignJustCenter.displayName = "StackColAlignJustCenter";
export const StackColCenter = StackColAlignJustCenter;

// Stack cột dọc căn đều 2 bên (Align Center + Justify Space-Between)
export const StackColAlignJustBetween = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "column", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackColAlignJustBetweenStyle, ...sx }}
      {...props}
    />
  )
);
StackColAlignJustBetween.displayName = "StackColAlignJustBetween";
export const StackColBetween = StackColAlignJustBetween;

// Stack cột dọc căn trái (Align Flex-Start + Justify Center)
export const StackColAlignJustStart = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "column", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackColAlignJustStartStyle, ...sx }}
      {...props}
    />
  )
);
StackColAlignJustStart.displayName = "StackColAlignJustStart";
export const StackColStart = StackColAlignJustStart;

// Stack cột dọc căn phải (Align Flex-End + Justify Center)
export const StackColAlignJustEnd = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, direction = "column", gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      direction={direction}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...stackColAlignJustEndStyle, ...sx }}
      {...props}
    />
  )
);
StackColAlignJustEnd.displayName = "StackColAlignJustEnd";
export const StackColEnd = StackColAlignJustEnd;

// Stack căn giữa tuyệt đối cả 2 chiều
export const StackCenter = React.forwardRef<HTMLDivElement, CustomStackProps>(
  ({ sx, gap, spacing, ...props }, ref) => (
    <Stack
      ref={ref}
      spacing={spacing !== undefined ? spacing : gap}
      sx={{ ...centerStyle, ...sx }}
      {...props}
    />
  )
);
StackCenter.displayName = "StackCenter";
