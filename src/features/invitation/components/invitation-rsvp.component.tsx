"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  Input,
  StackCol,
  StackColAlignJustCenter,
} from "@/components/ui";
import { borderRadius } from "@/theme/spacing";
import { fontWeights } from "@/theme/typography";
import { invitationService } from "../services/invitation.service";
import type { InvitationThemeConfig } from "../types/invitation.type";

interface InvitationRsvpProps {
  invitationId: string;
  themeConfig: InvitationThemeConfig;
}

export function InvitationRsvp({ invitationId, themeConfig }: InvitationRsvpProps) {
  const primaryColor = themeConfig.primaryColor || "#B78628";

  const [guestName, setGuestName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [numberOfGuests, setNumberOfGuests] = useState("1");
  const [wishes, setWishes] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setStatus({ type: "error", message: "Vui lòng nhập họ và tên của bạn." });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);
      const res = await invitationService.submitRsvp({
        invitationId,
        guestName: guestName.trim(),
        phoneNumber: phoneNumber.trim(),
        attending: attending === "yes",
        numberOfGuests: attending === "yes" ? parseInt(numberOfGuests, 10) || 1 : 0,
        wishes: wishes.trim(),
      });

      setStatus({ type: "success", message: res.message });
      if (attending === "yes") {
        setWishes("");
      }
    } catch {
      setStatus({
        type: "error",
        message: "Không thể gửi phản hồi. Vui lòng thử lại sau.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "rgba(183, 134, 40, 0.04)" }}>
      <Container maxWidth="sm">
        {/* Tiêu đề mục RSVP */}
        <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              color: primaryColor,
              fontWeight: fontWeights.bold,
              fontSize: "0.85rem",
            }}
          >
            XÁC NHẬN THAM DỰ
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: fontWeights.bold,
            }}
          >
            Sự Hiện Diện Của Bạn
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
            Để chuẩn bị đón tiếp chu đáo nhất, xin vui lòng phản hồi trước ngày cưới.
          </Typography>
        </StackColAlignJustCenter>

        <Card
          sx={{
            borderRadius: `${borderRadius.xl}px`,
            boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
            border: "1px solid rgba(183, 134, 40, 0.15)",
            p: { xs: 2, sm: 3 },
          }}
        >
          <CardContent>
            {status && (
              <Alert severity={status.type} sx={{ mb: 3, borderRadius: `${borderRadius.sm}px` }}>
                {status.message}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <StackCol spacing={2.5}>
                <Input
                  label="Họ và tên của bạn *"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  fullWidth
                  required
                />

                <Input
                  label="Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  fullWidth
                />

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: fontWeights.semibold }}>
                    Bạn sẽ đến chung vui chứ?
                  </Typography>
                  <RadioGroup
                    row
                    value={attending}
                    onChange={(e) => setAttending(e.target.value as "yes" | "no")}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio sx={{ color: primaryColor, "&.Mui-checked": { color: primaryColor } }} />}
                      label="Chắc chắn tham dự"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio sx={{ color: primaryColor, "&.Mui-checked": { color: primaryColor } }} />}
                      label="Rất tiếc không thể tham dự"
                    />
                  </RadioGroup>
                </Box>

                {attending === "yes" && (
                  <Input
                    label="Số lượng người đi cùng"
                    type="number"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    slotProps={{ htmlInput: { min: 1, max: 10 } }}
                    fullWidth
                  />
                )}

                <Input
                  label="Gửi lời chúc đến dâu rể"
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  multiline
                  rows={3}
                  fullWidth
                  placeholder="Chúc hai bạn trăm năm hạnh phúc, vẹn tròn viên mãn..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  isLoading={loading}
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: `${borderRadius.md}px`,
                    fontWeight: fontWeights.bold,
                    fontSize: "1rem",
                  }}
                >
                  Gửi Xác Nhận
                </Button>
              </StackCol>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
