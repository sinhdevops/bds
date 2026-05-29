import { CONTACT_EMAIL, HOTLINE_DISPLAY, OFFICE_ADDRESS } from "@/lib/contact";

export default function ComplianceDisclaimer() {
  return (
    <section className="border-t border-[#E5E0D8] bg-[#F8F5F0] px-6 py-5 text-[#555555] lg:px-12">
      <div className="mx-auto max-w-[1400px] text-xs font-medium leading-relaxed">
        <p>
          BĐS Đà Nẵng là kênh thông tin và tư vấn bất động sản độc lập. Website này không phải
          website chính thức của Sun Group, Capital Square hay bất kỳ chủ đầu tư nào, trừ khi có
          văn bản ủy quyền được công bố riêng. Tên dự án, thương hiệu và hình ảnh được sử dụng
          nhằm mục đích tham khảo, so sánh và tư vấn theo nhu cầu của khách hàng.
        </p>
        <p className="mt-2">
          Thông tin giá bán, giỏ hàng, chính sách, pháp lý và tiến độ có thể thay đổi theo thời
          điểm. Khách hàng nên kiểm tra tài liệu chính thức trước khi đặt cọc hoặc giao dịch. Liên
          hệ: {HOTLINE_DISPLAY} - {CONTACT_EMAIL} - {OFFICE_ADDRESS}.
        </p>
      </div>
    </section>
  );
}
