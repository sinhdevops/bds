import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, HOTLINE_DISPLAY, OFFICE_ADDRESS, TAX_CODE } from "@/lib/contact";

export default function ComplianceDisclaimer() {
  return (
    <section className="border-t border-[#E5E0D8] bg-[#F8F5F0] px-6 py-5 text-[#555555] lg:px-12">
      <div className="mx-auto max-w-[1400px] text-xs font-medium leading-relaxed">
        <p>
          BĐS Đà Nẵng là kênh thông tin và tư vấn phân phối bất động sản thuộc {COMPANY_LEGAL_NAME}.
          Website này không phải website chính thức của bất kỳ chủ đầu tư hay thương hiệu dự án nào.
          Tên dự án, thương hiệu và hình ảnh nếu được nhắc đến chỉ nhằm mục đích tham khảo, so sánh
          và tư vấn theo nhu cầu của khách hàng.
        </p>
        <p className="mt-2">
          Thông tin giá bán, giỏ hàng, chính sách, pháp lý và tiến độ có thể thay đổi theo thời
          điểm. Khách hàng nên kiểm tra tài liệu chính thức trước khi đặt cọc hoặc giao dịch. Liên
          hệ: {HOTLINE_DISPLAY} - {CONTACT_EMAIL} - {OFFICE_ADDRESS}. MST: {TAX_CODE}.
        </p>
      </div>
    </section>
  );
}
