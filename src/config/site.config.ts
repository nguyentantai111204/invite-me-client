// Thông tin thương hiệu, SEO metadata và liên kết mạng xã hội
import { envConfig } from "./env.config";

export const siteConfig = {
  name: "TTNY",
  tagline: "Nền tảng thiệp mời online hoàng gia",
  title: "TTNY — Thiết kế thiệp mời online sang trọng",
  description:
    "Tạo thiệp cưới, sinh nhật và sự kiện trực tuyến đẹp mắt, sang trọng. Chia sẻ qua Zalo, Messenger chỉ trong vài phút. Quản lý RSVP và danh sách khách mời tiện lợi.",
  url: envConfig.appUrl,
  ogImage: "/images/og-image.png",
  keywords: [
    "TTNY",
    "thiết kế thiệp mời online",
    "thiệp cưới online",
    "thiệp mời điện tử",
    "tạo thiệp online",
    "thiệp sinh nhật online",
    "thiệp cưới điện tử",
    "rsvp online",
    "e-invitation",
    "thiết kế thiệp cưới",
    "duyên phận",
    "lương duyên",
  ],
  authors: [
    {
      name: "TTNYTTNY",
      url: "https://TTNY.vn",
    },
  ],
  creator: "TTNY",
  locale: "vi_VN",
  themeColor: "#B78628",
  links: {
    facebook: "https://facebook.com/TTNY",
    tiktok: "https://tiktok.com/@TTNY",
    supportEmail: "hotro@gmail.com",
  },
} as const;
