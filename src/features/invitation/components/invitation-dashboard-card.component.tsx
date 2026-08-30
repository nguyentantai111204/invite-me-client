"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import { StackCol, StackRow, StackRowBetween, StackCenter, stackColumnStyle } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { Badge } from "@/components/ui/badge.component";
import { Modal } from "@/components/ui/modal.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps, margins } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationData } from "../types/invitation.type";

export interface InvitationDashboardCardProps {
  invitation: InvitationData & { _count?: { rsvps?: number } };
  onDelete: (id: string) => Promise<void>;
  onPublish?: (id: string) => Promise<unknown>;
}

export function InvitationDashboardCard({
  invitation,
  onDelete,
  onPublish,
}: InvitationDashboardCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const publicUrl = typeof window !== "undefined" ? `${window.location.origin}/i/${invitation.slug}` : `/i/${invitation.slug}`;
  const isPublished = invitation.status === "PUBLISHED" || invitation.isPublished;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopySuccess(true);
    } catch {
      // Fallback
    }
  };

  const handleConfirmDelete = async () => {
    try {
      setIsDeleting(true);
      await onDelete(invitation.id);
      setShowDeleteModal(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const handlePublishClick = async () => {
    if (!onPublish || isPublished) return;
    try {
      setIsPublishing(true);
      await onPublish(invitation.id);
    } finally {
      setIsPublishing(false);
    }
  };

  const eventDateFormatted = new Date(invitation.eventDate).toLocaleDateString("vi-VN", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const rsvpCount = invitation._count?.rsvps ?? 0;

  return (
    <>
      <Card
        hoverEffect
        sx={{
          ...stackColumnStyle,
          borderRadius: `${borderRadius.lg}px`,
          backgroundColor: colors.background.paper,
          border: `1px solid ${colors.border.goldLight}`,
          boxShadow: shadows.card,
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Cover thumbnail */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "48%",
            backgroundColor: colors.background.subtle,
          }}
        >
          <Image
            src={invitation.coverImage || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"}
            alt={invitation.title}
            fill
            style={{ objectFit: "cover" }}
          />

          <StackRowBetween
            sx={{
              position: "absolute",
              top: `${paddings.sm}px`,
              left: `${paddings.sm}px`,
              right: `${paddings.sm}px`,
            }}
          >
            {isPublished ? (
              <Badge variant="success" size="small" dot>
                Đã xuất bản
              </Badge>
            ) : (
              <Badge variant="neutral" size="small">
                Bản nháp (Draft)
              </Badge>
            )}

            <StackRow
              gap="4px"
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#ffffff",
                fontSize: fontSizes.xs,
                px: `${paddings.xs}px`,
                py: "2px",
                borderRadius: `${borderRadius.xs}px`,
              }}
            >
              <PeopleAltOutlinedIcon sx={{ fontSize: "0.9rem" }} />
              <span>{rsvpCount} RSVP</span>
            </StackRow>
          </StackRowBetween>
        </Box>

        {/* Content body */}
        <StackCol
          gap={`${gaps.sm}px`}
          sx={{
            padding: `${paddings.md}px`,
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <StackCol gap={`${gaps.xs}px`}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: fontWeights.bold,
                fontSize: fontSizes.base,
                color: colors.text.primary,
              }}
            >
              {invitation.title}
            </Typography>

            <StackRow gap={`${gaps.xs}px`} sx={{ color: colors.text.secondary, fontSize: fontSizes.xs }}>
              <CalendarTodayOutlinedIcon sx={{ fontSize: "0.9rem", color: colors.gold.main }} />
              <span>
                {eventDateFormatted} ({invitation.eventTime})
              </span>
            </StackRow>

            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: fontSizes.xs,
                fontFamily: "monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                backgroundColor: "rgba(183, 134, 40, 0.05)",
                p: "4px 8px",
                borderRadius: `${borderRadius.xs}px`,
                mt: `${margins.xs}px`,
              }}
            >
              /i/{invitation.slug}
            </Typography>
          </StackCol>

          {/* Action Toolbar */}
          <StackRowBetween
            sx={{
              paddingTop: `${paddings.sm}px`,
              borderTop: `1px solid ${colors.divider}`,
              mt: `${margins.xs}px`,
            }}
          >
            <StackRow gap={`${gaps.xs}px`}>
              <Tooltip title="Sao chép link công khai">
                <IconButton size="small" onClick={handleCopyLink} sx={{ color: colors.text.secondary }}>
                  <ContentCopyIcon sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Xem trang thiệp thực tế">
                <IconButton
                  component={Link}
                  href={`/i/${invitation.slug}`}
                  target="_blank"
                  size="small"
                  sx={{ color: colors.text.secondary }}
                >
                  <OpenInNewIcon sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Xóa thiệp">
                <IconButton
                  size="small"
                  onClick={() => setShowDeleteModal(true)}
                  sx={{ color: colors.status.error.main }}
                >
                  <DeleteIcon sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Tooltip>
            </StackRow>

            <StackRow gap={`${gaps.xs}px`}>
              {!isPublished && onPublish && (
                <Button
                  size="small"
                  variant="outlined"
                  loading={isPublishing}
                  onClick={handlePublishClick}
                  sx={{
                    fontSize: fontSizes.xs,
                    borderColor: colors.border.gold,
                    color: colors.gold.dark,
                  }}
                >
                  Xuất bản
                </Button>
              )}

              <Button
                component={Link}
                href={`/dashboard/invitations/${invitation.id}/edit`}
                size="small"
                variant="contained"
                startIcon={<EditIcon sx={{ fontSize: "0.9rem" }} />}
                sx={{
                  fontSize: fontSizes.xs,
                  background: colors.gold.gradient,
                  color: colors.text.inverse,
                }}
              >
                Chỉnh sửa
              </Button>
            </StackRow>
          </StackRowBetween>
        </StackCol>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Xác nhận xóa thiệp mời"
        maxWidth="xs"
      >
        <StackCol gap={`${gaps.md}px`}>
          <Typography variant="body2" sx={{ color: colors.text.secondary }}>
            Bạn có chắc chắn muốn xóa thiệp <strong>&ldquo;{invitation.title}&rdquo;</strong>? Thao tác này không thể khôi phục và mọi phản hồi RSVP liên quan sẽ bị xóa hoàn toàn.
          </Typography>

          <StackRowBetween gap={`${gaps.sm}px`}>
            <Button
              variant="outlined"
              onClick={() => setShowDeleteModal(false)}
              disabled={isDeleting}
              sx={{ flex: 1 }}
            >
              Hủy
            </Button>
            <Button
              variant="contained"
              color="error"
              loading={isDeleting}
              onClick={handleConfirmDelete}
              sx={{
                flex: 1,
                backgroundColor: colors.status.error.main,
                color: "#ffffff",
              }}
            >
              Xóa vĩnh viễn
            </Button>
          </StackRowBetween>
        </StackCol>
      </Modal>

      {/* Copy notification */}
      <Snackbar
        open={copySuccess}
        autoHideDuration={2500}
        onClose={() => setCopySuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ borderRadius: `${borderRadius.sm}px` }}>
          Đã sao chép liên kết thiệp mời vào bộ nhớ tạm!
        </Alert>
      </Snackbar>
    </>
  );
}
