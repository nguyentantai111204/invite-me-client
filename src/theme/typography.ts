import type { ThemeOptions } from "@mui/material/styles";

// Trọng lượng font (Font Weight)
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Cỡ chữ (Font Size)
export const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
} as const;

// Chiều cao dòng (Line Height)
export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// Khoảng cách ký tự (Letter Spacing)
export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
  mega: "0.2em", // Dành cho overline / Save the date
} as const;

// Nhóm font gia đình (Font Families)
export const fontFamilies = {
  sans: [
    "var(--font-inter)",
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    "sans-serif",
  ].join(","),
  serif: "var(--font-playfair), 'Playfair Display', Georgia, serif",
  script: "var(--font-great-vibes), 'Great Vibes', cursive",
  vietnamese: "var(--font-be-vietnam-pro), 'Be Vietnam Pro', sans-serif",
} as const;

// Cấu hình chuẩn cho MUI Typography
export const typography: ThemeOptions["typography"] = {
  fontFamily: fontFamilies.sans,

  h1: {
    fontWeight: fontWeights.extrabold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },

  h2: {
    fontWeight: fontWeights.extrabold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.tight,
  },

  h3: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.snug,
  },

  h4: {
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.snug,
  },

  h5: {
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },

  h6: {
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },

  subtitle1: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },

  subtitle2: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },

  body1: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.relaxed,
  },

  body2: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.relaxed,
  },

  button: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    textTransform: "none",
  },

  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
  },

  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.wider,
    textTransform: "uppercase",
  },
};