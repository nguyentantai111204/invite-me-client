// Hệ thống màu sắc chuẩn theo bộ logo thiệp cưới & Error states InviteMe

export const colors = {
  // 1. Màu vàng hoàng gia (Vòng nguyệt quế & nhẫn cưới)
  gold: {
    50: "#FAF6EE",
    100: "#F5ECDC",
    200: "#EAD6B5",
    300: "#DCBE8A",
    400: "#CCA563",
    500: "#B78628", // Màu vàng chính
    600: "#A1721C",
    700: "#875C12",
    800: "#6D470B",
    900: "#503205",
    light: "#E8C872",
    main: "#B78628",
    dark: "#875C12",
    contrastText: "#FFFFFF",
    gradient: "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA771C 100%)",
    buttonGradient: "linear-gradient(135deg, #D4AF37 0%, #B78628 50%, #966A1E 100%)",
    buttonHoverGradient: "linear-gradient(135deg, #E8C872 0%, #C5A059 50%, #A1721C 100%)",
  },

  // 2. Màu hồng phấn (Hoa hồng dâu rể)
  rose: {
    50: "#FDF6F4",
    100: "#FBEDE9",
    200: "#F6D7CF",
    300: "#F0B8AA",
    400: "#E89A88",
    500: "#DE7C66", // Màu hồng chính
    600: "#C95D46",
    700: "#A84732",
    800: "#873523",
    900: "#692517",
    light: "#FAD2C0",
    main: "#E58B7B",
    dark: "#A84732",
    contrastText: "#FFFFFF",
    gradient: "linear-gradient(135deg, #FBEDE9 0%, #E58B7B 100%)",
  },

  // 3. Màu thương hiệu & Gradient
  brand: {
    purple: "#8B5CF6",
    purpleLight: "#A78BFA",
    purpleDark: "#6D28D9",
    pink: "#EC4899",
    pinkLight: "#F472B6",
    pinkDark: "#DB2777",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    goldGradient: "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #B78628 100%)",
    luxuryGradient: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
    goldButtonGradient: "linear-gradient(135deg, #D4AF37 0%, #B78628 50%, #966A1E 100%)",
    goldButtonHoverGradient: "linear-gradient(135deg, #E8C872 0%, #C5A059 50%, #A1721C 100%)",
  },

  // 4. Định nghĩa Primary & Secondary cho MUI Theme
  primary: {
    light: "#CCA563",
    main: "#B78628", // Vàng hoàng gia
    dark: "#875C12",
    contrastText: "#FFFFFF",
  },

  secondary: {
    light: "#FAD2C0",
    main: "#E58B7B", // Hồng phấn
    dark: "#A84732",
    contrastText: "#FFFFFF",
  },

  // 5. Màu nền (Kem ấm Champagne, Trắng & Nâu đen)
  background: {
    light: "#FAF8F5", // Nền kem ấm
    default: "#FAF8F5",
    paper: "#FFFFFF",
    cream: "#FDFBF7",
    subtle: "#F5F2EB",
    dark: "#1A1612", // Nền tối hoàng gia
    darkLuxury: "#1A1612",
    darkFooter: "#1F1F1F",
    darkPaper: "#241E18",
    radialGoldHero: "radial-gradient(ellipse at 50% 10%, rgba(183, 134, 40, 0.12), transparent 70%), #FAF8F5",
    radialGold404: "radial-gradient(ellipse at 50% 30%, rgba(183, 134, 40, 0.12), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(229, 139, 123, 0.08), transparent 50%)",
    radialError500: "radial-gradient(ellipse at 50% 30%, rgba(220, 38, 38, 0.08), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(183, 134, 40, 0.08), transparent 50%)",
    overlayHeroDark: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55))",
    overlayCardDark: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))",
  },

  // 6. Màu văn bản (Độ tương phản cao)
  text: {
    primary: "#2C2416", // Nâu đen đậm (Deep Espresso)
    secondary: "#6B5E4B", // Nâu ấm
    disabled: "#A89C8A",
    gold: "#B78628",
    inverse: "#FFFFFF",
    white: "#FFFFFF",
    mutedWhite: "rgba(255, 255, 255, 0.7)",
    faintWhite: "rgba(255, 255, 255, 0.4)",
  },

  // 7. Màu trạng thái hệ thống (500 Error, 404 Not Found, Empty)
  status: {
    // 500 Server Error
    error: {
      light: "#FEF2F2",
      main: "#DC2626",
      dark: "#B91C1C",
      contrastText: "#FFFFFF",
    },
    // 404 Not Found
    warning: {
      light: "#FFFBEB",
      main: "#D97706",
      dark: "#B45309",
      contrastText: "#FFFFFF",
    },
    // Empty State (No Content Found)
    info: {
      light: "#FAF6EE",
      main: "#B78628",
      dark: "#875C12",
      contrastText: "#FFFFFF",
    },
    // Success / Xác nhận thành công
    success: {
      light: "#ECFDF5",
      main: "#059669",
      dark: "#047857",
      contrastText: "#FFFFFF",
    },
  },

  // 8. Đường viền & Phân cách
  divider: "rgba(183, 134, 40, 0.15)",
  border: {
    gold: "rgba(183, 134, 40, 0.25)",
    goldLight: "rgba(183, 134, 40, 0.12)",
    goldDashed: "rgba(183, 134, 40, 0.3)",
    subtle: "rgba(0, 0, 0, 0.08)",
    whiteSubtle: "rgba(255, 255, 255, 0.15)",
  },
} as const;