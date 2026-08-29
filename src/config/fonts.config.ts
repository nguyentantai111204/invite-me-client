import {
  Inter,
  Playfair_Display,
  Cormorant_Garamond,
  Cinzel,
  Great_Vibes,
  Alex_Brush,
  Dancing_Script,
  Be_Vietnam_Pro,
  Montserrat,
  Plus_Jakarta_Sans,
} from "next/font/google";

// Font chính của hệ thống UI, Dashboard và Marketing
export const fontSans = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

// Tuyển tập font cho thiệp mời (Chỉ nạp khi template được xem)

// Nhóm Serif: Sang trọng, Hoàng gia, Thiệp cưới cổ điển
export const fontPlayfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const fontCormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const fontCinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

// --- Nhóm Script / Calligraphy: Tên dâu rể, chữ viết tay nghệ thuật ---
export const fontGreatVibes = Great_Vibes({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const fontAlexBrush = Alex_Brush({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const fontDancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing-script",
  display: "swap",
});

// --- Nhóm Modern Sans-serif: Tối giản, Hiện đại, Tiệc sinh nhật, Sự kiện ---
export const fontBeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const fontMontserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const fontPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

// Dùng cho Editor font picker và Dynamic Template Renderer.
export type FontCategory = "serif" | "sans-serif" | "script" | "display";

export interface TemplateFontConfig {
  id: string;
  name: string;
  category: FontCategory;
  variable: string;
  className: string;
  fontFamilyCSS: string;
}

export const TEMPLATE_FONTS: Record<string, TemplateFontConfig> = {
  playfair: {
    id: "playfair",
    name: "Playfair Display",
    category: "serif",
    variable: fontPlayfair.variable,
    className: fontPlayfair.className,
    fontFamilyCSS: `var(--font-playfair), serif`,
  },
  cormorant: {
    id: "cormorant",
    name: "Cormorant Garamond",
    category: "serif",
    variable: fontCormorant.variable,
    className: fontCormorant.className,
    fontFamilyCSS: `var(--font-cormorant), serif`,
  },
  cinzel: {
    id: "cinzel",
    name: "Cinzel",
    category: "serif",
    variable: fontCinzel.variable,
    className: fontCinzel.className,
    fontFamilyCSS: `var(--font-cinzel), serif`,
  },
  greatVibes: {
    id: "greatVibes",
    name: "Great Vibes",
    category: "script",
    variable: fontGreatVibes.variable,
    className: fontGreatVibes.className,
    fontFamilyCSS: `var(--font-great-vibes), cursive`,
  },
  alexBrush: {
    id: "alexBrush",
    name: "Alex Brush",
    category: "script",
    variable: fontAlexBrush.variable,
    className: fontAlexBrush.className,
    fontFamilyCSS: `var(--font-alex-brush), cursive`,
  },
  dancingScript: {
    id: "dancingScript",
    name: "Dancing Script",
    category: "script",
    variable: fontDancingScript.variable,
    className: fontDancingScript.className,
    fontFamilyCSS: `var(--font-dancing-script), cursive`,
  },
  beVietnamPro: {
    id: "beVietnamPro",
    name: "Be Vietnam Pro",
    category: "sans-serif",
    variable: fontBeVietnamPro.variable,
    className: fontBeVietnamPro.className,
    fontFamilyCSS: `var(--font-be-vietnam-pro), sans-serif`,
  },
  montserrat: {
    id: "montserrat",
    name: "Montserrat",
    category: "sans-serif",
    variable: fontMontserrat.variable,
    className: fontMontserrat.className,
    fontFamilyCSS: `var(--font-montserrat), sans-serif`,
  },
  plusJakartaSans: {
    id: "plusJakartaSans",
    name: "Plus Jakarta Sans",
    category: "sans-serif",
    variable: fontPlusJakartaSans.variable,
    className: fontPlusJakartaSans.className,
    fontFamilyCSS: `var(--font-plus-jakarta-sans), sans-serif`,
  },
};

// Helper lấy font variables tương ứng cho danh sách font IDs của 1 template.
export function getTemplateFontVariables(fontIds: string[]): string {
  return fontIds
    .map((id) => TEMPLATE_FONTS[id]?.variable)
    .filter(Boolean)
    .join(" ");
}
