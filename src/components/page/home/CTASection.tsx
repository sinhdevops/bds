"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", type: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#1A1A1A] overflow-hidden py-24 lg:py-32">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, #C6A77D0A 0%, transparent 50%), radial-gradient(circle at 85% 30%, #9C7B5D08 0%, transparent 50%)",
        }}
      />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A77D]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">
          {/* Left — Typography */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-px bg-[#C6A77D]" />
              <span className="label-small text-[#C6A77D]">Đăng Ký Tư Vấn</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="font-serif font-light text-white leading-[1.08] mb-8"
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Sở hữu không gian
              <br />
              <em className="text-[#C6A77D]">sống đẳng cấp</em>
              <br />
              bên bờ Sông Hàn
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/50 text-base font-light leading-relaxed max-w-md mb-10"
            >
              Để lại thông tin — đội ngũ chuyên gia của chúng tôi sẽ liên hệ để tư vấn về dự án, chính sách tài chính và cơ hội đầu tư phù hợp nhất.
            </motion.p>

            {/* Hotline */}
            <motion.a
              href="tel:0981814814"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-full border border-[#C6A77D]/40 flex items-center justify-center group-hover:bg-[#C6A77D]/10 transition-colors duration-300">
                <svg viewBox="0 0 20 20" fill="none" stroke="#C6A77D" strokeWidth="1.3" className="w-4.5 h-4.5">
                  <path d="M15.9 12.9l-2.3.3c-.5.1-1 .3-1.3.8-.2.4-.5 1.5-3.8-1.8C5.2 8.9 6.3 8.6 6.7 8.4c.5-.3.7-.8.8-1.3l.3-2.3c.1-.5-.1-1-.4-1.4L6.2 2.3C5.8 1.8 5 1.6 4.4 2L2.6 3.3C2 3.7 1.7 4.5 1.9 5.2c.7 3.5 2.9 7 6 10.1s6.6 5.3 10.1 6c.7.1 1.5-.1 1.9-.7l1.3-1.8c.4-.6.2-1.4-.3-1.8l-1.1-1.2c-.4-.3-.9-.5-1.4-.4l-.5.5z" />
                </svg>
              </div>
              <div>
                <span className="label-small text-[#8A8A8A] block mb-0.5">Hotline 24/7</span>
                <span className="font-serif text-2xl text-[#C6A77D] font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                  0981 814 814
                </span>
              </div>
            </motion.a>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-[#F6F3EE] rounded-2xl p-8 lg:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[280px] text-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C6A77D]/15 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" stroke="#C6A77D" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M3 10l5 5L17 5" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-serif text-2xl text-[#1A1A1A] font-light mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Cảm ơn bạn!
                  </h3>
                  <p className="text-[#555555] text-sm font-light leading-relaxed">
                    Chúng tôi đã nhận được yêu cầu tư vấn. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3
                    className="font-serif text-2xl text-[#1A1A1A] font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Đặt lịch tư vấn
                  </h3>
                  <p className="text-sm text-[#8A8A8A] font-light">Miễn phí · Không ràng buộc</p>
                </div>

                <div className="w-8 h-px bg-[#C6A77D]" />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="label-small text-[#555555]">Họ và tên</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-[#1A1A1A] text-sm font-light placeholder:text-[#B0A898] focus:outline-none focus:border-[#C6A77D] transition-colors duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="label-small text-[#555555]">Số điện thoại</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0901 234 567"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-[#1A1A1A] text-sm font-light placeholder:text-[#B0A898] focus:outline-none focus:border-[#C6A77D] transition-colors duration-300"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="label-small text-[#555555]">Loại căn hộ quan tâm</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E0D8] rounded-sm text-[#1A1A1A] text-sm font-light focus:outline-none focus:border-[#C6A77D] transition-colors duration-300 appearance-none"
                    >
                      <option value="">Chọn loại căn hộ</option>
                      <option value="1pn">1 Phòng Ngủ + 1</option>
                      <option value="2pn">2 Phòng Ngủ</option>
                      <option value="3pn">3 Phòng Ngủ</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C6A77D] text-[#1A1A1A] label-small tracking-[0.1em] rounded-sm hover:bg-[#9C7B5D] hover:text-white transition-all duration-300 mt-2"
                >
                  Đăng Ký Tư Vấn Ngay
                </button>

                <p className="text-center text-xs text-[#B0A898] font-light">
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
