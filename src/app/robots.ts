import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

/**
 * ============================================================================
 * ROBOTS.TXT GENERATOR
 * ============================================================================
 * Tự động tạo /robots.txt cho công cụ tìm kiếm (Googlebot, Bingbot...).
 * - Cho phép crawl toàn bộ trang công khai (Home, Templates, Pricing, About, /i/[slug]).
 * - Chặn crawl các route nội bộ/bảo mật (/api, /dashboard, /editor, /admin).
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/editor/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
