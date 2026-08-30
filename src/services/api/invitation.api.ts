import type { InvitationData } from "@/features/invitation/types/invitation.type";
import { httpClient } from "./client";

export interface CreateInvitationDto {
  templateId?: string;
  title: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
}

export type UpdateInvitationDto = Partial<InvitationData>;

export const invitationApi = {
  // Lấy danh sách thiệp của người dùng hiện tại (Dashboard)
  getMyInvitations(): Promise<InvitationData[]> {
    return httpClient.get<InvitationData[]>("/invitations/me");
  },

  // Lấy chi tiết thiệp để chỉnh sửa trong Editor
  getInvitationById(id: string): Promise<InvitationData> {
    return httpClient.get<InvitationData>(`/invitations/${id}`);
  },

  // Lấy thiệp công khai theo slug (Public SSR)
  getPublicInvitationBySlug(slug: string): Promise<InvitationData> {
    return httpClient.get<InvitationData>(`/invitations/public/${slug}`);
  },

  // Tạo thiệp mới
  createInvitation(payload: Record<string, unknown>): Promise<InvitationData> {
    return httpClient.post<InvitationData>("/invitations", payload);
  },

  // Cập nhật nội dung thiệp
  updateInvitation(id: string, payload: Record<string, unknown>): Promise<InvitationData> {
    return httpClient.put<InvitationData>(`/invitations/${id}`, payload);
  },

  // Xóa thiệp
  deleteInvitation(id: string): Promise<{ success?: boolean }> {
    return httpClient.delete<{ success?: boolean }>(`/invitations/${id}`);
  },

  // Xuất bản thiệp chính thức
  publishInvitation(id: string): Promise<InvitationData> {
    return httpClient.post<InvitationData>(`/invitations/${id}/publish`);
  },
};
