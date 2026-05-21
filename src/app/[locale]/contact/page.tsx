import type { Metadata } from "next";
import ContactHero from "@/components/page/contact/ContactHero";
import ContactFormSection from "@/components/page/contact/ContactFormSection";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Liên Hệ Tư Vấn Mua Căn Hộ Đà Nẵng - Hotline 0702252678";
const description =
  "Liên hệ BĐS Đà Nẵng để nhận tư vấn mua căn hộ Sun Group tại Đà Nẵng. Hỗ trợ xem nhà online, nhận bảng giá, chính sách ưu đãi và lịch xem nhà.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.contact,
  keywords: [
    "liên hệ mua căn hộ Đà Nẵng",
    "hotline BĐS Đà Nẵng",
    "tư vấn Sun Group Đà Nẵng",
    "đăng ký nhận bảng giá Sun Symphony Residence",
    "xem nhà online Đà Nẵng",
  ],
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.contact)}/#webpage`,
    url: absoluteUrl(ROUTES.contact),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Liên hệ", url: absoluteUrl(ROUTES.contact) },
  ]),
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
