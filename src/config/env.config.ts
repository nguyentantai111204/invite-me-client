// Cấu hình biến môi trường có giá trị fallback an toàn

export const envConfig = {
  // Base URL của Web Client
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  // Base URL của Backend REST API
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1",

  // Môi trường thực thi (development | staging | production)
  environment:
    process.env.NEXT_PUBLIC_ENVIRONMENT ||
    process.env.NODE_ENV ||
    "development",

  // Trạng thái môi trường
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
} as const;
