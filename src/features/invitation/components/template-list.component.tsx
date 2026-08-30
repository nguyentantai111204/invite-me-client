"use client";

import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { StackCol, StackRow, StackRowBetween } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { EmptyState } from "@/components/ui/empty-state.component";
import { useTemplates } from "../hooks/use-templates.hook";
import { TemplateCard } from "./template-card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationTemplate } from "@/services/api";

const CATEGORIES = [
  { label: "Tất cả", value: "" },
  { label: "Đám cưới", value: "wedding" },
  { label: "Sinh nhật", value: "birthday" },
  { label: "Kỷ niệm", value: "anniversary" },
  { label: "Sự kiện", value: "event" },
];

export interface TemplateListProps {
  onSelectTemplate?: (template: InvitationTemplate) => void;
}

// Danh sách mẫu thiệp có hỗ trợ lọc, tìm kiếm và SWR realtime
export function TemplateList({ onSelectTemplate }: TemplateListProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { templates, isLoading, isError, mutate } = useTemplates(selectedCategory || undefined);

  // Lọc tìm kiếm theo từ khóa
  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) return templates;
    const query = searchQuery.toLowerCase().trim();
    return templates.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(query)))
    );
  }, [templates, searchQuery]);

  return (
    <StackCol gap={`${gaps.xl}px`} sx={{ width: "100%" }}>
      {/* Bộ lọc Categories & Ô tìm kiếm */}
      <Card
        glassmorphism
        sx={{
          padding: `${paddings.md}px`,
          borderRadius: `${borderRadius.lg}px`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${colors.border.goldLight}`,
        }}
      >
        <StackRowBetween
          gap={`${gaps.md}px`}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* Tabs Category */}
          <StackRow
            gap={`${gaps.xs}px`}
            sx={{
              overflowX: "auto",
              paddingBottom: { xs: `${paddings.xs}px`, md: 0 },
              width: { xs: "100%", md: "auto" },
            }}
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <Button
                  key={cat.value}
                  variant={active ? "contained" : "text"}
                  size="small"
                  onClick={() => setSelectedCategory(cat.value)}
                  sx={{
                    borderRadius: `${borderRadius.full}px`,
                    px: `${paddings.md}px`,
                    whiteSpace: "nowrap",
                    ...(active
                      ? {
                          background: colors.gold.gradient,
                          color: colors.text.inverse,
                          fontWeight: fontWeights.bold,
                          boxShadow: shadows.goldSm,
                        }
                      : {
                          color: colors.text.secondary,
                          "&:hover": {
                            backgroundColor: "rgba(183, 134, 40, 0.08)",
                            color: colors.gold.dark,
                          },
                        }),
                  }}
                >
                  {cat.label}
                </Button>
              );
            })}
          </StackRow>

          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Tìm kiếm mẫu thiệp, phong cách..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
              width: { xs: "100%", md: "280px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: `${borderRadius.full}px`,
                backgroundColor: colors.background.paper,
                fontSize: fontSizes.sm,
                "& fieldset": {
                  borderColor: colors.border.goldLight,
                },
                "&:hover fieldset": {
                  borderColor: colors.gold.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: colors.gold.dark,
                },
              },
            }}
          />
        </StackRowBetween>
      </Card>

      {/* Loading Skeletons */}
      {isLoading && (
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Card
                sx={{
                  borderRadius: `${borderRadius.md}px`,
                  overflow: "hidden",
                  border: `1px solid ${colors.border.goldLight}`,
                }}
              >
                <Skeleton variant="rectangular" height={220} animation="wave" />
                <Box sx={{ padding: `${paddings.md}px` }}>
                  <Skeleton variant="text" width="70%" height={32} />
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton variant="text" width="60%" height={20} />
                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    <Skeleton variant="rectangular" width="50%" height={36} sx={{ borderRadius: `${borderRadius.sm}px` }} />
                    <Skeleton variant="rectangular" width="50%" height={36} sx={{ borderRadius: `${borderRadius.sm}px` }} />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Error State */}
      {!isLoading && isError && (
        <EmptyState
          title="Không thể tải mẫu thiệp"
          description="Đã xảy ra sự cố khi kết nối đến máy chủ. Vui lòng thử lại."
          action={
            <Button variant="outlined" onClick={() => mutate()}>
              Tải lại trang
            </Button>
          }
        />
      )}

      {/* Empty State */}
      {!isLoading && !isError && filteredTemplates.length === 0 && (
        <EmptyState
          title="Không tìm thấy mẫu thiệp phù hợp"
          description={
            searchQuery
              ? `Không có mẫu thiệp nào khớp với từ khóa "${searchQuery}".`
              : "Hiện tại chưa có mẫu thiệp nào trong danh mục này."
          }
          action={
            searchQuery ? (
              <Button variant="outlined" onClick={() => setSearchQuery("")}>
                Xóa bộ lọc tìm kiếm
              </Button>
            ) : undefined
          }
        />
      )}

      {/* Grid Templates */}
      {!isLoading && !isError && filteredTemplates.length > 0 && (
        <Grid container spacing={3}>
          {filteredTemplates.map((template) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={template.id}>
              <TemplateCard template={template} onSelect={onSelectTemplate} />
            </Grid>
          ))}
        </Grid>
      )}
    </StackCol>
  );
}
