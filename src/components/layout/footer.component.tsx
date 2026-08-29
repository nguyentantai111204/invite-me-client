import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111827",
        color: "rgba(255, 255, 255, 0.7)",
        pt: 10,
        pb: 6,
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Col */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2.5}>
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <AutoAwesomeIcon fontSize="small" />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: -0.5,
                    color: "#FFFFFF",
                  }}
                >
                  {siteConfig.name}
                </Typography>
              </Link>

              <Typography variant="body2" sx={{ lineHeight: 1.8, maxWidth: 320 }}>
                Nền tảng thiết kế thiệp mời online cao cấp và thông minh. Giúp bạn gửi trọn
                yêu thương và chuẩn bị sự kiện hoàn hảo chỉ trong vài phút.
              </Typography>

              <Typography variant="caption" sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
                Email: {siteConfig.links.supportEmail}
              </Typography>
            </Stack>
          </Grid>

          {/* Product Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 2.5 }}>
              Sản phẩm
            </Typography>
            <Stack spacing={1.5}>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Mẫu thiệp cưới
                </Typography>
              </Link>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Thiệp sinh nhật
                </Typography>
              </Link>
              <Link href="/templates" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Thiệp sự kiện & Party
                </Typography>
              </Link>
              <Link href="/i/minh-linh" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Xem demo thực tế
                </Typography>
              </Link>
            </Stack>
          </Grid>

          {/* Features Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 2.5 }}>
              Tính năng
            </Typography>
            <Stack spacing={1.5}>
              <Typography variant="body2">Quản lý RSVP thời gian thực</Typography>
              <Typography variant="body2">Nhạc nền & Album ảnh</Typography>
              <Typography variant="body2">Tích hợp mã QR & Bản đồ</Typography>
              <Typography variant="body2">Typography phong cách riêng</Typography>
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography variant="subtitle1" sx={{ color: "#FFFFFF", fontWeight: 700, mb: 2.5 }}>
              Khám phá
            </Typography>
            <Stack spacing={1.5}>
              <Link href="/pricing" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Bảng giá dịch vụ
                </Typography>
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Về chúng tôi
                </Typography>
              </Link>
              <Link href="/terms" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Điều khoản sử dụng
                </Typography>
              </Link>
              <Link href="/privacy" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#8B5CF6" } }}>
                  Chính sách bảo mật
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
            © {currentYear} {siteConfig.name}. Bản quyền thuộc về InviteMe.
          </Typography>

          <Typography variant="caption" sx={{ color: "rgba(255, 255, 255, 0.4)" }}>
            Thiết kế dành cho những khoảnh khắc đáng nhớ nhất.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
