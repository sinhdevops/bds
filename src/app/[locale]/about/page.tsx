import type { Metadata } from "next";
import InfoPageLayout from "@/components/page/info/InfoPageLayout";
import { COMPANY_LEGAL_NAME, HOTLINE_DISPLAY, HOTLINE_TEL } from "@/lib/contact";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Về BĐS Đà Nẵng - Tư Vấn Căn Hộ Cao Cấp Đà Nẵng";
const description =
  "BĐS Đà Nẵng cập nhật và tư vấn các dự án bất động sản cao cấp tại Đà Nẵng với thông tin minh bạch, pháp lý rõ ràng và hỗ trợ khách hàng từ xa.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: ROUTES.about,
  keywords: [
    "BĐS Đà Nẵng",
    "phân phối bất động sản Đà Nẵng",
    "môi giới bất động sản Đà Nẵng",
    "tư vấn căn hộ Đà Nẵng",
  ],
});

const VALUES = [
  {
    title: "Minh bạch thông tin",
    desc: "Bảng giá, chính sách, tiến độ và pháp lý được kiểm tra trước khi tư vấn để khách hàng có cơ sở ra quyết định.",
  },
  {
    title: "Tư vấn theo nhu cầu",
    desc: "Không đẩy một sản phẩm đơn lẻ. Chúng tôi lọc theo ngân sách, mục tiêu ở hay đầu tư, thời điểm nhận nhà và khẩu vị tài chính/rủi ro.",
  },
  {
    title: "Đồng hành sau giao dịch",
    desc: "Hỗ trợ thủ tục, cập nhật tiến độ, kết nối khai thác thuê và quản lý tài sản khi khách hàng cần.",
  },
];

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.about)}/#webpage`,
    url: absoluteUrl(ROUTES.about),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Về chúng tôi", url: absoluteUrl(ROUTES.about) },
  ]),
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <InfoPageLayout
        active="about"
        eyebrow="Về tôi"
        title="Đồng hành chọn đúng bất động sản Đà Nẵng"
        description="BĐS Đà Nẵng là kênh tư vấn và phân phối bất động sản tại Đà Nẵng, hỗ trợ khách hàng kiểm tra thông tin, so sánh phương án và làm việc theo nhu cầu thực tế."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <div className="rounded-md bg-white p-7 shadow-[0_8px_26px_rgba(10,18,28,0.07)] ring-1 ring-black/5">
              <p className="label-small text-[#9C7B5D]">Cách làm việc</p>
              <h2 className="mt-3 font-serif text-3xl font-normal text-[#111111]" style={{ fontFamily: "var(--font-serif)" }}>
                Tư vấn dựa trên dữ liệu, không dựa trên cảm tính
              </h2>
              <p className="mt-4 text-sm font-medium leading-[1.85] text-[#666666]">
                Mỗi khách hàng có một mục tiêu khác nhau: mua để ở, giữ tài sản hoặc cân nhắc khai thác cho thuê. Vì vậy quy trình tư vấn bắt đầu bằng việc xác định nhu cầu, sau đó so sánh dự án theo vị trí, giá, pháp lý, tiến độ và khả năng thanh khoản.
              </p>
              <p className="mt-4 rounded-[4px] bg-[#F8F5F0] p-4 text-sm font-semibold leading-relaxed text-[#555555]">
                BĐS Đà Nẵng là website tư vấn thông tin bất động sản tại Đà Nẵng, được vận hành bởi
                nhân viên kinh doanh thuộc {COMPANY_LEGAL_NAME}. Vai trò của website là tổng hợp
                thông tin, hỗ trợ khách hàng so sánh dự án, nhận bảng giá tham khảo và kết nối tư vấn.
                Website không phải trang của Sun Group hoặc bất kỳ chủ đầu tư nào.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {VALUES.map((item, index) => (
                <div key={item.title} className="rounded-md bg-white p-6 ring-1 ring-black/5">
                  <span className="font-serif text-3xl text-[#C6A77D]" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-[#111111]">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#666666]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-md bg-[#071522] p-7 text-white">
            <p className="label-small text-[#C6A77D]">Liên hệ nhanh</p>
            <p className="mt-4 font-serif text-3xl font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              Cần lọc dự án phù hợp?
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/62">
              Gửi ngân sách và mục tiêu, đội ngũ tư vấn sẽ đề xuất shortlist rõ ràng thay vì để bạn tự đọc quá nhiều thông tin rời rạc.
            </p>
            <a
              href={HOTLINE_TEL}
              className="mt-6 inline-flex w-full justify-center rounded-[3px] bg-[#C6A77D] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-white hover:text-[#071522]"
            >
              Gọi {HOTLINE_DISPLAY}
            </a>
          </aside>
        </div>
      </InfoPageLayout>
    </>
  );
}

