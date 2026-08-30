import { envConfig } from "@/config/env.config";
import { rsvpApi } from "@/services/api";
import type {
  InvitationData,
  RsvpSubmissionPayload,
} from "../types/invitation.type";

const API_BASE_URL = envConfig.apiUrl;

// Dữ liệu mẫu phục vụ phát triển & hiển thị khi chưa nối API Backend
const MOCK_INVITATIONS: Record<string, InvitationData> = {
  "minh-linh": {
    id: "inv-001",
    slug: "minh-linh",
    title: "Lễ Thành Hôn: Minh Tuấn & Khánh Linh",
    description:
      "Trân trọng kính mời quý khách đến tham dự lễ thành hôn và chung vui cùng gia đình chúng tôi vào ngày 28/10/2026.",
    eventType: "wedding",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    ogImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    eventDate: "2026-10-28T11:30:00.000Z",
    eventTime: "11:30 SA",
    couple: {
      groom: {
        fullName: "Nguyễn Minh Tuấn",
        shortName: "Minh Tuấn",
        role: "groom",
        parentsName: "Ông Nguyễn Văn Hùng & Bà Trần Thị Mai",
        photoUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        bio: "Một chàng trai đam mê công nghệ và luôn muốn mang đến nụ cười cho người mình yêu.",
      },
      bride: {
        fullName: "Phạm Khánh Linh",
        shortName: "Khánh Linh",
        role: "bride",
        parentsName: "Ông Phạm Văn Đức & Bà Lê Thị Lan",
        photoUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        bio: "Cô gái yêu hội họa, thích sự lãng mạn và luôn trân trọng từng khoảnh khắc giản đơn.",
      },
      loveStoryTitle: "Hành Trình Yêu Thương",
      loveStory:
        "Chúng mình gặp nhau vào một ngày thu Hà Nội, từ những câu chuyện vu vơ bên quán cà phê nhỏ, tình yêu cứ thế lớn dần qua năm tháng. Sau 6 năm gắn bó, chúng mình đã sẵn sàng cho chương mới tươi đẹp của cuộc đời.",
    },
    location: {
      venueName: "Trung Tâm Tiệc Cưới White Palace",
      hallName: "Sảnh Grand Ballroom - Tầng 2",
      address: "194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận",
      city: "TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=White+Palace+Hoang+Van+Thu",
      lat: 10.7989,
      lng: 106.6713,
    },
    schedule: [
      {
        id: "sch-1",
        time: "10:30",
        title: "Đón tiếp khách quý",
        description: "Chụp ảnh lưu niệm tại Backdrop sảnh chính và thưởng thức Welcome Drink.",
      },
      {
        id: "sch-2",
        time: "11:30",
        title: "Lễ Thành Hôn",
        description: "Nghi thức trao nhẫn cưới, cắt bánh và rót rượu champagne hạnh phúc.",
      },
      {
        id: "sch-3",
        time: "12:00",
        title: "Khai tiệc mừng",
        description: "Thưởng thức tiệc ẩm thực phong phú cùng các tiết mục âm nhạc đặc sắc.",
      },
      {
        id: "sch-4",
        time: "13:30",
        title: "Lời cảm ơn & Tiễn khách",
        description: "Cô dâu chú rể gửi lời tri ân và trao quà lưu niệm tới quý khách.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
    ],
    bankAccounts: [
      {
        id: "bank-1",
        ownerName: "NGUYEN MINH TUAN",
        bankName: "Techcombank",
        accountNumber: "19036868686888",
        branch: "Chi nhánh Tân Bình",
        note: "Mừng cưới Chú rể Minh Tuấn",
      },
      {
        id: "bank-2",
        ownerName: "PHAM KHANH LINH",
        bankName: "Vietcombank",
        accountNumber: "998877665544",
        branch: "Chi nhánh TP.HCM",
        note: "Mừng cưới Cô dâu Khánh Linh",
      },
    ],
    themeConfig: {
      fontIds: ["playfair", "greatVibes", "montserrat"],
      primaryColor: "#B78628", // Luxury Gold
      secondaryColor: "#E8C872",
      accentColor: "#6B1D2F", // Romantic Wine Red
      backgroundColor: "#FAF8F5",
      musicUrl:
        "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-acoustic-guitar-112191.mp3",
      autoPlayMusic: false,
    },
    rsvpEnabled: true,
    isPublished: true,
    createdAt: "2026-08-20T00:00:00.000Z",
    updatedAt: "2026-08-20T00:00:00.000Z",
  },
};

// Service xử lý dữ liệu thiệp mời
export const invitationService = {
  // Lấy dữ liệu thiệp mời công khai theo Slug trên Server Side (SSR)
  async getPublicInvitationBySlug(slug: string): Promise<InvitationData | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/invitations/public/${slug}`, {
        next: { revalidate: 30 }, // Cache 30s
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const json = await res.json();
        const data = json?.data !== undefined ? json.data : json;
        if (data) {
          return {
            ...data,
            couple: data.coupleData || data.couple,
            location: data.locationData || data.location,
            schedule: data.scheduleData || data.schedule || [],
            gallery: data.galleryData || data.gallery || [],
            bankAccounts: data.bankAccountsData || data.bankAccounts || [],
          } as InvitationData;
        }
      }

      // Trả về Mock Data nếu là slug test "minh-linh"
      if (MOCK_INVITATIONS[slug]) {
        return MOCK_INVITATIONS[slug];
      }

      return null;
    } catch (error) {
      console.warn(`[invitationService.getPublicInvitationBySlug] Failed to fetch from API, checking fallback:`, error);
      return MOCK_INVITATIONS[slug] || null;
    }
  },

  // Gửi phản hồi RSVP từ khách mời
  async submitRsvp(payload: RsvpSubmissionPayload): Promise<{ success: boolean; message: string }> {
    try {
      const res = await rsvpApi.submitRsvp(payload);
      return { success: true, message: res.message || "Gửi xác nhận tham dự thành công!" };
    } catch (error) {
      console.error(`[invitationService.submitRsvp] Error:`, error);
      throw error;
    }
  },
};
