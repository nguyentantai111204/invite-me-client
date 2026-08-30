"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { StackCol, StackRow, StackRowBetween } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { EmptyState } from "@/components/ui/empty-state.component";
import {
  InvitationDashboardCard,
  InvitationStatsBar,
} from "@/features/invitation/components";
import { useMyInvitations } from "@/features/invitation/hooks";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";

export default function DashboardPage() {
  const { invitations, isLoading, isError, mutate, deleteInvitation, publishInvitation } =
    useMyInvitations();
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return invitations;
    const q = searchQuery.toLowerCase().trim();
    return invitations.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        (item.location?.venueName && item.location.venueName.toLowerCase().includes(q))
    );
  }, [invitations, searchQuery]);

  return (
    <StackCol gap={`${gaps.xl}px`}>
      {/* Title & Quick Action Bar */}
      <StackRowBetween
        sx={{
          flexWrap: "wrap",
          gap: `${gaps.md}px`,
        }}
      >
        <StackCol gap="4px">
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: fontWeights.bold,
              fontSize: { xs: fontSizes["2xl"], md: fontSizes["3xl"] },
              color: colors.text.primary,
            }}
          >
            Quản Lý Thiệp Cưới & Sự Kiện
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary }}>
            Tạo, xuất bản và theo dõi danh sách khách mời phản hồi trực tuyến
          </Typography>
        </StackCol>

        <Button
          component={Link}
          href="/dashboard/invitations/create"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: colors.gold.gradient,
            color: colors.text.inverse,
            fontWeight: fontWeights.bold,
            px: `${paddings.lg}px`,
          }}
        >
          Tạo thiệp mới
        </Button>
      </StackRowBetween>

      {/* Stats Summary Bar */}
      {!isLoading && invitations.length > 0 && (
        <InvitationStatsBar invitations={invitations} />
      )}

      {/* Search & Filter Toolbar */}
      {invitations.length > 0 && (
        <Card
          glassmorphism
          sx={{
            padding: `${paddings.sm}px ${paddings.md}px`,
            borderRadius: `${borderRadius.lg}px`,
            border: `1px solid ${colors.border.goldLight}`,
          }}
        >
          <TextField
            size="small"
            placeholder="Tìm kiếm theo tiêu đề thiệp, link slug hoặc địa điểm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: colors.gold.main, fontSize: "1.2rem" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: `${borderRadius.md}px`,
                backgroundColor: colors.background.paper,
                fontSize: fontSizes.sm,
              },
            }}
          />
        </Card>
      )}

      {/* Loading Skeletons */}
      {isLoading && (
        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Card sx={{ borderRadius: `${borderRadius.lg}px`, overflow: "hidden" }}>
                <Skeleton variant="rectangular" height={160} />
                <Box sx={{ p: 2 }}>
                  <Skeleton variant="text" width="80%" height={28} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Skeleton variant="rectangular" height={36} sx={{ mt: 2 }} />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Error state */}
      {!isLoading && isError && (
        <EmptyState
          title="Không thể tải danh sách thiệp"
          description="Đã xảy ra lỗi khi kết nối với máy chủ. Vui lòng kiểm tra lại kết nối mạng."
          action={
            <Button variant="outlined" onClick={() => mutate()}>
              Tải lại dữ liệu
            </Button>
          }
        />
      )}

      {/* Empty state khi chưa có thiệp nào */}
      {!isLoading && !isError && invitations.length === 0 && (
        <EmptyState
          title="Bạn chưa tạo thiệp mời nào"
          description="Hãy chọn một mẫu thiệp yêu thích từ bộ sưu tập hoặc tạo ngay một thiệp mời cho ngày đặc biệt của bạn."
          action={
            <Button
              component={Link}
              href="/templates"
              variant="contained"
              sx={{
                background: colors.gold.gradient,
                color: colors.text.inverse,
              }}
            >
              Khám phá mẫu thiệp ngay
            </Button>
          }
        />
      )}

      {/* Grid danh sách thiệp */}
      {!isLoading && !isError && filtered.length > 0 && (
        <Grid container spacing={3}>
          {filtered.map((invitation) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={invitation.id}>
              <InvitationDashboardCard
                invitation={invitation}
                onDelete={deleteInvitation}
                onPublish={publishInvitation}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </StackCol>
  );
}
