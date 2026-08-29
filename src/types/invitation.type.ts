import type { BaseEntity } from "./common.type";

export type InvitationEventType =
  | "wedding"
  | "birthday"
  | "anniversary"
  | "party"
  | "corporate";

export interface CoupleMember {
  fullName: string;
  shortName: string;
  role: "groom" | "bride";
  parentsName: string;
  photoUrl?: string;
  bio?: string;
}

export interface WeddingCouple {
  groom: CoupleMember;
  bride: CoupleMember;
  loveStoryTitle?: string;
  loveStory?: string;
}

export interface EventScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface EventLocation {
  venueName: string;
  hallName?: string;
  address: string;
  city: string;
  mapUrl?: string;
  lat?: number;
  lng?: number;
}

export interface BankAccountInfo {
  id: string;
  ownerName: string;
  bankName: string;
  accountNumber: string;
  branch?: string;
  qrCodeUrl?: string;
  note?: string;
}

export interface InvitationThemeConfig {
  fontIds: string[];
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  backgroundColor?: string;
  musicUrl?: string;
  autoPlayMusic?: boolean;
}

export interface InvitationSectionVisibility {
  hero: boolean;
  countdown: boolean;
  couple: boolean;
  loveStory: boolean;
  schedule: boolean;
  location: boolean;
  gallery: boolean;
  bankAccounts: boolean;
  rsvp: boolean;
  music: boolean;
}

export interface RsvpConfig {
  enabled: boolean;
  deadline?: string;
  allowGuestsCount?: boolean;
  maxGuestsPerResponse?: number;
  requirePhone?: boolean;
}

// Model tài liệu thiệp mời chính thức (Unified Invitation Document Model)
export interface Invitation extends BaseEntity {
  userId?: string | null;
  slug: string;
  title: string;
  description?: string;
  eventType: InvitationEventType;
  templateId?: string;

  // Trạng thái xuất bản
  isPublished: boolean;
  publishedAt?: string | null;
  passwordProtected?: boolean;
  password?: string | null;

  // Media chính
  coverImage: string;
  ogImage: string;
  eventDate: string; // ISO 8601 string
  eventTime: string; // e.g. "11:30"

  // Cấu hình theme & fonts
  themeConfig: InvitationThemeConfig;

  // Trạng thái hiển thị các section
  sectionVisibility?: InvitationSectionVisibility;
  sectionOrder?: Array<keyof InvitationSectionVisibility>;

  // Dữ liệu chi tiết các section
  couple?: WeddingCouple;
  location: EventLocation;
  schedule: EventScheduleItem[];
  gallery?: string[];
  bankAccounts?: BankAccountInfo[];

  // Cấu hình RSVP
  rsvpEnabled: boolean;
  rsvpConfig?: RsvpConfig;
}

// Alias tương thích ngược
export type InvitationData = Invitation;
export type InvitationDocument = Invitation;

// Dữ liệu gửi phản hồi RSVP từ khách mời
export interface RsvpSubmissionPayload {
  invitationId: string;
  guestName: string;
  phoneNumber?: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRequirements?: string;
  wishes?: string;
}

// Bản ghi RSVP lưu trữ trong CSDL
export interface RsvpRecord extends BaseEntity {
  invitationId: string;
  guestName: string;
  phoneNumber?: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRequirements?: string;
  wishes?: string;
}

// Payload khởi tạo / cập nhật thiệp
export interface CreateInvitationPayload {
  templateId?: string;
  slug: string;
  title: string;
  eventType: InvitationEventType;
  eventDate: string;
  eventTime: string;
  themeConfig: Partial<InvitationThemeConfig>;
  couple?: WeddingCouple;
  location: EventLocation;
}

export interface UpdateInvitationPayload extends Partial<CreateInvitationPayload> {
  description?: string;
  coverImage?: string;
  ogImage?: string;
  schedule?: EventScheduleItem[];
  gallery?: string[];
  bankAccounts?: BankAccountInfo[];
  rsvpEnabled?: boolean;
  rsvpConfig?: RsvpConfig;
  sectionVisibility?: InvitationSectionVisibility;
  isPublished?: boolean;
}

// Payload claim draft từ anonymous sang user
export interface ClaimDraftPayload {
  draftId: string;
  slug: string;
  draftData: Partial<Invitation>;
}
