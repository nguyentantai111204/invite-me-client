import type {
  InvitationSectionVisibility,
  InvitationThemeConfig,
  RsvpConfig,
  InvitationEventType,
} from "@/types/invitation.type";

// Danh mục loại sự kiện hỗ trợ
export const INVITATION_EVENT_TYPE_OPTIONS: Array<{
  value: InvitationEventType;
  label: string;
  description: string;
}> = [
  {
    value: "wedding",
    label: "Tiệc Cưới & Thành Hôn",
    description: "Dành cho lễ cưới, vu quy, thành hôn và tân hôn",
  },
  {
    value: "birthday",
    label: "Sinh Nhật & Thôi Nôi",
    description: "Dành cho tiệc sinh nhật, thôi nôi, mừng thọ",
  },
  {
    value: "anniversary",
    label: "Kỷ Niệm Ngày Cưới",
    description: "Dành cho lễ kỷ niệm 5 năm, 10 năm, 25 năm...",
  },
  {
    value: "party",
    label: "Tiệc Tùng & Họp Mặt",
    description: "Dành cho liên hoan, tất niên, tân gia, private party",
  },
  {
    value: "corporate",
    label: "Sự Kiện & Doanh Nghiệp",
    description: "Dành cho hội nghị, khai trương, workshop, gala dinner",
  },
];

// Cấu hình hiển thị mặc định các section
export const DEFAULT_SECTION_VISIBILITY: InvitationSectionVisibility = {
  hero: true,
  countdown: true,
  couple: true,
  loveStory: true,
  schedule: true,
  location: true,
  gallery: true,
  bankAccounts: true,
  rsvp: true,
  music: true,
};

// Thứ tự sắp xếp mặc định của các section
export const DEFAULT_SECTION_ORDER: Array<keyof InvitationSectionVisibility> = [
  "hero",
  "countdown",
  "couple",
  "loveStory",
  "schedule",
  "location",
  "gallery",
  "bankAccounts",
  "rsvp",
  "music",
];

// Cấu hình theme mặc định (Hoàng gia Gold)
export const DEFAULT_THEME_CONFIG: InvitationThemeConfig = {
  fontIds: ["playfair", "greatVibes", "montserrat"],
  primaryColor: "#B78628", // Luxury Gold
  secondaryColor: "#E8C872", // Soft Gold
  accentColor: "#6B1D2F", // Romantic Wine Red
  backgroundColor: "#FAF8F5", // Warm Ivory
  autoPlayMusic: false,
};

// Cấu hình mặc định cho tính năng RSVP
export const DEFAULT_RSVP_CONFIG: RsvpConfig = {
  enabled: true,
  allowGuestsCount: true,
  maxGuestsPerResponse: 10,
  requirePhone: false,
};
