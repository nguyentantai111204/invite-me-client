// Danh mục các khóa lưu trữ LocalStorage, SessionStorage và Cookies dùng chung
export const STORAGE_KEYS = {
  AUTH_TOKEN: "inviteme_auth_token",
  REFRESH_TOKEN: "inviteme_refresh_token",
  USER_PROFILE: "inviteme_user_profile",
  ANONYMOUS_DRAFT_ID: "inviteme_anonymous_draft_id",
  ANONYMOUS_DRAFT_DATA: "inviteme_anonymous_draft_data",
  THEME_MODE: "inviteme_theme_mode",
} as const;

export const COOKIE_KEYS = {
  AUTH_TOKEN: "inviteme_auth_token",
  REFRESH_TOKEN: "inviteme_refresh_token",
  ANONYMOUS_SESSION: "inviteme_anon_session",
} as const;
