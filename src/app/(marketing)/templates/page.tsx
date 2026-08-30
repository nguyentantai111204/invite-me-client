import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StackCol, StackCenter } from "@/components/ui/stack.component";
import { Badge } from "@/components/ui/badge.component";
import { TemplateList } from "@/features/invitation/components";
import { colors } from "@/theme/colors";
import { paddings, margins, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";

export const metadata: Metadata = {
  title: "Mẫu thiệp mời điện tử sang trọng | InviteMe",
  description:
    "Bộ sưu tập các mẫu thiệp cưới, sinh nhật và sự kiện trực tuyến được thiết kế tinh xảo, hiện đại và chuẩn SEO.",
};

export default function TemplatesPage() {
  return (
    <Box
      sx={{
        backgroundColor: colors.background.default,
        minHeight: "100vh",
        paddingTop: `${paddings["2xl"]}px`,
        paddingBottom: `${paddings["3xl"]}px`,
      }}
    >
      <Container maxWidth="lg">
        <StackCol gap={`${gaps["2xl"]}px`}>
          {/* Header Section */}
          <StackCenter gap={`${gaps.sm}px`} sx={{ textAlign: "center" }}>
            <Badge variant="gold" size="medium" dot>
              Bộ sưu tập độc quyền
            </Badge>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: fontWeights.extrabold,
                fontSize: { xs: fontSizes["3xl"], md: fontSizes["5xl"] },
                color: colors.text.primary,
                letterSpacing: "-0.02em",
                mt: `${margins.xs}px`,
              }}
            >
              Mẫu Thiệp Mời Sang Trọng
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                fontSize: { xs: fontSizes.sm, md: fontSizes.base },
                maxWidth: "640px",
                mx: "auto",
              }}
            >
              Lựa chọn những phong cách thiết kế tinh tế nhất dành cho ngày trọng đại của bạn. Dễ dàng tùy biến thông tin, màu sắc và âm nhạc.
            </Typography>
          </StackCenter>

          {/* Dynamic Template List with Categories & SWR */}
          <TemplateList />
        </StackCol>
      </Container>
    </Box>
  );
}
