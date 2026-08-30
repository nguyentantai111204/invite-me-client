"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { StackCol, StackCenter } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { TemplateCard } from "./template-card.component";
import { useTemplates } from "../hooks/use-templates.hook";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { colors } from "@/theme/colors";

// Component hiển thị các mẫu thiệp nổi bật từ API trên Trang chủ
export function FeaturedTemplates() {
  const { templates, isLoading, isError, mutate } = useTemplates();

  // Hiển thị tối đa 3 mẫu thiệp nổi bật nhất trên trang chủ
  const featuredList = templates.slice(0, 3);

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
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
    );
  }

  if (isError || featuredList.length === 0) {
    return (
      <StackCenter gap={`${gaps.md}px`} sx={{ py: 4, textAlign: "center" }}>
        <Button variant="outlined" onClick={() => mutate()}>
          Tải lại mẫu thiệp
        </Button>
      </StackCenter>
    );
  }

  return (
    <Grid container spacing={3}>
      {featuredList.map((template) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={template.id}>
          <TemplateCard template={template} />
        </Grid>
      ))}
    </Grid>
  );
}
