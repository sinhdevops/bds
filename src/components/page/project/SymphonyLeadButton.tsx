"use client";

import { FiArrowRight } from "react-icons/fi";
import { openConsultationModal } from "@/components/shared/ConsultationModal";

type SymphonyLeadButtonProps = {
  label?: string;
  variant?: "gold" | "ghost";
  className?: string;
};

export default function SymphonyLeadButton({
  label = "Nhận bảng giá riêng",
  variant = "gold",
  className = "",
}: SymphonyLeadButtonProps) {
  const styles =
    variant === "gold"
      ? "bg-[#C8A46D] text-[#101820] hover:bg-white"
      : "border border-white/24 bg-white/6 text-white hover:border-[#C8A46D] hover:bg-[#C8A46D] hover:text-[#101820]";

  return (
    <button
      type="button"
      onClick={openConsultationModal}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.13em] transition-colors duration-300 ${styles} ${className}`}
    >
      {label}
      <FiArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </button>
  );
}
