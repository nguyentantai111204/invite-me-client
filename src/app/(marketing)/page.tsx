import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SpeedIcon from "@mui/icons-material/Speed";
import PaletteIcon from "@mui/icons-material/Palette";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";
import {
  Button,
  Card,
  Badge,
  StackRow,
  StackRowAlignJustCenter,
  StackRowAlignJustBetween,
  StackCol,
  StackColAlignJustCenter,
  StackColAlignJustBetween,
  stackColumnStyle,
} from "@/components/ui";
import { FeaturedTemplates } from "@/features/invitation/components";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings, lineHeights } from "@/theme/typography";

const FEATURES = [
  {
    icon: <PaletteIcon sx={{ fontSize: 28 }} />,
    color: colors.gold.main,
    bg: `${colors.gold.main}18`,
    title: "Typography Hoàng Gia",
    description: "Bộ sưu tập font chữ tinh tế từ Playfair Display, Great Vibes đến Cinzel — mỗi chữ là một dấu ấn.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 28 }} />,
    color: colors.rose.main,
    bg: `${colors.rose.main}18`,
    title: "RSVP Thời Gian Thực",
    description: "Khách mời phản hồi chỉ 1 chạm. Dashboard quản trị cập nhật ngay lập tức — không bỏ lỡ ai.",
  },
  {
    icon: <MusicNoteIcon sx={{ fontSize: 28 }} />,
    color: colors.gold.dark,
    bg: `${colors.gold.dark}18`,
    title: "Nhạc Nền & Album Ảnh",
    description: "Tích hợp bài nhạc lãng mạn và trình chiếu ảnh kỷ niệm mượt mà ngay trong tấm thiệp.",
  },
  {
    icon: <QrCode2Icon sx={{ fontSize: 28 }} />,
    color: colors.rose.dark,
    bg: `${colors.rose.dark}18`,
    title: "QR & Google Maps",
    description: "Mã QR riêng từng bàn tiệc, tích hợp bản đồ chỉ đường chính xác cho mọi khách mời.",
  },
];

const TEMPLATES_PREVIEW = [
  {
    id: "royal-luxury",
    title: "Hoàng Gia Sang Trọng",
    category: "Thiệp Cưới",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    badge: "Phổ biến nhất",
    badgeColor: "gold" as const,
    previewSlug: "minh-linh",
    rating: 4.9,
    usedCount: "12.4K",
    description: "Phong cách cổ điển Châu Âu với font Playfair Display và bảng màu vàng hoàng kim sang trọng.",
    tags: ["Playfair", "Vàng Gold", "Cổ Điển"],
  },
  {
    id: "minimalist-rose",
    title: "Hồng Pastel Tối Giản",
    category: "Thiệp Cưới",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    badge: "Mới nhất",
    badgeColor: "secondary" as const,
    previewSlug: "minh-linh",
    rating: 4.8,
    usedCount: "8.1K",
    description: "Thiết kế tối giản thanh lịch với tông hồng pastel nhẹ nhàng, phù hợp phong cách hiện đại.",
    tags: ["Tối Giản", "Pastel", "Hiện Đại"],
  },
  {
    id: "classic-gold",
    title: "Vàng Kim Cổ Điển",
    category: "Lễ Thành Hôn",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop",
    badge: "Thịnh hành",
    badgeColor: "primary" as const,
    previewSlug: "minh-linh",
    rating: 4.7,
    usedCount: "6.8K",
    description: "Kết hợp vàng kim óng ánh và nền kem ấm áp — sang trọng mà vẫn gần gũi, ấm cúng.",
    tags: ["Vàng Kim", "Serif", "Sang Trọng"],
  },
];

const STEPS = [
  {
    number: "01",
    icon: <PaletteIcon sx={{ fontSize: 24 }} />,
    title: "Chọn mẫu thiệp ưng ý",
    description: "Khám phá hơn 50 mẫu thiệp cưới, sinh nhật và sự kiện. Lọc theo phong cách, màu sắc yêu thích.",
  },
  {
    number: "02",
    icon: <BoltIcon sx={{ fontSize: 24 }} />,
    title: "Tùy biến trong vài phút",
    description: "Nhập tên, ngày giờ, địa điểm, nhạc nền và ảnh kỷ niệm. Xem trước thiệp ngay trên màn hình.",
  },
  {
    number: "03",
    icon: <VerifiedIcon sx={{ fontSize: 24 }} />,
    title: "Gửi & theo dõi RSVP",
    description: "Chia sẻ 1 link qua Zalo, Messenger, SMS. Khách xác nhận tham dự tức thì, bạn thấy ngay.",
  },
];

const STATS = [
  { value: "50K+", label: "Thiệp đã tạo" },
  { value: "98%", label: "Hài lòng" },
  { value: "50+", label: "Mẫu thiết kế" },
  { value: "< 5 phút", label: "Thời gian tạo" },
];

export default function MarketingHomePage() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          pt: { xs: `${paddings["2xl"]}px`, md: `${paddings["4xl"] + 16}px` },
          pb: { xs: `${paddings["3xl"]}px`, md: `${paddings["5xl"]}px` },
          background: colors.background.radialGoldHero,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {/* Cột nội dung chính */}
            <Grid size={{ xs: 12, md: 7 }}>
              <StackCol spacing={3}>
                <Badge color="gold" size="medium" dot>
                  Nền tảng thiệp cưới thông minh
                </Badge>

                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: fontWeights.extrabold,
                    fontSize: { xs: fontSizes["3xl"], sm: fontSizes["5xl"], md: fontSizes["7xl"] },
                    lineHeight: lineHeights.tight,
                    letterSpacing: letterSpacings.tight,
                  }}
                >
                  Thiết Kế Thiệp Mời{" "}
                  <Typography
                    component="span"
                    variant="inherit"
                    sx={{
                      background: colors.brand.luxuryGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Hoàng Gia
                  </Typography>
                  {" "}& Hiện Đại
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: fontSizes.base, md: fontSizes.lg },
                    lineHeight: lineHeights.relaxed,
                    maxWidth: 560,
                  }}
                >
                  Tạo thiệp cưới online lãng mạn, gửi qua mạng xã hội chỉ trong giây lát.
                  Quản lý RSVP thời gian thực và để khách mời cảm nhận sự chỉn chu của bạn.
                </Typography>

                {/* CTAs */}
                <StackRow direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                  <Link href="/templates" style={{ textDecoration: "none" }}>
                    <Button
                      variant="gradient"
                      size="large"
                      sx={{ px: `${paddings.xl}px`, py: `${paddings.md}px`, width: { xs: "100%", sm: "auto" } }}
                    >
                      Bắt đầu tạo thiệp miễn phí
                    </Button>
                  </Link>
                  <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outline"
                      size="large"
                      rightIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                      sx={{ px: `${paddings.lg}px`, py: `${paddings.md}px`, width: { xs: "100%", sm: "auto" } }}
                    >
                      Xem thiệp mẫu thực tế
                    </Button>
                  </Link>
                </StackRow>

                {/* Trust signals */}
                <StackRowAlignJustCenter spacing={3} sx={{ pt: 1, flexWrap: "wrap" }}>
                  {[
                    "Miễn phí khởi tạo",
                    "Tối ưu điện thoại",
                    "Không giới hạn khách xem",
                  ].map((text) => (
                    <StackRowAlignJustCenter key={text} spacing={0.75}>
                      <CheckCircleIcon sx={{ color: colors.gold.main, fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontWeight: fontWeights.medium, color: colors.text.secondary, fontSize: fontSizes.sm }}>
                        {text}
                      </Typography>
                    </StackRowAlignJustCenter>
                  ))}
                </StackRowAlignJustCenter>
              </StackCol>
            </Grid>

            {/* Cột preview card thiệp */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative", mx: "auto", maxWidth: { xs: 340, sm: 380 } }}>
                <Card
                  glassmorphism
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: `${paddings.lg}px`,
                    borderRadius: `${borderRadius.lg}px`,
                    boxShadow: shadows.cardFloating,
                  }}
                >
                  {/* Ảnh thiệp preview */}
                  <StackColAlignJustCenter
                    sx={{
                      height: 200,
                      borderRadius: `${borderRadius.md}px`,
                      backgroundImage:
                        `linear-gradient(${colors.background.overlayCardDark}), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      justifyContent: "flex-end",
                      p: `${paddings.md}px`,
                      color: colors.text.inverse,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Live badge */}
                    <Box sx={{ position: "absolute", top: paddings.sm, right: paddings.sm }}>
                      <StackRowAlignJustCenter
                        spacing={0.5}
                        sx={{
                          backgroundColor: "rgba(0,0,0,0.6)",
                          backdropFilter: "blur(8px)",
                          borderRadius: `${borderRadius.sm}px`,
                          px: `${paddings.sm}px`,
                          py: `${paddings.xs}px`,
                        }}
                      >
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4ADE80", animation: "pulse 1.5s ease-in-out infinite" }} />
                        <Typography sx={{ fontSize: "0.65rem", fontWeight: fontWeights.bold, color: "#fff" }}>LIVE</Typography>
                      </StackRowAlignJustCenter>
                    </Box>

                    <StackColAlignJustCenter spacing={0.5}>
                      <Typography
                        sx={{
                          fontFamily: "var(--font-great-vibes), cursive",
                          fontSize: fontSizes["2xl"],
                          lineHeight: lineHeights.tight,
                        }}
                      >
                        Minh Tuấn & Khánh Linh
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.85, fontSize: fontSizes.xs }}>
                        28 Tháng 10, 2026  •  TP. Hồ Chí Minh
                      </Typography>
                    </StackColAlignJustCenter>
                  </StackColAlignJustCenter>

                  {/* Meta info */}
                  <StackRowAlignJustBetween sx={{ mt: 2, px: `${paddings.xs}px` }}>
                    <StackRowAlignJustCenter spacing={1}>
                      <FavoriteIcon sx={{ color: colors.rose.main, fontSize: 18 }} />
                      <StackCol spacing={0}>
                        <Typography sx={{ fontWeight: fontWeights.bold, fontSize: fontSizes.sm, lineHeight: lineHeights.none }}>128 khách xác nhận</Typography>
                        <Typography sx={{ color: colors.text.secondary, fontSize: "0.68rem" }}>Cập nhật vừa xong</Typography>
                      </StackCol>
                    </StackRowAlignJustCenter>
                    <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                      <Button
                        variant="gradient"
                        size="small"
                        rightIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                      >
                        Mở thiệp
                      </Button>
                    </Link>
                  </StackRowAlignJustBetween>
                </Card>

                {/* Floating stat badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -16,
                    left: -16,
                    backgroundColor: colors.background.paper,
                    borderRadius: `${borderRadius.md}px`,
                    boxShadow: shadows.goldSm,
                    border: `1px solid ${colors.border.goldLight}`,
                    px: `${paddings.md}px`,
                    py: `${paddings.sm}px`,
                    zIndex: 2,
                  }}
                >
                  <StackRowAlignJustCenter spacing={1}>
                    <StarIcon sx={{ color: colors.gold.main, fontSize: 18 }} />
                    <StackCol spacing={0}>
                      <Typography sx={{ fontWeight: fontWeights.bold, fontSize: fontSizes.sm, lineHeight: lineHeights.none }}>50.000+ thiệp</Typography>
                      <Typography sx={{ fontSize: "0.68rem", color: colors.text.secondary }}>đã được tạo</Typography>
                    </StackCol>
                  </StackRowAlignJustCenter>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ─── Stats Bar ────────────────────────────────────── */}
      <Box sx={{ backgroundColor: colors.background.paper, borderTop: `1px solid ${colors.border.goldLight}`, borderBottom: `1px solid ${colors.border.goldLight}` }}>
        <Container maxWidth="lg">
          <Grid container>
            {STATS.map((stat, i) => (
              <Grid key={i} size={{ xs: 6, md: 3 }}>
                <StackColAlignJustCenter
                  sx={{
                    py: `${paddings.xl}px`,
                    borderRight: i < 3 ? `1px solid ${colors.border.goldLight}` : "none",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: fontWeights.black,
                      fontSize: fontSizes["2xl"],
                      background: colors.brand.luxuryGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.text.secondary, fontWeight: fontWeights.medium, fontSize: fontSizes.sm }}>
                    {stat.label}
                  </Typography>
                </StackColAlignJustCenter>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── 2. Tính năng ─────────────────────────────────── */}
      <Box sx={{ py: `${paddings["4xl"]}px`, backgroundColor: colors.background.default }}>
        <Container maxWidth="lg">
          <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
            <Badge color="primary" size="medium" dot sx={{ alignSelf: "center" }}>Tính năng đột phá</Badge>
            <Typography variant="h2" sx={{ fontWeight: fontWeights.extrabold, fontSize: { xs: fontSizes["2xl"], md: fontSizes["4xl"] } }}>
              Mọi Thứ Bạn Cần Cho Thiệp Hoàn Hảo
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, fontSize: fontSizes.base }}>
              Nền tảng thiệp điện tử đầy đủ nhất Việt Nam — từ thiết kế đến quản lý khách mời.
            </Typography>
          </StackColAlignJustCenter>

          <Grid container spacing={3}>
            {FEATURES.map((feature, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  hoverEffect
                  sx={{
                    ...stackColumnStyle,
                    p: `${paddings.xl}px`,
                    height: "100%",
                    borderRadius: `${borderRadius.md}px`,
                    gap: `${paddings.md}px`,
                  }}
                >
                  {/* Icon box */}
                  <StackRowAlignJustCenter
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: `${borderRadius.md}px`,
                      backgroundColor: feature.bg,
                      border: `1px solid ${feature.color}25`,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </StackRowAlignJustCenter>

                  <StackCol spacing={1} sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: fontWeights.bold, fontSize: fontSizes.base }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: lineHeights.relaxed, fontSize: fontSizes.sm }}>
                      {feature.description}
                    </Typography>
                  </StackCol>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── 3. Bộ sưu tập mẫu thiệp ─────────────────────── */}
      <Box sx={{ py: `${paddings["4xl"]}px`, backgroundColor: colors.background.paper }}>
        <Container maxWidth="lg">
          <StackRowAlignJustBetween
            direction={{ xs: "column", md: "row" }}
            sx={{ alignItems: { xs: "flex-start", md: "flex-end" }, mb: 6 }}
          >
            <StackCol spacing={1}>
              <Badge color="gold" size="medium" dot>Bộ sưu tập tuyển chọn</Badge>
              <Typography variant="h2" sx={{ fontWeight: fontWeights.extrabold, fontSize: { xs: fontSizes["2xl"], md: fontSizes["4xl"] }, mt: 0.5 }}>
                Mẫu Thiệp Mời Nổi Bật
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Hàng trăm mẫu được thiết kế bởi chuyên gia — chọn 1 mẫu, cá nhân hoá trong 5 phút.
              </Typography>
            </StackCol>
            <Link href="/templates" style={{ textDecoration: "none" }}>
              <Button
                variant="ghost"
                rightIcon={<ArrowForwardIcon />}
                sx={{ mt: { xs: 2, md: 0 }, fontWeight: fontWeights.semibold }}
              >
                Xem toàn bộ mẫu thiệp
              </Button>
            </Link>
          </StackRowAlignJustBetween>

          {/* Featured Templates Dynamic List from Backend API */}
          <FeaturedTemplates />
        </Container>
      </Box>

      {/* ─── 4. Quy trình 3 bước ──────────────────────────── */}
      <Box sx={{ py: `${paddings["4xl"]}px`, backgroundColor: colors.background.default }}>
        <Container maxWidth="lg">
          <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
            <Badge color="primary" size="medium" dot sx={{ alignSelf: "center" }}>Quy trình đơn giản</Badge>
            <Typography variant="h2" sx={{ fontWeight: fontWeights.extrabold, fontSize: { xs: fontSizes["2xl"], md: fontSizes["4xl"] } }}>
              Tạo Thiệp Trong 3 Bước
            </Typography>
          </StackColAlignJustCenter>

          <Grid container spacing={3}>
            {STEPS.map((step, idx) => (
              <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                <Card
                  hoverEffect
                  sx={{
                    p: `${paddings.xl}px`,
                    height: "100%",
                    borderRadius: `${borderRadius.md}px`,
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {/* Số thứ tự lớn phía sau */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: paddings.md,
                      right: paddings.lg,
                      fontSize: "4.5rem",
                      fontWeight: fontWeights.black,
                      color: `${colors.gold.main}15`,
                      lineHeight: 1,
                      fontFamily: "var(--font-playfair), serif",
                      userSelect: "none",
                    }}
                  >
                    {step.number}
                  </Typography>

                  <StackCol spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                    {/* Icon + step number */}
                    <StackRowAlignJustCenter
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: `${borderRadius.md}px`,
                        background: colors.brand.luxuryGradient,
                        color: colors.text.inverse,
                      }}
                    >
                      {step.icon}
                    </StackRowAlignJustCenter>

                    <StackCol spacing={1}>
                      <Typography variant="h5" sx={{ fontWeight: fontWeights.bold, fontSize: fontSizes.lg }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: lineHeights.relaxed, fontSize: fontSizes.sm }}>
                        {step.description}
                      </Typography>
                    </StackCol>
                  </StackCol>

                  {/* Connector arrow (chỉ md+, không phải bước cuối) */}
                  {idx < STEPS.length - 1 && (
                    <StackRowAlignJustCenter
                      sx={{
                        display: { xs: "none", md: "flex" },
                        position: "absolute",
                        right: -16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        backgroundColor: colors.background.paper,
                        borderRadius: "50%",
                        border: `1px solid ${colors.border.goldLight}`,
                        width: 32,
                        height: 32,
                      }}
                    >
                      <ArrowForwardIcon sx={{ fontSize: 16, color: colors.gold.main }} />
                    </StackRowAlignJustCenter>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── 5. CTA Banner ────────────────────────────────── */}
      <Box sx={{ py: `${paddings["4xl"]}px`, px: `${paddings.md}px` }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: `${borderRadius.xl}px`,
              background: colors.brand.luxuryGradient,
              color: colors.text.inverse,
              p: { xs: `${paddings["2xl"]}px`, md: `${paddings["3xl"]}px` },
              textAlign: "center",
              boxShadow: shadows.goldXl,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <Box sx={{ position: "absolute", width: 240, height: 240, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", top: -80, right: -40, pointerEvents: "none" }} />
            <Box sx={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)", bottom: -60, left: 20, pointerEvents: "none" }} />

            <StackColAlignJustCenter spacing={3} sx={{ maxWidth: 640, mx: "auto", position: "relative", zIndex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: fontWeights.black,
                  fontSize: { xs: fontSizes["2xl"], md: fontSizes["4xl"] },
                  lineHeight: lineHeights.tight,
                }}
              >
                Sẵn Sàng Tạo Tấm Thiệp Đáng Nhớ Của Riêng Bạn?
              </Typography>

              <Typography variant="body1" sx={{ fontSize: fontSizes.base, opacity: 0.92, maxWidth: 480, mx: "auto" }}>
                Đăng ký miễn phí ngay hôm nay. Không cần thẻ tín dụng, không giới hạn thời gian dùng thử.
              </Typography>

              <StackRow
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1 }}
              >
                <Link href="/templates" style={{ textDecoration: "none" }}>
                  <Button
                    variant="secondary"
                    size="large"
                    sx={{
                      backgroundColor: colors.background.paper,
                      color: colors.gold.dark,
                      fontWeight: fontWeights.bold,
                      "&:hover": { backgroundColor: colors.background.cream, boxShadow: shadows.md },
                      px: `${paddings.xl}px`,
                      py: `${paddings.md}px`,
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Bắt đầu tạo thiệp ngay
                  </Button>
                </Link>

                <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    size="large"
                    rightIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.6)",
                      color: colors.text.inverse,
                      fontWeight: fontWeights.semibold,
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.12)", borderColor: "#fff" },
                      px: `${paddings.xl}px`,
                      py: `${paddings.md}px`,
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Xem thiệp Demo
                  </Button>
                </Link>
              </StackRow>

              <StackRowAlignJustCenter spacing={3} sx={{ flexWrap: "wrap", opacity: 0.88 }}>
                {["Hoàn toàn miễn phí", "Không giới hạn khách xem", "Tương thích 100% điện thoại"].map((t) => (
                  <StackRowAlignJustCenter key={t} spacing={0.75}>
                    <CheckCircleIcon sx={{ fontSize: 16 }} />
                    <Typography variant="caption" sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.medium }}>
                      {t}
                    </Typography>
                  </StackRowAlignJustCenter>
                ))}
              </StackRowAlignJustCenter>
            </StackColAlignJustCenter>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
