import type { TemplateCategory, TemplatePreset } from "@/types/template.type";

// Danh mục các thể loại mẫu thiệp
export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: "cat-wedding",
    name: "Thiệp Cưới",
    slug: "wedding",
    description: "Mẫu thiệp cưới sang trọng, lãng mạn phong cách hoàng gia và tối giản",
    icon: "FavoriteIcon",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "cat-birthday",
    name: "Sinh Nhật & Thôi Nôi",
    slug: "birthday",
    description: "Mẫu thiệp sinh nhật tươi vui, ấm áp cho bé và người thân",
    icon: "CakeIcon",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "cat-party",
    name: "Tiệc Tùng & Tân Gia",
    slug: "party",
    description: "Mẫu thiệp tiệc mừng, tân gia, họp mặt bạn bè đầy phong cách",
    icon: "CelebrationIcon",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "cat-corporate",
    name: "Sự Kiện & Khai Trương",
    slug: "corporate",
    description: "Mẫu thiệp chuyên nghiệp cho hội nghị, gala, khai trương",
    icon: "BusinessCenterIcon",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
];

// Mẫu thiệp tiêu biểu khởi tạo sẵn
export const FEATURED_TEMPLATES: TemplatePreset[] = [
  {
    id: "royal-luxury",
    slug: "royal-luxury",
    title: "Hoàng Gia Sang Trọng",
    category: "wedding",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    isPremium: true,
    isPopular: true,
    description: "Phong cách cổ điển Châu Âu với font Playfair Display và bảng màu vàng hoàng kim sang trọng.",
    tags: ["Playfair", "Vàng Gold", "Cổ Điển"],
    themeConfig: {
      fontIds: ["playfair", "greatVibes", "montserrat"],
      primaryColor: "#B78628",
      secondaryColor: "#E8C872",
      accentColor: "#6B1D2F",
      backgroundColor: "#FAF8F5",
      autoPlayMusic: false,
    },
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "minimalist-rose",
    slug: "minimalist-rose",
    title: "Hồng Pastel Tối Giản",
    category: "wedding",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    isPremium: false,
    isNew: true,
    description: "Thiết kế tối giản thanh lịch với tông hồng pastel nhẹ nhàng, phù hợp phong cách hiện đại.",
    tags: ["Tối Giản", "Pastel", "Hiện Đại"],
    themeConfig: {
      fontIds: ["montserrat", "greatVibes"],
      primaryColor: "#E58B7B",
      secondaryColor: "#F7D8D3",
      accentColor: "#8B4F58",
      backgroundColor: "#FFF9F8",
      autoPlayMusic: false,
    },
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "classic-gold",
    slug: "classic-gold",
    title: "Vàng Kim Cổ Điển",
    category: "wedding",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    isPremium: false,
    isPopular: true,
    description: "Kết hợp vàng kim óng ánh và nền kem ấm áp — sang trọng mà vẫn gần gũi, ấm cúng.",
    tags: ["Vàng Kim", "Serif", "Sang Trọng"],
    themeConfig: {
      fontIds: ["playfair", "montserrat"],
      primaryColor: "#D4AF37",
      secondaryColor: "#F4E0A5",
      accentColor: "#5C3A21",
      backgroundColor: "#FCFBF7",
      autoPlayMusic: false,
    },
    createdAt: "2026-08-01T00:00:00.000Z",
  },
];
