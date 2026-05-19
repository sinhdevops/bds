"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#111111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#B89B72]/20 to-transparent" />

      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left — Cinematic building image */}
        <motion.div
          className="relative hidden lg:block overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&fit=crop"
            alt="Sun Symphony Residence — Sở hữu căn hộ hạng sang Đà Nẵng"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* Dark cinematic overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#111111]/80" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[#B89B72]/8 mix-blend-multiply" />

          {/* Left panel text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#B89B72]" />
              <span className="label-small text-[#B89B72]">Nhận Bảng Giá</span>
            </div>
            <h2
              className="font-serif text-white font-light leading-[1.08] mb-6"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3vw, 3rem)",
              }}
            >
              Sở hữu không gian
              <br />
              <em className="text-[#B89B72]">sống đẳng cấp</em>
              <br />
              bên bờ Sông Hàn
            </h2>
            <p className="text-white/40 text-sm font-light leading-[1.8] max-w-xs mb-8">
              Để lại thông tin — đội ngũ chuyên gia sẽ liên hệ tư vấn về bảng giá và chính sách ưu đãi mới nhất.
            </p>

            {/* Hotline */}
            <a
              href="tel:0981814814"
              className="inline-flex items-center gap-4 group w-fit"
            >
              <div className="w-10 h-10 rounded-full border border-[#B89B72]/30 flex items-center justify-center group-hover:bg-[#B89B72]/10 transition-colors duration-300">
                <svg viewBox="0 0 20 20" fill="none" stroke="#B89B72" strokeWidth="1.3" className="w-4 h-4">
                  <path d="M15.9 12.9l-2.3.3c-.5.1-1 .3-1.3.8-.2.4-.5 1.5-3.8-1.8C5.2 8.9 6.3 8.6 6.7 8.4c.5-.3.7-.8.8-1.3l.3-2.3c.1-.5-.1-1-.4-1.4L6.2 2.3C5.8 1.8 5 1.6 4.4 2L2.6 3.3C2 3.7 1.7 4.5 1.9 5.2c.7 3.5 2.9 7 6 10.1s6.6 5.3 10.1 6c.7.1 1.5-.1 1.9-.7l1.3-1.8c.4-.6.2-1.4-.3-1.8l-1.1-1.2c-.4-.3-.9-.5-1.4-.4z" />
                </svg>
              </div>
              <div>
                <span className="label-small text-white/30 block mb-0.5" style={{ fontSize: "0.6rem" }}>Tư vấn 24/7</span>
                <span
                  className="font-serif text-[#B89B72] text-2xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  0981 814 814
                </span>
              </div>
            </a>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/8">
              {[
                { val: "100%", label: "Thông tin bảo mật" },
                { val: "24h", label: "Phản hồi trong" },
              ].map((b) => (
                <div key={b.label}>
                  <span className="font-serif text-[#B89B72] text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                    {b.val}
                  </span>
                  <p className="text-white/30 text-xs font-light mt-0.5">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          className="flex items-center justify-center py-20 px-8 lg:px-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="w-full max-w-md">
            {/* Mobile header (hidden on desktop where left panel shows) */}
            <div className="lg:hidden mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#B89B72]" />
                <span className="label-small text-[#B89B72]">Đăng Ký Tư Vấn</span>
              </div>
              <h2
                className="font-serif text-white font-light leading-[1.08]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                Sở hữu không gian
                <br />
                <em className="text-[#B89B72]">sống đẳng cấp</em>
              </h2>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center gap-6 py-12"
              >
                <div className="w-14 h-14 rounded-full border border-[#B89B72]/30 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" stroke="#B89B72" strokeWidth="1.4" className="w-6 h-6">
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
                    Chúng tôi đã nhận được yêu cầu và sẽ liên hệ với bạn trong vòng 24 giờ.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-2">
                  <h3
                    className="font-serif text-white text-2xl font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Nhận bảng giá & chính sách
                    <br />
                    <em className="text-[#B89B72]">ưu đãi mới nhất</em>
                  </h3>
                  <p className="text-white/30 text-xs font-light mt-3">Miễn phí · Không ràng buộc · Phản hồi trong 24h</p>
                  <div className="w-8 h-px bg-[#B89B72] mt-5" />
                </div>

                {[
                  { key: "name", label: "Họ và tên", placeholder: "Nguyễn Văn A", type: "text" },
                  { key: "phone", label: "Số điện thoại", placeholder: "0901 234 567", type: "tel" },
                  { key: "email", label: "Email (không bắt buộc)", placeholder: "email@example.com", type: "email" },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-2">
                    <label className="label-small text-white/35">{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      required={field.key !== "email"}
                      className="w-full px-4 py-3.5 bg-white/4 border border-white/10 text-white text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-[#B89B72]/60 focus:bg-white/6 transition-all duration-300"
                    />
                  </div>
                ))}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-[#B89B72] text-[#111111] label-small tracking-[0.14em] hover:bg-white transition-colors duration-300 mt-1"
                >
                  Nhận Thông Tin Ngay
                </motion.button>

                <p className="text-center text-xs text-white/20 font-light">
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
