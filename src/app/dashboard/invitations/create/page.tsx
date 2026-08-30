"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { StackCol, StackRow, StackCenter } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Badge } from "@/components/ui/badge.component";
import { InvitationForm } from "@/features/invitation/components";
import { useTemplate } from "@/features/invitation/hooks";
import { colors } from "@/theme/colors";
import { gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";

function CreateInvitationContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId") || undefined;
  const { template, isLoading } = useTemplate(templateId);

  if (templateId && isLoading) {
    return (
      <StackCenter sx={{ py: 8 }}>
        <CircularProgress sx={{ color: colors.gold.main }} />
      </StackCenter>
    );
  }

  const initialData = template
    ? {
        templateId: template.id,
        title: `Lễ Thành Hôn - ${template.title}`,
        coverImage: template.thumbnailUrl,
        themeConfig: template.themeConfig,
      }
    : undefined;

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
            Tạo Thiệp Mời Mới
          </Typography>
          {template && (
            <Typography variant="body2" sx={{ color: colors.gold.dark, fontSize: fontSizes.xs }}>
              Đang sử dụng mẫu: <strong>{template.title}</strong>
            </Typography>
          )}
        </StackCol>
      </StackRow>

      {/* Form */}
      <InvitationForm initialData={initialData} templateId={templateId} isEditMode={false} />
    </StackCol>
  );
}

export default function CreateInvitationPage() {
  return (
    <Suspense
      fallback={
        <StackCenter sx={{ py: 8 }}>
          <CircularProgress sx={{ color: colors.gold.main }} />
        </StackCenter>
      }
    >
      <CreateInvitationContent />
    </Suspense>
  );
}
