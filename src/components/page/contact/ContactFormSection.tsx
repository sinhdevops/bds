"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn quý khách ${formData.name}! SRT Miền Trung sẽ liên hệ lại qua số điện thoại ${formData.phone} trong vòng 15 phút.`);
    setFormData({ name: "", phone: "", email: "", message: "" });
  }, [formData]);

  return (
    <section className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Office info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="label-small text-[#9C7B5D] block mb-4 uppercase">Thông Tin Trụ Sở</span>
              <h2
                className="font-serif text-headline text-[#0B2545] font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Công ty TNHH Thương mại và Đầu tư
                <br />
                <em>SRT Miền Trung</em>
              </h2>
              <p className="text-[#555555] text-sm leading-[1.8] font-light mb-8 max-w-md">
                SRT Miền Trung luôn tự hào là đại lý chiến lược dẫn đầu doanh số của các dự án Sun Group Đà Nẵng. Hãy liên hệ với chúng tôi để nhận những giỏ hàng ưu đãi độc quyền đẹp nhất.
              </p>

              {/* Detail list */}
              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 16 20" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-4 h-5 mt-0.5 flex-shrink-0">
                        <path d="M8 1C4.7 1 2 3.7 2 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" />
                        <circle cx="8" cy="7" r="2" />
                      </svg>
                    ),
                    label: "Địa chỉ văn phòng",
                    val: "Lô 12, Khu B2-4, Đường Lê Văn Duyệt, Sơn Trà, TP. Đà Nẵng",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 16 16" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-4 h-4 mt-0.5 flex-shrink-0">
                        <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3z" />
                      </svg>
                    ),
                    label: "Hotline 24/7",
                    val: "0981 814 814",
                    href: "tel:0325610016",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 16 12" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-4 h-3.5 mt-1 flex-shrink-0">
                        <rect x="1" y="1" width="14" height="10" rx="1" />
                        <path d="M1 3l7 5 7-5" />
                      </svg>
                    ),
                    label: "Email hỗ trợ",
                    val: "info@srtmientrung.vn",
                    href: "mailto:info@srtmientrung.vn",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    {item.icon}
                    <div>
                      <span className="text-[10px] text-[#8A8A8A] font-light uppercase tracking-wider block mb-0.5">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#0B2545] font-semibold hover:text-[#C6A77D] transition-colors duration-300">
                          {item.val}
                        </a>
                      ) : (
                        <span className="text-sm text-[#0B2545] font-light leading-relaxed block">{item.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark Navy Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="p-8 bg-[#0B2545] rounded-3xl border border-[#C6A77D]/10 flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="label-small text-[#C6A77D] tracking-wider uppercase block mb-1">Đăng Ký Tư Vấn</span>
              <h3 className="font-serif text-xl text-white font-medium" style={{ fontFamily: "var(--font-serif)" }}>Nhận Báo Giá Độc Quyền</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { name: "name", label: "Họ và tên của quý khách", type: "text", val: formData.name },
                { name: "phone", label: "Số điện thoại liên hệ", type: "tel", val: formData.phone },
                { name: "email", label: "Địa chỉ Email (Không bắt buộc)", type: "email", val: formData.email },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-white/50 uppercase tracking-wider font-medium">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={field.val}
                    onChange={handleChange}
                    required={field.name !== "email"}
                    className="w-full bg-[#134074]/30 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C6A77D] focus:outline-none transition-colors duration-300"
                    placeholder={`Nhập ${field.label.toLowerCase()}...`}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Yêu cầu cụ thể của quý khách</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-[#134074]/30 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C6A77D] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Ví dụ: Quan tâm căn hộ 2PN tòa Symphony 5 view Sông Hàn..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-4 bg-[#C6A77D] text-[#1A1A1A] label-small font-bold rounded-lg hover:bg-[#FAF8F5] hover:text-[#0B2545] transition-all duration-300 shadow-md uppercase tracking-wider"
              >
                Gửi Đăng Ký Tư Vấn
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactFormSection);
