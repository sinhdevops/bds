import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, HOTLINE_DISPLAY, OFFICE_ADDRESS, TAX_CODE } from "@/lib/contact";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Điều Khoản Sử Dụng - BĐS Đà Nẵng";
const description =
  "Các điều khoản và điều kiện áp dụng cho người dùng truy cập, tra cứu thông tin bất động sản và đăng ký tư vấn trên website BĐS Đà Nẵng.";

export const metadata: Metadata = createMetadata({
  title: "Điều Khoản Sử Dụng - BĐS Đà Nẵng",
  description:
    "Các điều khoản và điều kiện áp dụng cho người dùng truy cập, tra cứu thông tin bất động sản và đăng ký tư vấn trên website BĐS Đà Nẵng.",
  path: ROUTES.terms,
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.terms)}/#webpage`,
    url: absoluteUrl(ROUTES.terms),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Điều khoản", url: absoluteUrl(ROUTES.terms) },
  ]),
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="relative w-full h-[30vh] min-h-[220px] overflow-hidden flex items-center justify-center bg-[#0B2545]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/40 via-[#0B2545]/60 to-[#0B2545] z-0" />
        <div className="relative text-center z-10 pt-16">
          <h1 className="font-serif text-white font-light text-3xl md:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
            Điều Khoản Sử Dụng
          </h1>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 lg:py-24 text-[#555555]">
        <div className="max-w-[800px] mx-auto px-6 font-light leading-relaxed text-sm md:text-base flex flex-col gap-6">
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Quy định chung
          </h2>
          <p>
            Chào mừng quý khách đến với cổng thông tin BĐS Đà Nẵng. Khi truy cập và sử dụng website, quý khách đồng ý tuân thủ các điều khoản được nêu tại trang này.
          </p>
          <p>
            BĐS Đà Nẵng là kênh tư vấn và phân phối bất động sản thuộc {COMPANY_LEGAL_NAME}, MST {TAX_CODE}.
            Địa chỉ liên hệ: {OFFICE_ADDRESS}. Hotline: {HOTLINE_DISPLAY}. Email: {CONTACT_EMAIL}.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Vai trò tư vấn và phạm vi thông tin
          </h2>
          <p>
            Website cung cấp thông tin tham khảo về thị trường, dự án, giỏ hàng, chính sách bán hàng
            và quy trình giao dịch bất động sản. Website không phải trang của bất kỳ chủ đầu tư
            hoặc thương hiệu dự án nào. Mọi thông tin trước khi đặt cọc, thanh toán hoặc ký hợp đồng cần
            được đối chiếu với tài liệu có thẩm quyền tại thời điểm giao dịch.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Quyền sở hữu trí tuệ
          </h2>
          <p>
            Nội dung trên website bao gồm văn bản, thiết kế, hình ảnh dự án và dữ liệu tham khảo thuộc
            quyền sở hữu của BĐS Đà Nẵng hoặc chủ sở hữu tương ứng. Tên thương hiệu, tên dự án,
            phối cảnh, logo và hình ảnh dự án nếu được nhắc đến thuộc quyền của chủ sở hữu tương ứng.
            Website chỉ sử dụng cho mục đích thông tin, tư vấn, tham khảo và không ngụ ý quan hệ sở hữu
            hoặc đại diện nếu quan hệ đó không được công bố rõ.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            4. Giới hạn trách nhiệm
          </h2>
          <p>
            Thông tin về căn hộ, giá bán, tiến độ thanh toán, hỗ trợ vay, ưu đãi và chính sách bán hàng
            chỉ mang tính tham khảo tại thời điểm công bố. Bảng giá và chính sách cuối cùng phụ thuộc vào
            chủ đầu tư, ngân hàng, tình trạng giỏ hàng và thời điểm tư vấn.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            5. Biểu mẫu đăng ký tư vấn
          </h2>
          <p>
            Khi gửi biểu mẫu, quý khách chủ động cung cấp họ tên, số điện thoại, email và nhu cầu tư vấn.
            Thông tin này chỉ được dùng để liên hệ, gửi thông tin dự án liên quan và chăm sóc yêu cầu của
            quý khách. Chi tiết được công bố tại{" "}
            <Link href="/privacy-policy" className="text-[#0B2545] underline font-medium">
              Chính sách bảo mật
            </Link>
            .
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            6. Đặt cọc và giao dịch
          </h2>
          <p>
            Website không yêu cầu khách hàng thanh toán trực tuyến trên trang. Trước mọi giao dịch, khách hàng
            nên kiểm tra pháp lý, mã căn, giá bán, chính sách thanh toán, điều kiện hoàn cọc và chủ thể nhận tiền
            trong tài liệu có thẩm quyền.
          </p>
        </div>
      </section>
    </>
  );
}
