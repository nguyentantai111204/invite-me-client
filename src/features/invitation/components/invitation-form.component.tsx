"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import SaveIcon from "@mui/icons-material/Save";
import PublicIcon from "@mui/icons-material/Public";

import { StackCol, StackRow, StackRowBetween } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { Badge } from "@/components/ui/badge.component";
import { invitationApi } from "@/services/api";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationData } from "../types/invitation.type";

const EVENT_TYPES = [
  { label: "Lễ Cưới (Wedding)", value: "WEDDING" },
  { label: "Sinh Nhật (Birthday)", value: "BIRTHDAY" },
  { label: "Lễ Kỷ Niệm (Anniversary)", value: "ANNIVERSARY" },
  { label: "Tiệc Mừng (Party)", value: "PARTY" },
  { label: "Sự Kiện Doanh Nghiệp (Corporate)", value: "CORPORATE" },
];

export interface InvitationFormProps {
  initialData?: Partial<InvitationData>;
  templateId?: string;
  isEditMode?: boolean;
}

export function InvitationForm({
  initialData,
  templateId,
  isEditMode = false,
}: InvitationFormProps) {
  const router = useRouter();

  // Basic Info
  const [title, setTitle] = useState(initialData?.title || "Lễ Thành Hôn - Minh & Linh");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [eventType, setEventType] = useState(initialData?.eventType || "WEDDING");
  const [eventDate, setEventDate] = useState(
    initialData?.eventDate
      ? new Date(initialData.eventDate).toISOString().split("T")[0]
      : "2026-11-20"
  );
  const [eventTime, setEventTime] = useState(initialData?.eventTime || "11:30");
  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage ||
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
  );

  // Couple Info
  const [groomName, setGroomName] = useState(initialData?.couple?.groom?.fullName || "Nguyễn Văn Minh");
  const [groomShortName, setGroomShortName] = useState(initialData?.couple?.groom?.shortName || "Minh");
  const [groomParents, setGroomParents] = useState(initialData?.couple?.groom?.parentsName || "Ông Nguyễn Văn A & Bà Trần Thị B");
  
  const [brideName, setBrideName] = useState(initialData?.couple?.bride?.fullName || "Trần Phương Linh");
  const [brideShortName, setBrideShortName] = useState(initialData?.couple?.bride?.shortName || "Linh");
  const [brideParents, setBrideParents] = useState(initialData?.couple?.bride?.parentsName || "Ông Trần Văn C & Bà Lê Thị D");

  // Location Info
  const [venueName, setVenueName] = useState(initialData?.location?.venueName || "Trung Tâm Hội Nghị Tiệc Cưới White Palace");
  const [address, setAddress] = useState(initialData?.location?.address || "194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận");
  const [city, setCity] = useState(initialData?.location?.city || "TP. Hồ Chí Minh");
  const [mapUrl, setMapUrl] = useState(initialData?.location?.mapUrl || "https://maps.google.com");

  // Theme Config
  const [primaryColor, setPrimaryColor] = useState(initialData?.themeConfig?.primaryColor || "#B78628");
  const [musicUrl, setMusicUrl] = useState(initialData?.themeConfig?.musicUrl || "");
  const [autoPlayMusic, setAutoPlayMusic] = useState(initialData?.themeConfig?.autoPlayMusic ?? false);
  const [rsvpEnabled, setRsvpEnabled] = useState(initialData?.rsvpEnabled ?? true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Tự động sinh slug từ title nếu đang tạo mới
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditMode && !slug) {
      const generated = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(generated);
    }
  };

  const handleSubmit = async (publishImmediately = false) => {
    if (!title.trim() || !slug.trim() || !eventDate || !eventTime) {
      setErrorMessage("Vui lòng điền đầy đủ các thông tin bắt buộc (Tiêu đề, Đường dẫn, Ngày giờ).");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      const payload = {
        templateId: templateId || initialData?.templateId,
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        eventType,
        eventDate: new Date(eventDate).toISOString(),
        eventTime,
        coverImage,
        ogImage: coverImage,
        themeConfig: {
          fontIds: ["playfair", "greatVibes", "inter"],
          primaryColor,
          secondaryColor: "#E8C872",
          musicUrl: musicUrl.trim() || undefined,
          autoPlayMusic,
        },
        sectionVisibility: {
          hero: true,
          countdown: true,
          couple: true,
          loveStory: true,
          schedule: true,
          location: true,
          gallery: true,
          bankAccounts: true,
          rsvp: rsvpEnabled,
          music: Boolean(musicUrl),
        },
        coupleData: {
          groom: {
            fullName: groomName.trim(),
            shortName: groomShortName.trim(),
            role: "groom",
            parentsName: groomParents.trim(),
          },
          bride: {
            fullName: brideName.trim(),
            shortName: brideShortName.trim(),
            role: "bride",
            parentsName: brideParents.trim(),
          },
        },
        locationData: {
          venueName: venueName.trim(),
          address: address.trim(),
          city: city.trim(),
          mapUrl: mapUrl.trim(),
        },
        rsvpEnabled,
      };

      let resultId = initialData?.id;

      if (isEditMode && initialData?.id) {
        await invitationApi.updateInvitation(initialData.id, payload);
      } else {
        const created = await invitationApi.createInvitation(payload);
        resultId = created.id;
      }

      if (publishImmediately && resultId) {
        await invitationApi.publishInvitation(resultId);
      }

      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Đã xảy ra lỗi khi lưu thiệp. Vui lòng kiểm tra lại.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StackCol gap={`${gaps.xl}px`} sx={{ width: "100%", maxWidth: "900px", mx: "auto" }}>
      {errorMessage && (
        <Alert severity="error" sx={{ borderRadius: `${borderRadius.sm}px` }}>
          {errorMessage}
        </Alert>
      )}

      {/* Section 1: Thông tin cơ bản */}
      <Card
        sx={{
          padding: `${paddings.xl}px`,
          borderRadius: `${borderRadius.lg}px`,
          border: `1px solid ${colors.border.goldLight}`,
        }}
      >
        <StackCol gap={`${gaps.lg}px`}>
          <StackRowBetween>
            <Typography variant="h6" sx={{ fontWeight: fontWeights.bold, color: colors.text.primary }}>
              1. Thông tin chung & Thời gian
            </Typography>
            <Badge variant="gold" size="small">
              Bắt buộc
            </Badge>
          </StackRowBetween>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Tiêu đề thiệp mời *
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="VD: Lễ Thành Hôn - Minh & Linh"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Loại sự kiện
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                {EVENT_TYPES.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Đường dẫn liên kết (Slug URL) *
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="vd: minh-linh-wedding"
                helperText={`Link thiệp: /i/${slug || "..."}`}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 3 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Ngày tổ chức *
              </Typography>
              <TextField
                type="date"
                fullWidth
                size="small"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 3 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Giờ khai tiệc *
              </Typography>
              <TextField
                type="time"
                fullWidth
                size="small"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                URL Ảnh bìa chính (Cover Image)
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </Grid>
          </Grid>
        </StackCol>
      </Card>

      {/* Section 2: Thông tin Cô dâu & Chú rể */}
      <Card
        sx={{
          padding: `${paddings.xl}px`,
          borderRadius: `${borderRadius.lg}px`,
          border: `1px solid ${colors.border.goldLight}`,
        }}
      >
        <StackCol gap={`${gaps.lg}px`}>
          <Typography variant="h6" sx={{ fontWeight: fontWeights.bold, color: colors.text.primary }}>
            2. Thông tin Cô Dâu & Chú Rể
          </Typography>

          <Grid container spacing={3}>
            {/* Chú rể */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <StackCol gap={`${gaps.md}px`}>
                <Typography sx={{ fontWeight: fontWeights.bold, color: colors.gold.dark, fontSize: fontSizes.sm }}>
                  🤵 Nhà Trai (Chú Rể)
                </Typography>
                <TextField
                  label="Họ và tên chú rể"
                  fullWidth
                  size="small"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                />
                <TextField
                  label="Tên gọi thân mật"
                  fullWidth
                  size="small"
                  value={groomShortName}
                  onChange={(e) => setGroomShortName(e.target.value)}
                />
                <TextField
                  label="Họ tên phụ mẫu nhà trai"
                  fullWidth
                  size="small"
                  value={groomParents}
                  onChange={(e) => setGroomParents(e.target.value)}
                />
              </StackCol>
            </Grid>

            {/* Cô dâu */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <StackCol gap={`${gaps.md}px`}>
                <Typography sx={{ fontWeight: fontWeights.bold, color: colors.rose.dark, fontSize: fontSizes.sm }}>
                  👰 Nhà Gái (Cô Dâu)
                </Typography>
                <TextField
                  label="Họ và tên cô dâu"
                  fullWidth
                  size="small"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                />
                <TextField
                  label="Tên gọi thân mật"
                  fullWidth
                  size="small"
                  value={brideShortName}
                  onChange={(e) => setBrideShortName(e.target.value)}
                />
                <TextField
                  label="Họ tên phụ mẫu nhà gái"
                  fullWidth
                  size="small"
                  value={brideParents}
                  onChange={(e) => setBrideParents(e.target.value)}
                />
              </StackCol>
            </Grid>
          </Grid>
        </StackCol>
      </Card>

      {/* Section 3: Địa điểm & Bản đồ */}
      <Card
        sx={{
          padding: `${paddings.xl}px`,
          borderRadius: `${borderRadius.lg}px`,
          border: `1px solid ${colors.border.goldLight}`,
        }}
      >
        <StackCol gap={`${gaps.lg}px`}>
          <Typography variant="h6" sx={{ fontWeight: fontWeights.bold, color: colors.text.primary }}>
            3. Địa điểm tổ chức
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Tên địa điểm / Nhà hàng
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={venueName}
                onChange={(e) => setVenueName(e.target.value)}
                placeholder="VD: Trung Tâm Hội Nghị Tiệc Cưới White Palace"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Tỉnh / Thành phố
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="VD: TP. Hồ Chí Minh"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Địa chỉ chi tiết
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="VD: 194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Link Google Maps chỉ đường
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={mapUrl}
                onChange={(e) => setMapUrl(e.target.value)}
                placeholder="https://maps.google.com/..."
              />
            </Grid>
          </Grid>
        </StackCol>
      </Card>

      {/* Section 4: Cài đặt Âm nhạc & RSVP */}
      <Card
        sx={{
          padding: `${paddings.xl}px`,
          borderRadius: `${borderRadius.lg}px`,
          border: `1px solid ${colors.border.goldLight}`,
        }}
      >
        <StackCol gap={`${gaps.lg}px`}>
          <Typography variant="h6" sx={{ fontWeight: fontWeights.bold, color: colors.text.primary }}>
            4. Âm nhạc & Phản hồi RSVP
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Màu chủ đạo (Primary Hex)
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                placeholder="#B78628"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, mb: "4px" }}>
                Link nhạc nền (.mp3 trực tiếp)
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={musicUrl}
                onChange={(e) => setMusicUrl(e.target.value)}
                placeholder="https://example.com/music.mp3"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={autoPlayMusic}
                    onChange={(e) => setAutoPlayMusic(e.target.checked)}
                    color="primary"
                  />
                }
                label="Tự động phát nhạc khi khách mở thiệp"
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={rsvpEnabled}
                    onChange={(e) => setRsvpEnabled(e.target.checked)}
                    color="primary"
                  />
                }
                label="Bật form xác nhận tham dự (RSVP)"
              />
            </Grid>
          </Grid>
        </StackCol>
      </Card>

      {/* Action Footer */}
      <StackRowBetween
        sx={{
          py: `${paddings.md}px`,
          position: "sticky",
          bottom: 0,
          backgroundColor: "rgba(250, 248, 245, 0.95)",
          backdropFilter: "blur(12px)",
          borderTop: `1px solid ${colors.border.goldLight}`,
          zIndex: 10,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => router.push("/dashboard")}
          disabled={isSubmitting}
        >
          Hủy bỏ
        </Button>

        <StackRow gap={`${gaps.md}px`}>
          <Button
            variant="outlined"
            loading={isSubmitting}
            onClick={() => handleSubmit(false)}
            startIcon={<SaveIcon />}
            sx={{
              borderColor: colors.border.gold,
              color: colors.gold.dark,
            }}
          >
            Lưu bản nháp
          </Button>

          <Button
            variant="contained"
            loading={isSubmitting}
            onClick={() => handleSubmit(true)}
            startIcon={<PublicIcon />}
            sx={{
              background: colors.gold.gradient,
              color: colors.text.inverse,
              boxShadow: shadows.goldMd,
            }}
          >
            Lưu & Xuất bản ngay
          </Button>
        </StackRow>
      </StackRowBetween>
    </StackCol>
  );
}
