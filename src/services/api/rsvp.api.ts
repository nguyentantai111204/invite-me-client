import type { RsvpSubmissionPayload } from "@/features/invitation/types/invitation.type";
import { httpClient } from "./client";

export interface RsvpRecord {
  id: string;
  invitationId: string;
  guestName: string;
  phoneNumber?: string;
  attending: boolean;
  numberOfGuests: number;
  dietaryRequirements?: string;
  wishes?: string;
  createdAt: string;
}

export const rsvpApi = {
  /**
   * Khách mời gửi xác nhận tham dự (Public)
   */
  submitRsvp(payload: RsvpSubmissionPayload): Promise<{ success: boolean; message: string }> {
    return httpClient.post<{ success: boolean; message: string }>("/rsvp", payload);
  },

  /**
   * Chủ tiệc lấy danh sách khách mời đã RSVP (Dashboard)
   */
  getInvitationRsvps(invitationId: string): Promise<RsvpRecord[]> {
    return httpClient.get<RsvpRecord[]>(`/invitations/${invitationId}/rsvps`);
  },

  /**
   * Xuất danh sách RSVP ra file Excel / CSV
   */
  exportRsvps(invitationId: string): Promise<{ downloadUrl: string }> {
    return httpClient.get<{ downloadUrl: string }>(`/invitations/${invitationId}/rsvps/export`);
  },
};
