import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { fontPlayfair } from "@/config/fonts.config";
import {
  Button,
  Badge,
  StackCenter,
  StackColAlignJustCenter,
  StackRowAlignJustCenter,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings, lineHeights } from "@/theme/typography";

export const metadata: Metadata = {
  title: "404 - Không tìm thấy trang | InviteMe",
  description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển dời.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <StackCenter
      component="main"
      className={fontPlayfair.variable}
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.background.default,
        backgroundImage: colors.background.radialGold404,
        py: { xs: `${paddings["2xl"]}px`, md: `${paddings["4xl"]}px` },
        px: `${paddings.sm}px`,
      }}
    >
      <Container maxWidth="sm">
        <StackColAlignJustCenter spacing={3} sx={{ textAlign: "center" }}>
          {/* Huy hiệu trạng thái */}
          <Badge color="gold" size="medium">
            404 • KHÔNG TÌM THẤY TRANG
          </Badge>

          {/* Vòng hoa minh họa 404 Hoàng gia (Sử dụng mixBlendMode: multiply) */}
          <StackCenter
            sx={{
              position: "relative",
              width: { xs: 260, sm: 320 },
              height: { xs: 260, sm: 320 },
              mx: "auto",
            }}
          >
            <Image
              src="/images/notfound.png"
              alt="404 Not Found"
              width={320}
              height={320}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </StackCenter>

          {/* Tiêu đề Serif sang trọng */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: fontWeights.extrabold,
              fontSize: { xs: fontSizes["2xl"], sm: fontSizes["4xl"] },
              color: colors.text.primary,
              letterSpacing: letterSpacings.tight,
              mt: -1,
            }}
          >
            Không Tìm Thấy Trang
          </Typography>

          {/* Mô tả thông báo */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: fontSizes.base, sm: fontSizes.lg },
              lineHeight: lineHeights.relaxed,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            Đường dẫn bạn truy cập có thể đã hết hạn, bị đổi tên hoặc không tồn tại.
            Hãy quay về trang chủ hoặc khám phá các mẫu thiệp cưới tuyệt đẹp khác.
          </Typography>

          {/* Nút hành động */}
          <StackRowAlignJustCenter
            spacing={2}
            sx={{
              pt: 2,
              width: { xs: "100%", sm: "auto" },
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="gradient"
                size="large"
                leftIcon={<HomeIcon />}
                sx={{
                  px: `${paddings.xl}px`,
                  py: `${paddings.md}px`,
                  fontSize: fontSizes.base,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Về trang chủ
              </Button>
            </Link>

            <Link href="/templates" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="large"
                leftIcon={<AutoAwesomeIcon />}
                sx={{
                  px: `${paddings.xl}px`,
                  py: `${paddings.md}px`,
                  fontSize: fontSizes.base,
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Khám phá mẫu thiệp
              </Button>
            </Link>
          </StackRowAlignJustCenter>
        </StackColAlignJustCenter>
      </Container>
    </StackCenter>
  );
}
