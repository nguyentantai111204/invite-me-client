import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {
  StackCenter,
  StackCol,
  StackRowAlignJustCenter,
  StackRowAlignJustBetween,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, lineHeights } from "@/theme/typography";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.background.darkLuxury,
        color: colors.text.mutedWhite,
        pt: `${paddings["5xl"]}px`,
        pb: `${paddings["2xl"]}px`,
        borderTop: `1px solid ${colors.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Col */}
          <Grid size={{ xs: 12, md: 4 }}>
            <StackCol spacing={2.5}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "inline-flex" }}>
                <StackRowAlignJustCenter spacing={1.5} sx={{ justifyContent: "flex-start" }}>
                  {/* Logo với nền blend multiply */}
                  <StackCenter
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: `${borderRadius.sm}px`,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt={siteConfig.name}
                      width={36}
                      height={36}
                      style={{ objectFit: "contain" }}
                    />
                  </StackCenter>
                  <StackCol spacing={0}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-playfair), serif",
                        fontWeight: fontWeights.black,
                        fontSize: fontSizes.xl,
                        color: colors.text.inverse,
                        lineHeight: 1.1,
                      }}
                    >
                      {siteConfig.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.6rem",
                        fontWeight: fontWeights.medium,
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Thiệp cưới online
                    </Typography>
                  </StackCol>
                </StackRowAlignJustCenter>
              </Link>

              <Typography variant="body2" sx={{ lineHeight: lineHeights.loose, maxWidth: 300, color: colors.text.mutedWhite }}>
                Nền tảng thiết kế thiệp mời online sang trọng và thông minh nhất Việt Nam.
                Gửi trọn yêu thương — chỉ trong vài phút.
              </Typography>

              <Typography variant="caption" sx={{ color: colors.text.faintWhite }}>
                Email: {siteConfig.links.supportEmail}
              </Typography>
            </StackCol>
          </Grid>

          {/* Product Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ color: colors.text.inverse, fontWeight: fontWeights.bold, mb: 2.5 }}>
              Sản phẩm
            </Typography>
            <StackCol spacing={1.5}>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Mẫu thiệp cưới
                </Typography>
              </Link>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Thiệp sinh nhật
                </Typography>
              </Link>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Thiệp sự kiện & Party
                </Typography>
              </Link>
              <Link href="/i/minh-linh" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Xem demo thực tế
                </Typography>
              </Link>
            </StackCol>
          </Grid>

          {/* Features Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ color: colors.text.inverse, fontWeight: fontWeights.bold, mb: 2.5 }}>
              Tính năng
            </Typography>
            <StackCol spacing={1.5}>
              <Typography variant="body2">Quản lý RSVP thời gian thực</Typography>
              <Typography variant="body2">Nhạc nền & Album ảnh</Typography>
              <Typography variant="body2">Tích hợp mã QR & Bản đồ</Typography>
              <Typography variant="body2">Typography phong cách riêng</Typography>
            </StackCol>
          </Grid>

          {/* Company Links */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: colors.text.inverse, fontWeight: fontWeights.bold, mb: 2.5 }}>
              Khám phá
            </Typography>
            <StackCol spacing={1.5}>
              <Link href="/pricing" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Bảng giá dịch vụ
                </Typography>
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Về chúng tôi
                </Typography>
              </Link>
              <Link href="/terms" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Điều khoản sử dụng
                </Typography>
              </Link>
              <Link href="/privacy" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": { color: colors.gold.light },
                    transition: "color 0.2s ease",
                  }}
                >
                  Chính sách bảo mật
                </Typography>
              </Link>
            </StackCol>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <StackRowAlignJustBetween
          direction={{ xs: "column", sm: "row" }}
          sx={{
            mt: 8,
            pt: 4,
            borderTop: `1px solid ${colors.border.whiteSubtle}`,
            gap: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: fontSizes.sm, color: colors.text.mutedWhite }}>
            © {currentYear} {siteConfig.name}. Bản quyền thuộc về {siteConfig.name}.
          </Typography>

          <Typography variant="caption" sx={{ color: colors.text.faintWhite, fontStyle: "italic" }}>
            Thiết kế dành cho những khoảnh khắc đáng nhớ nhất.
          </Typography>
        </StackRowAlignJustBetween>
      </Container>
    </Box>
  );
}
