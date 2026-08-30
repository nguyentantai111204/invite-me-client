"use client";

import React, { use } from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { StackCol, StackRow, StackCenter } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { EmptyState } from "@/components/ui/empty-state.component";
import { InvitationForm } from "@/features/invitation/components";
import { useInvitation } from "@/features/invitation/hooks";
import { colors } from "@/theme/colors";
import { gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";

export default function EditInvitationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const { invitation, isLoading, isError, mutate } = useInvitation(id);

  if (isLoading) {
    return (
      <StackCenter sx={{ py: 8 }}>
        <CircularProgress sx={{ color: colors.gold.main }} />
      </StackCenter>
    );
  }

  if (isError || !invitation) {
    return (
      <EmptyState
        title="Không tìm thấy thiệp mời"
        description="Thiệp mời này không tồn tại hoặc bạn không có quyền chỉnh sửa."
        action={
          <Button component={Link} href="/dashboard" variant="outlined">
            Quay lại Dashboard
          </Button>
        }
      />
    );
  }

  return (
    <StackCol gap={`${gaps.lg}px`}>
      {/* Header */}
      <StackRow gap={`${gaps.md}px`} sx={{ alignItems: "center" }}>
        <Button
          component={Link}
          href="/dashboard"
          variant="outlined"
          size="small"
          startIcon={<ArrowBackIcon />}
          sx={{
            borderColor: colors.border.subtle,
            color: colors.text.secondary,
          }}
        >
          Quay lại
        </Button>

        <StackCol gap="2px">
          <Typography
            variant="h5"
            sx={{
              fontWeight: fontWeights.bold,
              color: colors.text.primary,
              fontSize: fontSizes["2xl"],
            }}
          >
            Chỉnh Sửa Thiệp Mời
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: fontSizes.xs }}>
            Đường dẫn: <strong>/i/{invitation.slug}</strong>
          </Typography>
        </StackCol>
      </StackRow>

      {/* Form */}
      <InvitationForm initialData={invitation} isEditMode={true} />
    </StackCol>
  );
}
