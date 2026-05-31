"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ProjectData } from "@/lib/projects";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, HOTLINE_DISPLAY, HOTLINE_TEL } from "@/lib/contact";
import ComplianceDisclaimerBox, { FORM_DISCLOSURE_TEXT } from "@/components/shared/ComplianceDisclaimerBox";

interface Props {
  project: ProjectData;
}

type FormState = {
  name: string;
  phone: string;
  aptType: string;
  note: string;
};

export default function ProjectDetailCTA({ project }: Props) {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", aptType: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3.5 bg-white/8 border border-white/15 rounded-sm text-white text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-[#C6A77D]/70 transition-colors duration-300";

  return (
    <section id="registration" className="relative bg-[#0B2545] py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A77D]/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 60%, #C6A77D08, transparent 50%), radial-gradient(circle at 90% 20%, #C6A77D06, transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_460px] gap-16 items-start">
          {/* Left */}
          <div className="pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-8 h-px bg-[#C6A77D]" />
              <span className="label-small text-[#C6A77D]">Đăng Ký Tư Vấn</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="font-serif text-white font-light leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Đặt lịch tham quan
              <br />
              <em className="text-[#C6A77D]">{project.shortName}</em>
              <br />
              hoàn toàn miễn phí
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/45 text-base font-light leading-relaxed max-w-md mb-10"
            >
              Đội ngũ chuyên gia BĐS Đà Nẵng sẽ đồng hành cùng bạn trong từng bước — từ tư vấn sản phẩm, chính sách tài chính đến pháp lý căn hộ.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-5"
            >
              <a href={HOTLINE_TEL} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-[#C6A77D]/30 flex items-center justify-center group-hover:bg-[#C6A77D]/10 transition-colors">
                  <svg viewBox="0 0 20 20" fill="none" stroke="#C6A77D" strokeWidth="1.3" className="w-4.5 h-4.5">
                    <path d="M15.9 12.9l-2.3.3c-.5.1-1 .3-1.3.8-.2.4-.5 1.5-3.8-1.8C5.2 8.9 6.3 8.6 6.7 8.4c.5-.3.7-.8.8-1.3l.3-2.3c.1-.5-.1-1-.4-1.4L6.2 2.3C5.8 1.8 5 1.6 4.4 2L2.6 3.3C2 3.7 1.7 4.5 1.9 5.2c.7 3.5 2.9 7 6 10.1s6.6 5.3 10.1 6c.7.1 1.5-.1 1.9-.7l1.3-1.8c.4-.6.2-1.4-.3-1.8l-1.1-1.2c-.4-.3-.9-.5-1.4-.4z" />
                  </svg>
                </div>
                <div>
                  <span className="label-small text-white/35 block mb-0.5">Hotline tư vấn</span>
                  <span
                    className="font-serif text-2xl text-[#C6A77D] font-light"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {HOTLINE_DISPLAY}
                  </span>
                </div>
              </a>

              <a href={CONTACT_EMAIL_HREF} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#C6A77D]/40 transition-colors">
                  <svg viewBox="0 0 20 16" fill="none" stroke="#C6A77D" strokeWidth="1.3" className="w-4 h-3.5">
                    <rect x="1" y="1" width="18" height="14" rx="2" />
                    <path d="M1 4l9 6 9-6" />
                  </svg>
                </div>
                <span className="text-white/50 text-sm font-light group-hover:text-[#C6A77D] transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-7 lg:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[360px] text-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#C6A77D]/15 flex items-center justify-center"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="#C6A77D" strokeWidth="1.5" className="w-7 h-7">
                    <path d="M3 10l5 5L17 4" />
                  </svg>
                </motion.div>
                <div>
                  <h3
                    className="font-serif text-white text-2xl font-light mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Đã nhận thông tin!
                  </h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs mx-auto">
                    Chuyên viên BĐS Đà Nẵng sẽ liên hệ lại theo thông tin bạn đã gửi để tư vấn về {project.shortName}.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3
                    className="font-serif text-white text-xl font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Đăng ký nhận tư vấn
                  </h3>
                  <p className="text-white/35 text-xs font-light">
                    {project.name} · BĐS Đà Nẵng
                  </p>
                </div>

                <div className="w-8 h-px bg-[#C6A77D]/40" />

                <div className="flex flex-col gap-3.5">
                  <div>
                    <label className="label-small text-white/45 block mb-1.5">Họ và tên *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Nguyễn Văn A"
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="label-small text-white/45 block mb-1.5">Số điện thoại *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder={HOTLINE_DISPLAY}
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="label-small text-white/45 block mb-1.5">Loại căn hộ quan tâm</label>
                    <select
                      value={form.aptType}
                      onChange={update("aptType")}
                      className={`${inputCls} appearance-none`}
                    >
                      <option value="" style={{ background: "#0B2545" }}>Chọn loại căn hộ</option>
                      {project.apartments.map((apt) => (
                        <option key={apt.code} value={apt.code} style={{ background: "#0B2545" }}>
                          {apt.code} — {apt.areaRange ?? apt.area}m² · Từ {apt.priceFrom} Tỷ
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-small text-white/45 block mb-1.5">Ghi chú (không bắt buộc)</label>
                    <textarea
                      value={form.note}
                      onChange={update("note")}
                      placeholder="Thời gian muốn tham quan, yêu cầu đặc biệt..."
                      rows={3}
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C6A77D] text-[#0B2545] label-small font-semibold tracking-[0.1em] rounded-sm hover:bg-white transition-colors duration-300 mt-1"
                >
                  Đăng Ký Tư Vấn Ngay
                </button>

                <ComplianceDisclaimerBox variant="form" />

                <label className="flex items-start gap-3 rounded-[4px] border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-[10px] font-medium leading-relaxed text-white/35">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 accent-[#C6A77D]"
                  />
                  <span>
                    {FORM_DISCLOSURE_TEXT} Tôi đồng ý để BĐS Đà Nẵng/SRT Miền Trung sử dụng thông tin đã gửi nhằm liên hệ tư vấn theo{" "}
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

                <p className="text-center text-[10px] text-white/25 font-light">
                  Thông tin chỉ dùng cho mục đích tư vấn theo yêu cầu đã gửi.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

