import type { Metadata } from "next";
import InfoPageLayout from "@/components/page/info/InfoPageLayout";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Chính Sách Bán Hàng & Ưu Đãi Dự Án Căn Hộ Đà Nẵng";
const description =
  "Tổng hợp chính sách bán hàng, ưu đãi, tiến độ thanh toán và hỗ trợ vay cho khách hàng quan tâm các dự án căn hộ tại Đà Nẵng.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.salesPolicy,
  keywords: [
    "chính sách bán hàng căn hộ Đà Nẵng",
    "ưu đãi căn hộ Đà Nẵng",
    "tiến độ thanh toán căn hộ Đà Nẵng",
    "hỗ trợ vay mua căn hộ",
  ],
});

const BENEFITS = [
  ["Chiết khấu", "Theo từng thời điểm mở bán và phương án thanh toán."],
  ["Vay ngân hàng", "Hỗ trợ tư vấn hồ sơ vay, tỷ lệ vay và thời gian ân hạn theo chính sách dự án."],
  ["Giữ chỗ", "Hướng dẫn quy trình giữ chỗ, đặt cọc, ký thỏa thuận và ký hợp đồng mua bán."],
];

const STEPS = [
  ["01", "Xác định nhu cầu", "Ngân sách, loại căn, view, mục tiêu ở hay đầu tư."],
  ["02", "Nhận bảng giá", "Cập nhật giỏ hàng, chính sách và các lựa chọn phù hợp."],
  ["03", "Giữ chỗ/đặt cọc", "Kiểm tra căn, mã căn, tầng, hướng view và điều kiện hoàn cọc nếu có."],
  ["04", "Ký hợp đồng", "Rà soát lịch thanh toán, quyền lợi, phụ lục và hồ sơ pháp lý."],
];

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.salesPolicy)}/#webpage`,
    url: absoluteUrl(ROUTES.salesPolicy),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Chính sách bán hàng", url: absoluteUrl(ROUTES.salesPolicy) },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Quy trình mua căn hộ Đà Nẵng",
    description: "Các bước làm việc với đội ngũ tư vấn trước khi giữ chỗ, đặt cọc và ký hợp đồng.",
    step: STEPS.map(([, name, text], index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text,
    })),
  },
];

export default function SalesPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <InfoPageLayout
        active="policy"
        eyebrow="Chính sách"
        title="Chính sách bán hàng rõ ràng trước khi xuống tiền"
        description="Trang này tóm tắt những điểm khách hàng cần nắm: ưu đãi, quy trình thanh toán, hỗ trợ vay và các bước làm việc với đội ngũ tư vấn."
      >
        <div className="space-y-10">
          <div className="grid gap-5 md:grid-cols-3">
            {BENEFITS.map(([benefitTitle, desc]) => (
              <div key={benefitTitle} className="rounded-md bg-white p-6 shadow-[0_8px_26px_rgba(10,18,28,0.06)] ring-1 ring-black/5">
                <p className="label-small text-[#9C7B5D]">{benefitTitle}</p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#666666]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-md bg-white p-7 shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5">
            <p className="label-small text-[#9C7B5D]">Quy trình đề xuất</p>
            <h2 className="mt-3 font-serif text-3xl font-normal text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              Từ nhu cầu đến hợp đồng
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {STEPS.map(([num, stepTitle, desc]) => (
                <div key={num} className="border-l border-[#E5E0D8] pl-5">
                  <span className="font-serif text-3xl text-[#C6A77D]" style={{ fontFamily: "var(--font-serif)" }}>
                    {num}
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-[#111111]">{stepTitle}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#666666]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-[#071522] p-7 text-white">
            <p className="label-small text-[#C6A77D]">Lưu ý</p>
            <p className="mt-3 text-sm font-medium leading-[1.8] text-white/70">
              Chính sách bán hàng có thể thay đổi theo từng thời điểm, từng dự án và từng mã căn. Khách hàng nên nhận bảng giá mới nhất trước khi quyết định giữ chỗ hoặc đặt cọc.
            </p>
          </div>
        </div>
      </InfoPageLayout>
    </>
  );
}
