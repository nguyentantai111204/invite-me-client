// Danh mục các Endpoint API của hệ thống Backend
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  INVITATIONS: {
    BASE: "/invitations",
    MY_INVITATIONS: "/invitations/me",
    PUBLIC: (slug: string) => `/invitations/public/${slug}`,
    DETAIL: (id: string) => `/invitations/${id}`,
    CLAIM_DRAFT: "/invitations/claim-draft",
    PUBLISH: (id: string) => `/invitations/${id}/publish`,
    ANALYTICS: (id: string) => `/invitations/${id}/analytics`,
  },
  TEMPLATES: {
    BASE: "/templates",
    CATEGORIES: "/templates/categories",
    DETAIL: (idOrSlug: string) => `/templates/${idOrSlug}`,
  },
  RSVP: {
    BASE: "/rsvp",
    SUBMIT: "/rsvp",
    BY_INVITATION: (invitationId: string) => `/invitations/${invitationId}/rsvps`,
    EXPORT: (invitationId: string) => `/invitations/${invitationId}/rsvps/export`,
  },
  UPLOAD: {
    IMAGE: "/upload/image",
    AUDIO: "/upload/audio",
  },
} as const;
