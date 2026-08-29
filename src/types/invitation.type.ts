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
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  musicUrl?: string;
  autoPlayMusic?: boolean;
}

export interface Invitation extends BaseEntity {
  slug: string;
  title: string;
  description?: string;
  eventType: InvitationEventType;
  coverImage: string;
  ogImage: string;
  eventDate: string; // ISO 8601 string
  eventTime: string;
  couple?: WeddingCouple;
  location: EventLocation;
  schedule: EventScheduleItem[];
  gallery?: string[];
  bankAccounts?: BankAccountInfo[];
  themeConfig: InvitationThemeConfig;
  rsvpEnabled: boolean;
  isPublished: boolean;
}

export type InvitationData = Invitation;

export interface RsvpSubmissionPayload {
  invitationId: string;
  guestName: string;
  phoneNumber?: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRequirements?: string;
  wishes?: string;
}

export interface RsvpRecord extends BaseEntity {
  invitationId: string;
  guestName: string;
  phoneNumber?: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRequirements?: string;
  wishes?: string;
}
