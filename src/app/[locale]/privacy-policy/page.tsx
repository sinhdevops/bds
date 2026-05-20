import type { Metadata } from "next";
import { ROUTES, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Chính Sách Bảo Mật - BĐS Đà Nẵng",
  description:
    "Chính sách bảo mật thông tin khách hàng khi đăng ký nhận bảng giá, tư vấn dự án và cập nhật chính sách bán hàng tại BĐS Đà Nẵng.",
  path: ROUTES.privacy,
});

export default function PrivacyPage() {
  return (
    <>
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

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Cam kết bảo mật thông tin
          </h2>
          <p>
            Chúng tôi cam kết bảo mật dữ liệu cá nhân của quý khách như họ tên, số điện thoại và email; không chia sẻ cho bên thứ ba khi chưa có sự đồng ý, trừ trường hợp theo yêu cầu của cơ quan có thẩm quyền.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Quyền của khách hàng
          </h2>
          <p>
            Quý khách có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa dữ liệu cá nhân đã đăng ký bằng cách liên hệ bộ phận chăm sóc khách hàng qua hotline 0325 610016.
          </p>
        </div>
      </section>
    </>
  );
}
