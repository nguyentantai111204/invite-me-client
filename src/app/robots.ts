import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

// Cấu hình quy tắc crawl cho Googlebot & Search Engines
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
