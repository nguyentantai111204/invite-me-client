"use client";

import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings } from "@/theme/typography";
import { invitationService } from "../services/invitation.service";
import type { InvitationThemeConfig } from "../types/invitation.type";

const rsvpFormSchema = z.object({
  guestName: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập họ và tên của bạn")
    .max(100, "Họ và tên tối đa 100 ký tự"),
  phoneNumber: z
    .string()
    .trim()
    .max(20, "Số điện thoại không hợp lệ")
    .optional(),
  attending: z.enum(["yes", "no"]),
  numberOfGuests: z.coerce
    .number()
    .min(1, "Số lượng khách tối thiểu là 1")
    .max(10, "Số lượng khách tối đa là 10"),
  wishes: z
    .string()
    .trim()
    .max(500, "Lời chúc tối đa 500 ký tự")
    .optional(),
});

type RsvpFormData = z.infer<typeof rsvpFormSchema>;

interface InvitationRsvpProps {
  invitationId: string;
  themeConfig: InvitationThemeConfig;
}

export function InvitationRsvp({ invitationId, themeConfig }: InvitationRsvpProps) {
  const primaryColor = themeConfig.primaryColor || "#B78628";
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guestName: "",
      phoneNumber: "",
      attending: "yes",
      numberOfGuests: 1,
      wishes: "",
    },
  });

  const attendingValue = useWatch({ control, name: "attending" });

  const onSubmit = async (data: RsvpFormData) => {
    try {
      setStatus(null);
      const res = await invitationService.submitRsvp({
        invitationId,
        guestName: data.guestName,
        phoneNumber: data.phoneNumber || undefined,
        attending: data.attending === "yes",
        numberOfGuests: data.attending === "yes" ? data.numberOfGuests : 0,
        wishes: data.wishes || undefined,
      });

      setStatus({ type: "success", message: res.message });
      reset({
        guestName: "",
        phoneNumber: "",
        attending: "yes",
        numberOfGuests: 1,
        wishes: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Không thể gửi phản hồi. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <Box sx={{ py: `${paddings["4xl"]}px`, backgroundColor: "rgba(183, 134, 40, 0.04)" }}>
      <Container maxWidth="sm">
        {/* Tiêu đề mục RSVP */}
        <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: letterSpacings.wider,
              color: primaryColor,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xs,
            }}
          >
            XÁC NHẬN THAM DỰ
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: { xs: fontSizes["2xl"], md: fontSizes["3xl"] },
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
            p: { xs: `${paddings.sm}px`, sm: `${paddings.md}px` },
          }}
        >
          <CardContent>
            {status && (
              <Alert severity={status.type} sx={{ mb: 3, borderRadius: `${borderRadius.sm}px` }}>
                {status.message}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <StackCol spacing={2.5}>
                <Input
                  {...register("guestName")}
                  label="Họ và tên của bạn *"
                  error={Boolean(errors.guestName)}
                  helperText={errors.guestName?.message}
                  fullWidth
                  required
                />

                <Input
                  {...register("phoneNumber")}
                  label="Số điện thoại"
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
                  fullWidth
                />

                <Box>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: fontWeights.semibold }}>
                    Bạn sẽ đến chung vui chứ?
                  </Typography>
                  <Controller
                    name="attending"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup row {...field}>
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
                    )}
                  />
                </Box>

                {attendingValue === "yes" && (
                  <Input
                    {...register("numberOfGuests")}
                    label="Số lượng người đi cùng"
                    type="number"
                    error={Boolean(errors.numberOfGuests)}
                    helperText={errors.numberOfGuests?.message}
                    slotProps={{ htmlInput: { min: 1, max: 10 } }}
                    fullWidth
                  />
                )}

                <Input
                  {...register("wishes")}
                  label="Gửi lời chúc đến dâu rể"
                  multiline
                  rows={3}
                  error={Boolean(errors.wishes)}
                  helperText={errors.wishes?.message}
                  fullWidth
                  placeholder="Chúc hai bạn trăm năm hạnh phúc, vẹn tròn viên mãn..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: `${borderRadius.md}px`,
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.base,
                  }}
                >
                  Gửi Xác Nhận
                </Button>
              </StackCol>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
