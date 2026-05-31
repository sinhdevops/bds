"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ComplianceDisclaimerBox, { FORM_DISCLOSURE_TEXT } from "@/components/shared/ComplianceDisclaimerBox";
import { HOTLINE_DISPLAY } from "@/lib/contact";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interest: "Nhan thong tin du an",
          channel: "Website",
          source: typeof window !== "undefined" ? window.location.href : "Trang chu",
          message: "Dang ky nhan thong tin tu CTA cuoi trang chu",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit lead");
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "" });
    } catch {
      setErrorMessage("Chua gui duoc thong tin. Vui long thu lai hoac goi hotline.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#111111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72]/20 to-transparent" />

      <div className="grid lg:grid-cols-[1fr_1.15fr] min-h-[420px]">
        {/* LEFT — Building image + text overlay */}
        <motion.div
          className="relative hidden lg:block overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&fit=crop"
            alt="Sở hữu căn hộ cao cấp bên bờ Sông Hàn"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[#B89B72]/6 mix-blend-multiply" />

          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-gold">
                Nhận Thông Tin Dự Án
              </span>
            </div>
            <h2
              className="font-serif text-white font-light leading-[1.08] mb-5"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.75rem)" }}
            >
              Nhận thông tin dự án phù hợp
              <br />
              <em className="text-gold">bên bờ Sông Hàn</em>
            </h2>
            <p className="text-white/55 text-sm font-medium leading-[1.8] max-w-xs mb-8">
              Đăng ký để nhận bảng giá và chính sách tham khảo tại thời điểm tư vấn.
            </p>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#B89B72]/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#B89B72"
                    strokeWidth="1.3"
                    className="w-4 h-4"
                  >
                    <path d="M15.9 12.9l-2.3.3c-.5.1-1 .3-1.3.8-.2.4-.5 1.5-3.8-1.8C5.2 8.9 6.3 8.6 6.7 8.4c.5-.3.7-.8.8-1.3l.3-2.3c.1-.5-.1-1-.4-1.4L6.2 2.3C5.8 1.8 5 1.6 4.4 2L2.6 3.3C2 3.7 1.7 4.5 1.9 5.2c.7 3.5 2.9 7 6 10.1s6.6 5.3 10.1 6c.7.1 1.5-.1 1.9-.7l1.3-1.8c.4-.6.2-1.4-.3-1.8l-1.1-1.2c-.4-.3-.9-.5-1.4-.4z" />
                  </svg>
                </div>
                <div>
                  <span
                    className="label-small text-white/30 block"
                    style={{ fontSize: "0.58rem" }}
                  >
                    Tư vấn theo lịch hẹn
                  </span>
                  <span className="text-gold text-lg">{HOTLINE_DISPLAY}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#B89B72]/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#B89B72"
                    strokeWidth="1.3"
                    className="w-4 h-4"
                  >
                    <path d="M10 2l2.4 5.5H18l-4.6 3.8 1.8 5.7L10 14l-5.2 3 1.8-5.7L2 7.5h5.6L10 2z" />
                  </svg>
                </div>
                <div>
                  <span
                    className="label-small text-white/30 block"
                    style={{ fontSize: "0.58rem" }}
                  >
                    Thông tin chính xác
                  </span>
                  <span className="text-gold text-lg">Rõ ràng</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          className="flex items-center justify-center py-12 px-8 lg:px-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="w-full max-w-md">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-12"
              >
                <div className="w-14 h-14 rounded-full border border-[#B89B72]/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#B89B72"
                    strokeWidth="1.4"
                    className="w-6 h-6"
                  >
                    <path d="M3 10l5 5L17 5" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-serif text-white text-2xl font-light mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    Chúng tôi đã nhận được yêu cầu và sẽ liên hệ trong vòng 24
                    giờ.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <ComplianceDisclaimerBox variant="form" />
                {/* Mobile header */}
                <div className="lg:hidden mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-[#B89B72]" />
                    <span className="label-small text-gold">
                      Nhận Thông Tin Dự Án
                    </span>
                  </div>
                  <h2
                    className="font-serif text-white text-2xl font-light"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Nhận thông tin dự án phù hợp
                    <br />
                    <em className="text-gold">bên bờ Sông Hàn</em>
                  </h2>
                </div>

                {[
                  {
                    key: "name",
                    label: "Họ và tên",
                    placeholder: "Nguyễn Văn A",
                    type: "text",
                  },
                  {
                    key: "phone",
                    label: "Số điện thoại",
                    placeholder: HOTLINE_DISPLAY,
                    type: "tel",
                  },
                  {
                    key: "email",
                    label: "Email không bắt buộc",
                    placeholder: "email@example.com",
                    type: "email",
                  },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-2">
                    <label className="label-small text-white/35">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [field.key]: e.target.value })
                      }
                      placeholder={field.placeholder}
                      required={field.key !== "email"}
                    className="w-full rounded-[3px] px-4 py-3.5 bg-white/4 border border-white/10 text-white text-sm font-medium placeholder:text-white/20 focus:outline-none focus:border-[#B89B72]/60 transition-all duration-300"
                    />
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full rounded-[3px] py-4 bg-[#C6A77D] text-white label-small font-bold hover:bg-white hover:text-[#0B2545] transition-colors duration-300 mt-1 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Đang gửi..." : "Nhận Thông Tin Ngay"}
                </motion.button>

                <label className="flex items-start gap-3 rounded-[4px] border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-xs font-medium leading-relaxed text-white/34">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 accent-[#C6A77D]"
                  />
                  <span>
                    {FORM_DISCLOSURE_TEXT} Tôi đồng ý để BĐS Đà Nẵng/SRT Miền Trung sử dụng họ tên, số điện thoại và email nhằm liên hệ tư vấn theo{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white/50 hover:text-[#C6A77D] transition-colors"
                    >
                      Chính sách bảo mật
                    </a>
                    .
                  </span>
                </label>

                {errorMessage ? (
                  <p className="text-center text-xs font-semibold text-red-200">{errorMessage}</p>
                ) : null}

                <p className="text-center text-xs text-white/20 font-light">
                  Thông tin chỉ dùng cho mục đích tư vấn theo yêu cầu đã gửi.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

