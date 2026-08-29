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
  getMyInvitations(params?: { page?: number; limit?: number; search?: string }): Promise<InvitationData[]> {
    return httpClient.get<InvitationData[]>("/invitations", { params });
  },

  // Lấy chi tiết thiệp để chỉnh sửa trong Editor
  getInvitationById(id: string): Promise<InvitationData> {
    return httpClient.get<InvitationData>(`/invitations/${id}`);
  },

  // Lấy thiệp công khai theo slug (Public SSR)
  getPublicInvitationBySlug(slug: string): Promise<InvitationData> {
    return httpClient.get<InvitationData>(`/invitations/public/${slug}`);
  },

  // Tạo thiệp mới từ template
  createInvitation(dto: CreateInvitationDto): Promise<InvitationData> {
    return httpClient.post<InvitationData>("/invitations", dto);
  },

  // Cập nhật nội dung thiệp
  updateInvitation(id: string, dto: UpdateInvitationDto): Promise<InvitationData> {
    return httpClient.put<InvitationData>(`/invitations/${id}`, dto);
  },

  // Xóa thiệp
  deleteInvitation(id: string): Promise<{ success: boolean }> {
    return httpClient.delete<{ success: boolean }>(`/invitations/${id}`);
  },

  // Bật hoặc tắt trạng thái xuất bản thiệp
  togglePublish(id: string, isPublished: boolean): Promise<InvitationData> {
    return httpClient.patch<InvitationData>(`/invitations/${id}/publish`, { isPublished });
  },
};
