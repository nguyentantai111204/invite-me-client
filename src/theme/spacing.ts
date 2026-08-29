// Hệ thống Spacing & Border Radius tuân thủ quy tắc 4px Grid (chia hết cho 4)

// Bảng giá trị cơ sở 4px Grid (px)
export const spacingTokens = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
} as const;

// Padding định sẵn (px)
export const paddings = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 80,
  "5xl": 96,
} as const;

// Khoảng cách Gap định sẵn (px)
export const gaps = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
} as const;

// Bo góc Border Radius định sẵn (px) - Tất cả đều chia hết cho 4
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  full: 9999,
} as const;

export type SpacingTokenKey = keyof typeof spacingTokens;
export type PaddingKey = keyof typeof paddings;
export type GapKey = keyof typeof gaps;
export type BorderRadiusKey = keyof typeof borderRadius;
