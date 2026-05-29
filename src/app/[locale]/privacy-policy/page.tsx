import type { Metadata } from "next";
import { ROUTES, absoluteUrl, breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

const title = "Chính Sách Bảo Mật - BĐS Đà Nẵng";
const description =
  "Chính sách bảo mật thông tin khách hàng khi đăng ký nhận bảng giá, tư vấn dự án và cập nhật chính sách bán hàng tại BĐS Đà Nẵng.";

export const metadata: Metadata = createMetadata({
  title: "Chính Sách Bảo Mật - BĐS Đà Nẵng",
  description:
    "Chính sách bảo mật thông tin khách hàng khi đăng ký nhận bảng giá, tư vấn dự án và cập nhật chính sách bán hàng tại BĐS Đà Nẵng.",
  path: ROUTES.privacy,
});

const schemas = [
  webPageSchema({
    id: `${absoluteUrl(ROUTES.privacy)}/#webpage`,
    url: absoluteUrl(ROUTES.privacy),
    name: title,
    description,
  }),
  breadcrumbSchema([
    { name: "Trang chủ", url: absoluteUrl(ROUTES.home) },
    { name: "Chính sách bảo mật", url: absoluteUrl(ROUTES.privacy) },
  ]),
];

export default function PrivacyPage() {
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
            Chính Sách Bảo Mật
          </h1>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-16 lg:py-24 text-[#555555]">
        <div className="max-w-[800px] mx-auto px-6 font-light leading-relaxed text-sm md:text-base flex flex-col gap-6">
          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            1. Mục đích thu thập dữ liệu
          </h2>
          <p>
            BĐS Đà Nẵng thu thập thông tin khách hàng thông qua các form đăng ký nhằm cung cấp tài liệu dự án, liên hệ tư vấn trực tiếp và cập nhật chính sách bán hàng mới.
          </p>
          <p>
            Dữ liệu có thể bao gồm họ tên, số điện thoại, email, dự án quan tâm, nhu cầu tư vấn,
            nội dung ghi chú và URL trang mà khách hàng gửi biểu mẫu.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Cam kết bảo mật thông tin
          </h2>
          <p>
            Chúng tôi cam kết bảo mật dữ liệu cá nhân của quý khách như họ tên, số điện thoại và email; không chia sẻ cho bên thứ ba khi chưa có sự đồng ý, trừ trường hợp theo yêu cầu của cơ quan có thẩm quyền.
          </p>
          <p>
            Website có thể sử dụng các dịch vụ hạ tầng và đo lường như Supabase, Google Ads hoặc
            Google Tag để lưu biểu mẫu, đo hiệu quả quảng cáo và cải thiện nội dung. Dữ liệu không
            được bán cho bên thứ ba.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Quyền của khách hàng
          </h2>
          <p>
            Quý khách có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa dữ liệu cá nhân đã đăng ký bằng cách liên hệ bộ phận chăm sóc khách hàng qua hotline 0352.787777.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            4. Thời gian lưu trữ và yêu cầu xoá dữ liệu
          </h2>
          <p>
            Thông tin được lưu trong thời gian cần thiết để tư vấn, chăm sóc khách hàng và đáp ứng
            nghĩa vụ pháp lý nếu có. Khách hàng có thể yêu cầu xoá dữ liệu qua hotline hoặc email
            được công bố trên website.
          </p>
        </div>
      </section>
    </>
  );
}

