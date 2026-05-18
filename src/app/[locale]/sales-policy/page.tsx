import type { Metadata } from "next";
import SalesPolicyContent from "@/components/page/chinh-sach-ban-hang/SalesPolicyContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/chinh-sach-ban-hang`;

export const metadata: Metadata = {
  title: "Chính Sách Bán Hàng & Ưu Đãi Sun Symphony Residence 2025",
  description:
    "Chính sách bán hàng Sun Symphony Residence mới nhất 2025: chiết khấu thanh toán sớm lên đến 10%, hỗ trợ vay 70% giá trị căn hộ, ân hạn lãi suất 24 tháng. Ưu đãi đặc biệt cho khách Hà Nội.",
  keywords: [
    "chính sách bán hàng Sun Symphony Residence",
    "chiết khấu căn hộ Đà Nẵng",
    "vay mua căn hộ Đà Nẵng",
    "tiến độ thanh toán Sun Symphony",
    "ưu đãi mua căn hộ Sun Group 2025",
    "điều kiện mua căn hộ Đà Nẵng từ Hà Nội",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Chính Sách Bán Hàng & Ưu Đãi Sun Symphony Residence 2025",
    description:
      "Chiết khấu đến 10%, hỗ trợ vay 70%, ân hạn lãi 24 tháng. Ưu đãi đặc biệt cho khách Hà Nội mua căn hộ Sun Symphony Residence Đà Nẵng.",
    url: pageUrl,
    type: "website",
  },
};

export default function SalesPolicyPage() {
  return (
    <>
      <section className="relative w-full h-[30vh] min-h-[220px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545] z-0" />
        <div className="relative text-center z-10 pt-16">
          <h1 className="font-serif text-white font-light text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Chính Sách Bán Hàng
          </h1>
        </div>
      </section>
      <SalesPolicyContent />
    </>
  );
}
