import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { invitationService } from "@/features/invitation/services/invitation.service";
import { PublicInvitationView } from "@/features/invitation/components/public-invitation-view.component";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Tạo dynamic metadata cho SEO và OpenGraph khi chia sẻ Facebook/Zalo
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const invitation = await invitationService.getPublicInvitationBySlug(slug);

  if (!invitation) {
    return {
      title: "Thiệp mời không tồn tại | InviteMe",
      description: "Không tìm thấy thông tin thiệp mời bạn đang tìm kiếm.",
      robots: { index: false, follow: false },
    };
  }

  const shareUrl = `${siteConfig.url}/i/${slug}`;

  return {
    title: invitation.title,
    description: invitation.description,
    alternates: {
      canonical: shareUrl,
    },
    openGraph: {
      title: invitation.title,
      description: invitation.description,
      url: shareUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: invitation.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: invitation.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: invitation.title,
      description: invitation.description,
      images: [invitation.ogImage || siteConfig.ogImage],
    },
  };
}

// Server Component hiển thị thiệp mời công khai
export default async function PublicInvitationPage({ params }: PageProps) {
  const { slug } = await params;
  const invitation = await invitationService.getPublicInvitationBySlug(slug);

  if (!invitation) {
    notFound();
  }

  return <PublicInvitationView invitation={invitation} />;
}
