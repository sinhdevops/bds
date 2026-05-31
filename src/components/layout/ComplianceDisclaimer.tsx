import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, HOTLINE_DISPLAY, OFFICE_ADDRESS, TAX_CODE } from "@/lib/contact";

export default function ComplianceDisclaimer() {
  return (
    <section className="border-t border-[#E5E0D8] bg-[#F8F5F0] px-6 py-5 text-[#555555] lg:px-12">
      <div className="mx-auto max-w-[1400px] text-xs font-medium leading-relaxed">
        <p>
          BĐS Đà Nẵng (bds-da-nang.com) là website tư vấn bất động sản được vận hành bởi nhân viên
          kinh doanh thuộc {COMPANY_LEGAL_NAME}, MST {TAX_CODE}. Website không phải trang của Sun Group,
          chủ đầu tư hoặc bất kỳ thương hiệu dự án nào.
        </p>
        <p className="mt-2">
          Thông tin giá bán, giỏ hàng, chính sách, pháp lý và tiến độ chỉ mang tính tham khảo, có thể
          thay đổi theo từng thời điểm và cần đối chiếu với tài liệu của chủ thể có thẩm quyền trước
          khi giao dịch. Liên hệ: {HOTLINE_DISPLAY} - {CONTACT_EMAIL} - {OFFICE_ADDRESS}.
        </p>
      </div>
    </section>
  );
}
