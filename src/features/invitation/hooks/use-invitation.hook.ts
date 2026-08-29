"use client";

import useSWR from "swr";
import { invitationApi, type UpdateInvitationDto } from "@/services/api";
import type { InvitationData } from "../types/invitation.type";

/**
 * ============================================================================
 * HOOK: USE INVITATION (Client-side Data Fetching & Mutation with SWR)
 * ============================================================================
 * Architecture Flow:
 * Component -> useInvitation() Hook -> invitationApi -> NestJS Backend
 */
export function useInvitation(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<InvitationData>(
    id ? `/invitations/${id}` : null,
    () => (id ? invitationApi.getInvitationById(id) : Promise.reject("No ID provided")),
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
    }
  );

  const updateInvitation = async (dto: UpdateInvitationDto) => {
    if (!id) return;
    try {
      const updated = await invitationApi.updateInvitation(id, dto);
      await mutate(updated, false); // Optimistic / local update
      return updated;
    } catch (err) {
      await mutate(); // Revert on failure
      throw err;
    }
  };

  return {
    invitation: data,
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
    updateInvitation,
  };
}

/**
 * Hook lấy danh sách thiệp của người dùng hiện tại
 */
export function useMyInvitations(params?: { page?: number; limit?: number; search?: string }) {
  const queryKey = params ? `/invitations?${JSON.stringify(params)}` : "/invitations";

  const { data, error, isLoading, mutate } = useSWR<InvitationData[]>(
    queryKey,
    () => invitationApi.getMyInvitations(params),
    {
      revalidateOnFocus: true,
    }
  );

  return {
    invitations: data || [],
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
  };
}
