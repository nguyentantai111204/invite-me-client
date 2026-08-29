/**
 * ============================================================================
 * ENVIRONMENT CONFIGURATION (Type-safe Env Access & Safe Fallbacks)
 * ============================================================================
 * Đảm bảo ứng dụng luôn có giá trị hợp lệ khi chạy ở bất kỳ môi trường nào
 * (Local, CI/CD, Staging, Production) mà không bị crash nếu thiếu biến môi trường.
 */

export const envConfig = {
  /**
   * Base URL của ứng dụng Web Client
   * Mặc định fallback về https://inviteme.vn nếu không được cung cấp.
   */
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  /**
   * Base URL của Backend REST API
   */
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1",

  /**
   * Môi trường thực thi
   */
  environment:
    process.env.NEXT_PUBLIC_ENVIRONMENT ||
    process.env.NODE_ENV ||
    "development",

  /**
   * Helpers kiểm tra môi trường
   */
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
} as const;
