"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";

import { StackRow, StackCol, StackCenter } from "@/components/ui/stack.component";
import { Card } from "@/components/ui/card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationData } from "../types/invitation.type";

export interface InvitationStatsBarProps {
  invitations: Array<InvitationData & { _count?: { rsvps?: number } }>;
}

export function InvitationStatsBar({ invitations }: InvitationStatsBarProps) {
  const totalCount = invitations.length;
  const publishedCount = invitations.filter(
    (item) => item.status === "PUBLISHED" || item.isPublished
  ).length;
  const totalRsvp = invitations.reduce((acc, curr) => acc + (curr._count?.rsvps || 0), 0);

  const stats = [
    {
      label: "Tổng số thiệp",
      value: totalCount,
      icon: <EmailIcon sx={{ color: colors.gold.main, fontSize: "1.8rem" }} />,
      bg: "rgba(183, 134, 40, 0.08)",
    },
    {
      label: "Đã xuất bản (Public)",
      value: publishedCount,
      icon: <PublicIcon sx={{ color: colors.status.success.main, fontSize: "1.8rem" }} />,
      bg: `${colors.status.success.main}12`,
    },
    {
      label: "Tổng phản hồi RSVP",
      value: totalRsvp,
      icon: <PeopleIcon sx={{ color: colors.rose.main, fontSize: "1.8rem" }} />,
      bg: "rgba(229, 139, 123, 0.08)",
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, idx) => (
        <Grid size={{ xs: 12, sm: 4 }} key={idx}>
          <Card
            glassmorphism
            sx={{
              padding: `${paddings.md}px`,
              borderRadius: `${borderRadius.lg}px`,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: `1px solid ${colors.border.goldLight}`,
              boxShadow: shadows.card,
            }}
          >
            <StackRow gap={`${gaps.md}px`} sx={{ alignItems: "center" }}>
              <StackCenter
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: `${borderRadius.md}px`,
                  backgroundColor: stat.bg,
                  flexShrink: 0,
                }}
              >
                {stat.icon}
              </StackCenter>

              <StackCol gap="2px">
                <Typography
                  variant="body2"
                  sx={{ color: colors.text.secondary, fontSize: fontSizes.xs }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes["2xl"],
                    color: colors.text.primary,
                  }}
                >
                  {stat.value}
                </Typography>
              </StackCol>
            </StackRow>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
