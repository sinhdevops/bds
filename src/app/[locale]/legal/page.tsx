import type { Metadata } from "next";
import InfoPageLayout from "@/components/page/info/InfoPageLayout";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "FAQ & Pháp Lý Dự Án Căn Hộ Sun Group Đà Nẵng";
const description =
  "Giải đáp câu hỏi về pháp lý, sổ hồng, quy trình đặt cọc, thanh toán và tư vấn mua căn hộ Sun Group tại Đà Nẵng.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.legal,
  keywords: [
    "pháp lý căn hộ Sun Group Đà Nẵng",
    "sổ hồng căn hộ Đà Nẵng",
    "quy trình đặt cọc căn hộ",
    "FAQ mua căn hộ Đà Nẵng",
  ],
});

const FAQS = [
  {
    q: "Các dự án có pháp lý đầy đủ không?",
    a: "Trước khi tư vấn giữ chỗ hoặc đặt cọc, đội ngũ sẽ cung cấp thông tin pháp lý theo từng dự án: quy hoạch, điều kiện bán hàng, hồ sơ chủ đầu tư và các tài liệu liên quan nếu khách hàng yêu cầu.",
  },
  {
    q: "Khách ở xa có thể mua và làm việc online không?",
    a: "Có. Khách hàng có thể nhận tư vấn online, xem giỏ hàng, chọn căn, đặt lịch xem nhà thực tế hoặc ủy quyền theo quy trình được hướng dẫn riêng.",
  },
  {
    q: "Khi nào cần đặt cọc?",
    a: "Chỉ nên đặt cọc sau khi đã xác nhận mã căn, tầng, hướng view, giá bán, chính sách thanh toán và điều kiện hoàn hoặc khấu trừ cọc nếu có.",
  },
  {
    q: "Có hỗ trợ vay ngân hàng không?",
    a: "Tùy dự án và thời điểm mở bán, khách hàng có thể được tư vấn phương án vay, tỷ lệ vay, hồ sơ cần chuẩn bị và thời gian xét duyệt.",
  },
  {
    q: "Thông tin trên website có phải giá cuối cùng không?",
    a: "Không. Giá trên website là thông tin tham khảo. Bảng giá chính xác phụ thuộc mã căn, tầng, view, chính sách hiện hành và tình trạng giỏ hàng tại thời điểm tư vấn.",
  },
];

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.legal)}/#webpage`,
    url: absoluteUrl(ROUTES.legal),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Pháp lý", url: absoluteUrl(ROUTES.legal) },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  },
];

export default function LegalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <InfoPageLayout
        active="faq"
        eyebrow="FAQ"
        title="Câu hỏi thường gặp trước khi mua căn hộ Đà Nẵng"
        description="Tập hợp các câu hỏi phổ biến về pháp lý, thanh toán, đặt cọc và quy trình làm việc để khách hàng kiểm tra nhanh trước khi liên hệ tư vấn."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {FAQS.map((item, index) => (
              <details
                key={item.q}
                className="group rounded-md bg-white p-6 shadow-[0_8px_26px_rgba(10,18,28,0.06)] ring-1 ring-black/5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-[#111111]">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F1EB] text-[#9C7B5D] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm font-medium leading-[1.8] text-[#666666]">{item.a}</p>
              </details>
            ))}
          </div>

          <aside className="rounded-md bg-white p-7 shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5">
            <p className="label-small text-[#9C7B5D]">Cần kiểm tra hồ sơ?</p>
            <h2 className="mt-3 font-serif text-3xl font-normal text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
              Nhận checklist trước khi đặt cọc
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-[#666666]">
              Chúng tôi có thể gửi danh sách tài liệu cần kiểm tra theo từng dự án và từng giai đoạn giao dịch.
            </p>
            <a
              href="tel:0352787777"
              className="mt-6 inline-flex w-full justify-center rounded-[3px] bg-[#C6A77D] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-[#071522]"
            >
              Gọi tư vấn pháp lý
            </a>
          </aside>
        </div>
      </InfoPageLayout>
    </>
  );
}

