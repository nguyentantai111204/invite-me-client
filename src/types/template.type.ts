import type { BaseEntity } from "./common.type";
import type { InvitationThemeConfig, Invitation } from "./invitation.type";

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

export type TemplateTheme = InvitationThemeConfig;

export interface InvitationTemplate extends BaseEntity {
  title: string;
  slug: string;
  thumbnailUrl: string;
  previewUrl?: string;
  category: TemplateCategorySlug | string;
  isPremium: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  themeConfig: InvitationThemeConfig;
  sampleData?: Partial<Invitation>;
}

export interface TemplatePreset extends InvitationTemplate {
  description: string;
  previewSlug: string;
  tags: string[];
}
