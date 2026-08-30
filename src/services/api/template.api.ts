import { httpClient } from "./client";

export interface TemplateCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface InvitationTemplate {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  thumbnailUrl: string;
  previewSlug?: string | null;
  category: string;
  isPremium: boolean;
  isPopular?: boolean;
  tags?: string[];
  themeConfig: {
    fontIds: string[];
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
    backgroundColor?: string;
    autoPlayMusic?: boolean;
  };
  sampleData?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt?: string;
}

export const templateApi = {
  // Lấy danh sách mẫu thiệp có hỗ trợ lọc theo danh mục
  getTemplates(params?: { category?: string; search?: string; page?: number }): Promise<InvitationTemplate[]> {
    return httpClient.get<InvitationTemplate[]>("/templates", { params });
  },

  // Lấy chi tiết một mẫu thiệp theo slug
  getTemplateBySlug(slug: string): Promise<InvitationTemplate> {
    return httpClient.get<InvitationTemplate>(`/templates/${slug}`);
  },

  // Lấy danh sách danh mục mẫu thiệp
  getCategories(): Promise<TemplateCategory[]> {
    return httpClient.get<TemplateCategory[]>("/templates/categories");
  },
};
