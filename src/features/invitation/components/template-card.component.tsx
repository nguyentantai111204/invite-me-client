"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StackCol, StackRow, StackRowBetween, StackCenter, stackColumnStyle } from "@/components/ui/stack.component";
import { Badge } from "@/components/ui/badge.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationTemplate } from "@/services/api";

export interface TemplateCardProps {
  template: InvitationTemplate;
  onSelect?: (template: InvitationTemplate) => void;
}

// Card hiển thị mẫu thiệp phong cách sang trọng, tương tác mượt mà
export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const previewHref = template.previewSlug ? `/i/${template.previewSlug}` : `/i/${template.slug}`;
  const createHref = `/dashboard/invitations/create?templateId=${template.id}`;

  return (
    <Card
      hoverEffect
      sx={{
        ...stackColumnStyle,
        overflow: "hidden",
        height: "100%",
        backgroundColor: colors.background.paper,
        border: `1px solid ${colors.border.goldLight}`,
        boxShadow: shadows.card,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: shadows.cardHover,
          borderColor: colors.border.gold,
        },
      }}
    >
      {/* Thumbnail container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "65%", // Tỉ lệ khung ảnh 16:10
          overflow: "hidden",
          backgroundColor: colors.background.subtle,
        }}
      >
        <Image
          src={template.thumbnailUrl || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"}
          alt={template.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Badges overlay */}
        <StackRowBetween
          sx={{
            position: "absolute",
            top: `${paddings.sm}px`,
            left: `${paddings.sm}px`,
            right: `${paddings.sm}px`,
            pointerEvents: "none",
          }}
        >
          {template.isPremium ? (
            <Badge variant="gold" size="small">
              Premium
            </Badge>
          ) : (
            <Badge variant="neutral" size="small">
              Miễn phí
            </Badge>
          )}

          {template.isPopular && (
            <Badge variant="secondary" size="small">
              Phổ biến
            </Badge>
          )}
        </StackRowBetween>
      </Box>

      {/* Thông tin mẫu thiệp */}
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
            component="h3"
            sx={{
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.lg,
              color: colors.text.primary,
              lineHeight: 1.3,
            }}
          >
            {template.title}
          </Typography>

          {template.description && (
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: fontSizes.sm,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {template.description}
            </Typography>
          )}
        </StackCol>

        {/* Tags */}
        {template.tags && template.tags.length > 0 && (
          <StackRow
            gap={`${gaps.xs}px`}
            sx={{
              flexWrap: "wrap",
              marginTop: `${paddings.xs}px`,
            }}
          >
            {template.tags.slice(0, 3).map((tag, idx) => (
              <Box
                key={idx}
                component="span"
                sx={{
                  fontSize: fontSizes.xs,
                  padding: `2px ${paddings.xs}px`,
                  borderRadius: `${borderRadius.xs}px`,
                  backgroundColor: "rgba(183, 134, 40, 0.06)",
                  color: colors.gold.dark,
                  border: `1px solid ${colors.border.goldLight}`,
                }}
              >
                #{tag}
              </Box>
            ))}
          </StackRow>
        )}

        {/* Hành động */}
        <StackRowBetween
          gap={`${gaps.sm}px`}
          sx={{
            marginTop: `${paddings.md}px`,
            paddingTop: `${paddings.sm}px`,
            borderTop: `1px solid ${colors.divider}`,
          }}
        >
          <Button
            component={Link}
            href={previewHref}
            target="_blank"
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              borderColor: colors.border.gold,
              color: colors.gold.dark,
              "&:hover": {
                borderColor: colors.gold.main,
                backgroundColor: "rgba(183, 134, 40, 0.04)",
              },
            }}
          >
            Xem trước
          </Button>

          {onSelect ? (
            <Button
              variant="contained"
              size="small"
              onClick={() => onSelect(template)}
              sx={{
                flex: 1,
                background: colors.gold.gradient,
                color: colors.text.inverse,
              }}
            >
              Chọn mẫu
            </Button>
          ) : (
            <Button
              component={Link}
              href={createHref}
              variant="contained"
              size="small"
              sx={{
                flex: 1,
                background: colors.gold.gradient,
                color: colors.text.inverse,
              }}
            >
              Dùng mẫu này
            </Button>
          )}
        </StackRowBetween>
      </StackCol>
    </Card>
  );
}
