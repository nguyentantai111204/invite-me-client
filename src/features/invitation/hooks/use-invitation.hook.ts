"use client";

import useSWR from "swr";
import { useCallback } from "react";
import { invitationApi } from "@/services/api";
import type { InvitationData } from "../types/invitation.type";

// Hook lấy danh sách tất cả các thiệp của user đăng nhập
export function useMyInvitations() {
  const { data, error, isLoading, mutate } = useSWR<InvitationData[]>(
    "/invitations/me",
    () => invitationApi.getMyInvitations(),
    {
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  );

  const deleteInvitation = useCallback(
    async (id: string) => {
      await invitationApi.deleteInvitation(id);
      await mutate((prev) => (prev ? prev.filter((item) => item.id !== id) : []), false);
    },
    [mutate]
  );

  const publishInvitation = useCallback(
    async (id: string) => {
      const updated = await invitationApi.publishInvitation(id);
      await mutate(
        (prev) => (prev ? prev.map((item) => (item.id === id ? updated : item)) : []),
        false
      );
      return updated;
    },
    [mutate]
  );

  return {
    invitations: data || [],
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
    deleteInvitation,
    publishInvitation,
  };
}

// Hook lấy chi tiết một thiệp để xem hoặc chỉnh sửa
export function useInvitation(id?: string) {
  const { data, error, isLoading, mutate } = useSWR<InvitationData>(
    id ? `/invitations/${id}` : null,
    () => (id ? invitationApi.getInvitationById(id) : Promise.reject("No ID provided")),
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
    }
  );

  const updateInvitation = useCallback(
    async (payload: Record<string, unknown>) => {
      if (!id) return;
      const updated = await invitationApi.updateInvitation(id, payload);
      await mutate(updated, false);
      return updated;
    },
    [id, mutate]
  );

  const publish = useCallback(async () => {
    if (!id) return;
    const updated = await invitationApi.publishInvitation(id);
    await mutate(updated, false);
    return updated;
  }, [id, mutate]);

  return {
    invitation: data,
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
    updateInvitation,
    publish,
  };
}
