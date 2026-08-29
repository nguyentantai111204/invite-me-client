import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Badge,
  Card,
  StackRow,
  StackRowAlignJustCenter,
  StackRowAlignJustBetween,
  StackCol,
  StackColAlignJustCenter,
} from "@/components/ui";

const FEATURES = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: "#B78628" }} />,
    title: "Typography & Thiết Kế Đẳng Cấp",
    description:
      "Tuyển tập font chữ Serif cổ điển và Calligraphy viết tay lãng mạn, mang đến vẻ đẹp hoàng gia cho từng mẫu thiệp.",
  },
  {
    icon: <HowToRegIcon sx={{ fontSize: 32, color: "#E58B7B" }} />,
    title: "Quản Lý Khách Mời & RSVP Realtime",
    description:
      "Khách dễ dàng xác nhận tham dự, số người đi cùng và gửi lời chúc tốt đẹp. Chủ tiệc theo dõi danh sách khách mời trực tiếp.",
  },
  {
    icon: <MusicNoteIcon sx={{ fontSize: 32, color: "#B78628" }} />,
    title: "Âm Nhạc Lãng Mạn & Album Ảnh",
    description:
      "Tự động phát bài hát yêu thích khi khách mở thiệp, kèm thư viện ảnh cưới sắc nét và đếm ngược thời gian trực quan.",
  },
  {
    icon: <QrCode2Icon sx={{ fontSize: 32, color: "#059669" }} />,
    title: "Bản Đồ 1-Chạm & Mừng Cưới Online",
    description:
      "Tích hợp chỉ đường Google Maps chính xác cùng mã QR tài khoản ngân hàng giúp khách phương xa dễ dàng gửi quà mừng.",
  },
];

const TEMPLATES_PREVIEW = [
  {
    id: "luxury-wedding",
    title: "Hoàng Gia Sang Trọng",
    category: "Thiệp Cưới",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    badge: "Phổ biến nhất",
    badgeColor: "gold" as const,
  },
  {
    id: "minimalist-modern",
    title: "Tối Giản Hiện Đại",
    category: "Thiệp Cưới",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    badge: "Mới ra mắt",
    badgeColor: "primary" as const,
  },
  {
    id: "sweet-birthday",
    title: "Sinh Nhật Ngọt Ngào",
    category: "Sinh Nhật",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    previewSlug: "minh-linh",
    badge: "Hot Trend",
    badgeColor: "secondary" as const,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Chọn Mẫu Thiết Kế",
    description:
      "Khám phá kho mẫu thiệp cưới, sinh nhật và sự kiện đa dạng phong cách từ cổ điển đến hiện đại.",
  },
  {
    number: "02",
    title: "Tùy Chỉnh Nội Dung",
    description:
      "Điền thông tin dâu rể, thời gian, địa điểm, tải lên album ảnh và chọn bài nhạc nền yêu thích.",
  },
  {
    number: "03",
    title: "Chia Sẻ & Nhận RSVP",
    description:
      "Nhận link thiệp độc quyền gửi qua Zalo, Facebook và theo dõi số lượng khách xác nhận tham dự.",
  },
];

export default function HomePage() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* 1. Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 14 },
          pb: { xs: 10, md: 16 },
          background:
            "radial-gradient(ellipse at top, rgba(183, 134, 40, 0.12), transparent 70%), radial-gradient(ellipse at bottom right, rgba(229, 139, 123, 0.08), transparent 70%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {/* Cột trái: Giới thiệu & CTA */}
            <Grid size={{ xs: 12, md: 7 }}>
              <StackCol spacing={3} sx={{ alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
                <Badge color="gold" size="medium">
                  ✨ Nền tảng thiết kế thiệp mời online thế hệ mới
                </Badge>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.25rem" },
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: -1,
                  }}
                >
                  Thiết Kế Thiệp Mời Online{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Thông Minh & Đẳng Cấp
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" }, lineHeight: 1.7, maxWidth: 580 }}
                >
                  Tạo thiệp cưới điện tử, sinh nhật và sự kiện cao cấp chỉ trong 3 phút.
                  Chia sẻ link tương tác qua Zalo/Facebook, tự động nhận phản hồi RSVP thời gian thực.
                </Typography>

                {/* Các nút hành động chính */}
                <StackRow
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
                >
                  <Link href="/templates" style={{ textDecoration: "none" }}>
                    <Button
                      variant="gradient"
                      size="large"
                      rightIcon={<ArrowForwardIcon />}
                      sx={{ width: { xs: "100%", sm: "auto" }, py: 1.6, px: 4, fontSize: "1.05rem" }}
                    >
                      Bắt đầu tạo thiệp miễn phí
                    </Button>
                  </Link>

                  <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outline"
                      size="large"
                      sx={{ width: { xs: "100%", sm: "auto" }, py: 1.6, px: 3.5, fontSize: "1.05rem" }}
                    >
                      Xem mẫu thực tế
                    </Button>
                  </Link>
                </StackRow>

                {/* Chứng thực người dùng */}
                <StackRowAlignJustCenter spacing={2} sx={{ pt: 2 }}>
                  <StackRow sx={{ ml: 1 }}>
                    {["1", "2", "3", "4"].map((item, idx) => (
                      <Avatar
                        key={item}
                        src={`https://images.unsplash.com/photo-${1534528741775 + idx * 1000}?q=80&w=100&auto=format&fit=crop`}
                        sx={{
                          width: 36,
                          height: 36,
                          ml: -1,
                          border: "2px solid #FFFFFF",
                        }}
                      />
                    ))}
                  </StackRow>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "text.secondary" }}>
                    ⭐ <strong>4.9/5</strong> từ hơn <strong>50.000+</strong> cặp đôi & sự kiện
                  </Typography>
                </StackRowAlignJustCenter>
              </StackCol>
            </Grid>

            {/* Cột phải: Thẻ xem trước thiệp mẫu */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative", maxWidth: 420, mx: "auto" }}>
                {/* Hiệu ứng ánh sáng nền */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(183, 134, 40, 0.3), rgba(229, 139, 123, 0.3))",
                    filter: "blur(60px)",
                    zIndex: 0,
                  }}
                />

                {/* Card mẫu thiệp nổi */}
                <Card
                  glassmorphism
                  hoverEffect
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 3,
                    borderRadius: 4,
                    boxShadow: "0 24px 48px rgba(0, 0, 0, 0.12)",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: 220,
                      borderRadius: 3,
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2,
                      color: "#FFFFFF",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "var(--font-great-vibes), cursive",
                        fontSize: "2.5rem",
                      }}
                    >
                      Minh Tuấn & Khánh Linh
                    </Typography>
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      28 Tháng 10, 2026 • TP. Hồ Chí Minh
                    </Typography>
                  </Box>

                  <StackRowAlignJustBetween sx={{ mt: 2.5 }}>
                    <StackRowAlignJustCenter spacing={1}>
                      <FavoriteIcon sx={{ color: "#DE7C66", fontSize: 20 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        128 Khách đã xác nhận
                      </Typography>
                    </StackRowAlignJustCenter>

                    <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                      <Button variant="outline" size="small">
                        Mở thiệp
                      </Button>
                    </Link>
                  </StackRowAlignJustBetween>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. Tính năng nổi bật */}
      <Box sx={{ py: 12, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <StackColAlignJustCenter spacing={2} sx={{ textAlign: "center", mb: 8 }}>
            <Badge color="primary" size="medium">TÍNH NĂNG ĐỘT PHÁ</Badge>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.75rem" } }}>
              Mọi Thứ Bạn Cần Cho Một Tấm Thiệp Hoàn Hảo
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620, fontSize: "1.1rem" }}>
              Không còn tốn kém chi phí in ấn hay lo thất lạc thiệp giấy. InviteMe mang đến trải nghiệm mời cưới hiện đại nhất.
            </Typography>
          </StackColAlignJustCenter>

          <Grid container spacing={4}>
            {FEATURES.map((feature, idx) => (
              <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  hoverEffect
                  sx={{
                    p: 3.5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3.5,
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Bộ sưu tập mẫu thiệp nổi bật */}
      <Box sx={{ py: 12, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <StackRowAlignJustBetween
            direction={{ xs: "column", md: "row" }}
            sx={{ alignItems: { xs: "flex-start", md: "flex-end" }, mb: 6 }}
          >
            <Box>
              <Badge color="gold" size="medium">BỘ SƯU TẬP TUYỂN CHỌN</Badge>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.75rem" }, mt: 1 }}>
                Mẫu Thiệp Mời Nổi Bật
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Hàng trăm mẫu thiết kế được chau chuốt tỉ mỉ từ các chuyên gia thiết kế thiệp cưới.
              </Typography>
            </Box>

            <Link href="/templates" style={{ textDecoration: "none" }}>
              <Button variant="ghost" rightIcon={<ArrowForwardIcon />} sx={{ mt: { xs: 2, md: 0 } }}>
                Xem toàn bộ mẫu thiệp
              </Button>
            </Link>
          </StackRowAlignJustBetween>

          <Grid container spacing={4}>
            {TEMPLATES_PREVIEW.map((tpl) => (
              <Grid key={tpl.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  hoverEffect
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: 280,
                      position: "relative",
                      backgroundImage: `url('${tpl.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Box sx={{ position: "absolute", top: 16, left: 16 }}>
                      <Badge color={tpl.badgeColor} size="small">{tpl.badge}</Badge>
                    </Box>
                  </Box>

                  <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: "uppercase" }}>
                        {tpl.category}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5, mb: 2 }}>
                        {tpl.title}
                      </Typography>
                    </Box>

                    <StackRow spacing={1.5}>
                      <Link href={`/i/${tpl.previewSlug}`} style={{ textDecoration: "none", flex: 1 }}>
                        <Button variant="outline" size="small" fullWidth>
                          Xem thử
                        </Button>
                      </Link>

                      <Link href={`/templates/${tpl.id}`} style={{ textDecoration: "none", flex: 1 }}>
                        <Button variant="primary" size="small" fullWidth>
                          Dùng mẫu này
                        </Button>
                      </Link>
                    </StackRow>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Quy trình tạo thiệp 3 bước */}
      <Box sx={{ py: 12, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <StackColAlignJustCenter spacing={2} sx={{ textAlign: "center", mb: 8 }}>
            <Badge color="primary" size="medium">QUY TRÌNH ĐƠN GIẢN</Badge>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.75rem" } }}>
              Tạo Thiệp Mời Trong 3 Bước
            </Typography>
          </StackColAlignJustCenter>

          <Grid container spacing={4}>
            {STEPS.map((step) => (
              <Grid key={step.number} size={{ xs: 12, md: 4 }}>
                <Card
                  hoverEffect
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3.5,
                    border: "1px solid rgba(183, 134, 40, 0.15)",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "3.5rem",
                      fontWeight: 900,
                      color: "rgba(183, 134, 40, 0.2)",
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. Banner kêu gọi hành động cuối trang */}
      <Box sx={{ py: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              borderRadius: 5,
              background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
              color: "#FFFFFF",
              p: { xs: 5, md: 8 },
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(183, 134, 40, 0.35)",
            }}
          >
            <StackColAlignJustCenter spacing={3} sx={{ maxWidth: 680, mx: "auto" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.25rem", md: "3.25rem" },
                  lineHeight: 1.2,
                }}
              >
                Sẵn Sàng Tạo Tấm Thiệp Mời Đáng Nhớ Của Riêng Bạn?
              </Typography>

              <Typography variant="body1" sx={{ fontSize: "1.15rem", opacity: 0.95 }}>
                Đăng ký tài khoản miễn phí ngay hôm nay và tạo dấu ấn đặc biệt cho ngày trọng đại.
              </Typography>

              <StackRow
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
              >
                <Link href="/templates" style={{ textDecoration: "none" }}>
                  <Button
                    variant="secondary"
                    size="large"
                    sx={{
                      backgroundColor: "#FFFFFF",
                      color: "#B78628",
                      "&:hover": { backgroundColor: "#FDFBF7" },
                      py: 1.6,
                      px: 4,
                      fontSize: "1.05rem",
                    }}
                  >
                    Bắt đầu tạo thiệp ngay
                  </Button>
                </Link>

                <Link href="/i/minh-linh" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outline"
                    size="large"
                    sx={{
                      borderColor: "#FFFFFF",
                      color: "#FFFFFF",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#FFFFFF" },
                      py: 1.6,
                      px: 3.5,
                      fontSize: "1.05rem",
                    }}
                  >
                    Xem thiệp mẫu Demo
                  </Button>
                </Link>
              </StackRow>

              <StackRowAlignJustCenter
                spacing={3}
                sx={{ pt: 2, flexWrap: "wrap", opacity: 0.9 }}
              >
                <StackRowAlignJustCenter spacing={1}>
                  <CheckCircleIcon sx={{ fontSize: 18 }} />
                  <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
                    Hoàn toàn miễn phí khởi tạo
                  </Typography>
                </StackRowAlignJustCenter>
                <StackRowAlignJustCenter spacing={1}>
                  <CheckCircleIcon sx={{ fontSize: 18 }} />
                  <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
                    Không giới hạn lượt khách xem
                  </Typography>
                </StackRowAlignJustCenter>
                <StackRowAlignJustCenter spacing={1}>
                  <CheckCircleIcon sx={{ fontSize: 18 }} />
                  <Typography variant="caption" sx={{ fontSize: "0.85rem" }}>
                    Tương thích 100% điện thoại di động
                  </Typography>
                </StackRowAlignJustCenter>
              </StackRowAlignJustCenter>
            </StackColAlignJustCenter>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
