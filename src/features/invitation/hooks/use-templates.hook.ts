"use client";

import useSWR from "swr";
import { templateApi, type InvitationTemplate } from "@/services/api";

// Hook lấy danh sách mẫu thiệp với SWR caching
export function useTemplates(category?: string) {
  const queryKey = category ? `/templates?category=${category}` : "/templates";

  const { data, error, isLoading, mutate } = useSWR<InvitationTemplate[]>(
    queryKey,
    () => templateApi.getTemplates(category ? { category } : undefined),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  return {
    templates: data || [],
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
  };
}

// Hook lấy chi tiết một mẫu thiệp theo slug hoặc id
export function useTemplate(slugOrId?: string) {
  const { data, error, isLoading, mutate } = useSWR<InvitationTemplate>(
    slugOrId ? `/templates/${slugOrId}` : null,
    () => (slugOrId ? templateApi.getTemplateBySlug(slugOrId) : Promise.reject("No slug provided")),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  return {
    template: data,
    isLoading,
    isError: Boolean(error),
    error,
    mutate,
  };
}
