// Hệ thống Box Shadow chuẩn toàn diện cho InviteMe

export const shadows = {
  none: "none",
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  sm: "0 2px 8px rgba(0, 0, 0, 0.04)",
  md: "0 4px 16px rgba(0, 0, 0, 0.06)",
  lg: "0 8px 24px rgba(0, 0, 0, 0.08)",
  xl: "0 12px 32px rgba(0, 0, 0, 0.08)",
  "2xl": "0 20px 48px rgba(0, 0, 0, 0.12)",
  "3xl": "0 24px 60px rgba(0, 0, 0, 0.15)",

  // Shadow chuyên biệt cho Card
  card: "0 4px 20px rgba(0, 0, 0, 0.04)",
  cardHover: "0 14px 30px rgba(183, 134, 40, 0.15)",
  cardFloating: "0 24px 48px rgba(0, 0, 0, 0.12)",

  // Shadow ánh vàng hoàng gia
  goldSm: "0 4px 12px rgba(183, 134, 40, 0.35)",
  goldMd: "0 4px 16px rgba(183, 134, 40, 0.35)",
  goldLg: "0 6px 20px rgba(183, 134, 40, 0.45)",
  goldXl: "0 24px 60px rgba(183, 134, 40, 0.35)",
  goldGlow: "0 12px 24px rgba(183, 134, 40, 0.15)",

  // Shadow màu hồng phấn
  roseSm: "0 4px 14px rgba(229, 139, 123, 0.3)",
  roseLg: "0 6px 18px rgba(229, 139, 123, 0.4)",

  // Shadow Modal & Dialog
  modal: "0 20px 48px rgba(0, 0, 0, 0.15)",

  // Shadow Avatar dâu rể
  avatar: "0 6px 20px rgba(0, 0, 0, 0.12)",

  // Shadow báo lỗi
  errorGlow: "0 12px 24px rgba(220, 38, 38, 0.12)",

  // Shadow bóng chữ
  textShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
} as const;

export type ShadowKey = keyof typeof shadows;
