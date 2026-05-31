import { FiInfo } from "react-icons/fi";

type ComplianceDisclaimerBoxProps = {
  variant?: "compact" | "full" | "form";
  className?: string;
};

const DISCLAIMER_TEXT =
  "BĐS Đà Nẵng (bds-da-nang.com) là website tư vấn bất động sản được vận hành bởi nhân viên kinh doanh thuộc Công ty TNHH Thương mại và Đầu tư SRT Miền Trung, MST 0402225356. Website không phải trang chính thức của Sun Group, chủ đầu tư hoặc bất kỳ thương hiệu dự án nào. Thông tin giá bán, giỏ hàng, chính sách, pháp lý và tiến độ chỉ mang tính tham khảo, có thể thay đổi theo từng thời điểm và cần đối chiếu với tài liệu chính thức trước khi giao dịch.";

const variantClass = {
  compact:
    "gap-3 rounded-[8px] border-[#D9C7A3]/35 bg-[#FFF8EA]/95 px-4 py-3 text-xs text-[#4A3A24] shadow-[0_12px_30px_rgba(10,18,28,0.12)]",
  full:
    "gap-4 rounded-[10px] border-[#D9C7A3]/45 bg-[#FFF8EA] px-5 py-4 text-sm text-[#4A3A24] shadow-[0_16px_42px_rgba(10,18,28,0.10)]",
  form:
    "gap-3 rounded-[8px] border-white/12 bg-white/[0.07] px-4 py-3 text-xs text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
};

const iconClass = {
  compact: "mt-0.5 h-4 w-4 text-[#9C7B3D]",
  full: "mt-0.5 h-5 w-5 text-[#9C7B3D]",
  form: "mt-0.5 h-4 w-4 text-[#D4B278]",
};

export const FORM_DISCLOSURE_TEXT =
  "Bạn đang gửi thông tin cho BĐS Đà Nẵng/SRT Miền Trung, không phải Sun Group hoặc chủ đầu tư. Chuyên viên tư vấn sẽ liên hệ qua điện thoại/Zalo để hỗ trợ theo nhu cầu đã gửi. Website không yêu cầu thanh toán trực tuyến.";

export default function ComplianceDisclaimerBox({
  variant = "full",
  className = "",
}: ComplianceDisclaimerBoxProps) {
  return (
    <div className={`flex border leading-relaxed ${variantClass[variant]} ${className}`}>
      <FiInfo className={`shrink-0 ${iconClass[variant]}`} aria-hidden="true" />
      <p className="font-medium">{DISCLAIMER_TEXT}</p>
    </div>
  );
}
