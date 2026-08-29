/**
 * ============================================================================
 * SITE CONFIGURATION (SEO & Brand Constants)
 * ============================================================================
 * Chứa toàn bộ thông tin nền tảng, metadata SEO, URL và social links của InviteMe.
 * Dùng chung cho RootLayout, Robots, Sitemap, OpenGraph và Schema.org.
 */

export const siteConfig = {
  name: "InviteMe",
  title: "InviteMe - Thiết kế thiệp mời online",
  description:
    "Tạo thiệp cưới, sinh nhật, thôi nôi và sự kiện trực tuyến đẹp mắt, chuyên nghiệp và nhanh chóng. Quản lý danh sách khách mời và xác nhận tham dự (RSVP) tiện lợi.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://inviteme.vn",
  ogImage: "/images/og-image.png",
  keywords: [
    "InviteMe",
    "thiết kế thiệp mời online",
    "thiệp cưới online",
    "thiệp mời điện tử",
    "tạo thiệp online",
    "thiệp sinh nhật online",
    "thiệp cưới điện tử",
    "rsvp online",
    "e-invitation",
    "thiết kế thiệp cưới",
  ],
  authors: [
    {
      name: "InviteMe Team",
      url: "https://inviteme.vn",
    },
  ],
  creator: "InviteMe",
  locale: "vi_VN",
  themeColor: "#8B5CF6",
  links: {
    facebook: "https://facebook.com/invitemevn",
    tiktok: "https://tiktok.com/@invitemevn",
    supportEmail: "hotro@inviteme.vn",
  },
} as const;
