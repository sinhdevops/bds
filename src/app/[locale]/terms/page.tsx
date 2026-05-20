import type { Metadata } from "next";
import { ROUTES, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Điều Khoản Sử Dụng - BĐS Đà Nẵng",
  description:
    "Các điều khoản và điều kiện áp dụng cho người dùng truy cập, tra cứu thông tin bất động sản và đăng ký tư vấn trên website BĐS Đà Nẵng.",
  path: ROUTES.terms,
});

export default function TermsPage() {
  return (
    <>
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

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            2. Quyền sở hữu trí tuệ
          </h2>
          <p>
            Nội dung trên website bao gồm văn bản, thiết kế, hình ảnh dự án và dữ liệu tham khảo thuộc quyền sở hữu của BĐS Đà Nẵng hoặc các đối tác liên quan. Mọi hành vi sao chép, phân phối hoặc tái xuất bản cần có sự đồng ý phù hợp.
          </p>

          <h2 className="font-serif text-2xl text-[#0B2545] font-semibold mt-4" style={{ fontFamily: "var(--font-serif)" }}>
            3. Giới hạn trách nhiệm
          </h2>
          <p>
            Thông tin về căn hộ, giá bán và chính sách bán hàng chỉ mang tính tham khảo tại thời điểm công bố. Bảng giá và chính sách cuối cùng phụ thuộc vào chủ đầu tư, giỏ hàng và thời điểm tư vấn.
          </p>
        </div>
      </section>
    </>
  );
}
