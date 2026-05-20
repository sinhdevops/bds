import type { Metadata } from "next";
import ContactHero from "@/components/page/contact/ContactHero";
import ContactFormSection from "@/components/page/contact/ContactFormSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Liên Hệ Tư Vấn Mua Căn Hộ Đà Nẵng - Hotline 0325 610016",
  description:
    "Liên hệ SRT Miền Trung để nhận tư vấn mua căn hộ Sun Group tại Đà Nẵng. Hỗ trợ xem nhà online, nhận bảng giá, chính sách ưu đãi và lịch xem nhà. Hotline: 0325 610016.",
  keywords: [
    "liên hệ mua căn hộ Đà Nẵng",
    "tư vấn bất động sản Đà Nẵng từ Hà Nội",
    "hotline SRT Miền Trung",
    "đăng ký nhận bảng giá Sun Symphony Residence",
    "tư vấn Sun Group Đà Nẵng",
    "xem nhà online Đà Nẵng",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Liên Hệ Tư Vấn Mua Căn Hộ Đà Nẵng - SRT Miền Trung",
    description:
      "Nhận tư vấn 1-1 về căn hộ Sun Group Đà Nẵng. Hỗ trợ xem nhà online, tư vấn tài chính và cập nhật chính sách bán hàng.",
    url: pageUrl,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
