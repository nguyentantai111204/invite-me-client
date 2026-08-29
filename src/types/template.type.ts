import type { BaseEntity } from "./common.type";

export type TemplateCategorySlug =
  | "wedding"
  | "birthday"
  | "anniversary"
  | "corporate"
  | "party";

export interface TemplateCategory extends BaseEntity {
  name: string;
  slug: TemplateCategorySlug | string;
  description?: string;
  icon?: string;
  templateCount?: number;
}

export interface TemplateTheme {
  fontIds: string[];
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  backgroundColor?: string;
}

export interface InvitationTemplate extends BaseEntity {
  title: string;
  slug: string;
  thumbnailUrl: string;
  previewUrl?: string;
  category: TemplateCategorySlug | string;
  isPremium: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  themeConfig: TemplateTheme;
  sampleData?: Record<string, unknown>;
}
