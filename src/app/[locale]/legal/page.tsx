import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/phap-ly`;

export const metadata: Metadata = {
  title: "Pháp Lý Dự Án — Sổ Hồng Lâu Dài, Minh Bạch 100%",
  description:
    "Toàn bộ dự án Sun Group tại Đà Nẵng được phân phối bởi SRT Miền Trung đều có pháp lý đầy đủ: quy hoạch 1/500, giấy phép xây dựng, sổ hồng sở hữu lâu dài. An tâm đầu tư từ Hà Nội.",
  keywords: [
    "pháp lý căn hộ Đà Nẵng",
    "sổ hồng căn hộ Đà Nẵng",
    "pháp lý Sun Symphony Residence",
    "pháp lý Sun Ponte Residence",
    "quyền sở hữu lâu dài căn hộ Đà Nẵng",
    "đầu tư an toàn bất động sản Đà Nẵng",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Pháp Lý Dự Án Sun Group — Sổ Hồng Lâu Dài, An Tâm Đầu Tư",
    description:
      "Đầy đủ quy hoạch 1/500, giấy phép xây dựng, sổ hồng sở hữu lâu dài. Khách Hà Nội an tâm đầu tư căn hộ Đà Nẵng.",
    url: pageUrl,
    type: "website",
  },
};

export default function LegalPage() {
  return (
    <>
      <section className="relative w-full h-[30vh] min-h-[220px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545] z-0" />
        <div className="relative text-center z-10 pt-16">
          <h1 className="font-serif text-white font-light text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Pháp Lý Dự Án
          </h1>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 lg:py-24 text-[#555555]">
        <div className="max-w-[800px] mx-auto px-6 font-light leading-relaxed text-sm md:text-base flex flex-col gap-6">
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Quy hoạch 1/500 & Quyết định bàn giao đất
          </h2>
          <p>
            Tất cả các dự án căn hộ cao cấp bao gồm <strong>Sun Symphony Residence</strong> và <strong>Sun Ponte Residence</strong> đều được phê duyệt quy hoạch chi tiết xây dựng tỷ lệ 1/500 và sở hữu đầy đủ Quyết định bàn giao đất chính thức từ UBND Thành phố Đà Nẵng, bảo đảm nền tảng pháp lý tối cao.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Giấy phép xây dựng
          </h2>
          <p>
            Các công trình đã được cấp Giấy phép xây dựng hợp lệ từ Sở Xây dựng TP. Đà Nẵng, hoàn thành đầy đủ nghĩa vụ đóng thuế quyền sử dụng đất và đang triển khai thi công xây dựng móng cọc đúng tiến độ cam kết.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Quyền sở hữu lâu dài
          </h2>
          <p>
            Khách hàng sở hữu quốc tịch Việt Nam khi mua căn hộ tại dự án của Sun Group thông qua <strong>SRT Miền Trung</strong> sẽ được cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất (Sổ hồng) với thời hạn <strong>Sở hữu lâu dài</strong> (Permanent Ownership).
          </p>
        </div>
      </section>
    </>
  );
}
