"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
} from "react-icons/fi";

type FormData = {
  name: string;
  phone: string;
  email: string;
  project: string;
  interest: string;
  channel: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  project: "",
  interest: "Nhận bảng giá",
  channel: "Gọi điện",
  message: "",
};

const contactCards = [
  {
    icon: FiPhone,
    label: "Hotline",
    value: "0325 610016",
    meta: "Tư vấn 24/7",
    href: "tel:0325610016",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "info@srtmientrung.vn",
    meta: "Phản hồi trong ngày",
    href: "mailto:info@srtmientrung.vn",
  },
  {
    icon: FiMapPin,
    label: "Văn phòng",
    value: "Lô 12, Khu B2-4, đường Lê Văn Duyệt, Sơn Trà, Đà Nẵng",
    meta: "Tiếp khách theo lịch hẹn",
  },
];

const interests = ["Nhận bảng giá", "Xem nhà mẫu", "Tư vấn đầu tư", "Hỗ trợ vay vốn"];
const channels = ["Gọi điện", "Zalo", "Email"];

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleChoice = useCallback((name: "interest" | "channel", value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  }, []);

  return (
    <section id="contact-form" className="bg-[#FAF8F5] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col justify-between gap-10"
          >
            <div>
              <span className="label-small mb-4 block text-[#9C7B5D]">
                Kênh liên hệ chính thức
              </span>
              <h2
                className="font-serif max-w-xl text-[#0B2545] font-light leading-[1.1]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
              >
                Một đầu mối tư vấn, đủ thông tin để quyết định nhanh hơn
              </h2>
              <p className="mt-6 max-w-lg text-sm font-medium leading-[1.85] text-[#555555]">
                SRT Miền Trung hỗ trợ lọc giỏ hàng, cập nhật chính sách bán hàng,
                đặt lịch xem nhà và tư vấn phương án tài chính cho khách mua ở hoặc
                đầu tư.
              </p>
            </div>

            <div className="grid gap-3">
              {contactCards.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="grid gap-1">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-[#0B2545]">
                      {item.value}
                    </span>
                    <span className="text-xs font-medium text-[#8A8A8A]">{item.meta}</span>
                  </div>
                );

                return (
                  <div
                    key={item.label}
                    className="grid grid-cols-[44px_1fr] gap-4 rounded-[6px] border border-[#E5E0D8] bg-white px-4 py-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#0B2545] text-[#C6A77D]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="transition-colors hover:text-[#9C7B5D]">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>

            <div className="grid gap-4 border-l border-[#C6A77D] pl-5">
              {[
                { icon: FiClock, text: "Ưu tiên phản hồi các yêu cầu có số điện thoại rõ ràng." },
                { icon: FiMessageCircle, text: "Có thể tư vấn qua Zalo cho khách cần xem nhà từ xa." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex gap-3 text-sm font-medium text-[#555555]">
                    <Icon className="mt-1 h-4 w-4 flex-none text-[#9C7B5D]" aria-hidden="true" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="rounded-[8px] bg-[#0B2545] p-5 shadow-2xl shadow-[#0B2545]/15 md:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A77D]/35 text-[#C6A77D]">
                  <FiCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl font-light text-white">
                  Đã nhận thông tin
                </h3>
                <p className="mt-4 max-w-sm text-sm font-medium leading-[1.8] text-white/58">
                  Chuyên viên SRT Miền Trung sẽ liên hệ lại trong thời gian sớm nhất
                  theo kênh bạn đã chọn.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-[4px] border border-white/18 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C6A77D] hover:text-[#C6A77D]"
                >
                  Gửi yêu cầu khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div>
                  <span className="label-small mb-3 block text-[#C6A77D]">
                    Đăng ký tư vấn
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
                    Nhận thông tin dự án phù hợp
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Họ và tên"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    required
                  />
                  <Field
                    label="Số điện thoại"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0325 610016"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                  <div className="grid gap-2">
                    <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                      Khu vực quan tâm
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="h-12 w-full rounded-[4px] border border-white/10 bg-white/[0.06] px-4 text-sm font-medium text-white outline-none transition-colors focus:border-[#C6A77D]"
                    >
                      <option className="text-[#111111]" value="">Chưa xác định</option>
                      <option className="text-[#111111]" value="Sun Symphony Residence">Sun Symphony Residence</option>
                      <option className="text-[#111111]" value="Sun Solar Residence">Sun Solar Residence</option>
                      <option className="text-[#111111]" value="Sun Ponte Residence">Sun Ponte Residence</option>
                      <option className="text-[#111111]" value="Capital Square Đà Nẵng">Capital Square Đà Nẵng</option>
                    </select>
                  </div>
                </div>

                <ChoiceGroup
                  label="Nhu cầu"
                  name="interest"
                  value={formData.interest}
                  options={interests}
                  onSelect={handleChoice}
                />

                <ChoiceGroup
                  label="Kênh liên hệ ưu tiên"
                  name="channel"
                  value={formData.channel}
                  options={channels}
                  onSelect={handleChoice}
                />

                <div className="grid gap-2">
                  <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Ghi chú thêm
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-[4px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/22 focus:border-[#C6A77D]"
                    placeholder="Ví dụ: cần căn 2PN, view sông, ngân sách dự kiến..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#C6A77D] px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-white"
                >
                  Gửi yêu cầu tư vấn
                  <FiSend className="h-4 w-4" aria-hidden="true" />
                </button>

                <p className="text-center text-xs font-medium leading-relaxed text-white/34">
                  Thông tin của bạn chỉ dùng cho mục đích tư vấn dự án và chính sách bán hàng.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
};

const Field = ({ label, name, value, onChange, placeholder, type = "text", required }: FieldProps) => (
  <div className="grid gap-2">
    <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="h-12 w-full rounded-[4px] border border-white/10 bg-white/[0.06] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/22 focus:border-[#C6A77D]"
    />
  </div>
);

type ChoiceGroupProps = {
  label: string;
  name: "interest" | "channel";
  value: string;
  options: string[];
  onSelect: (name: "interest" | "channel", value: string) => void;
};

const ChoiceGroup = ({ label, name, value, options, onSelect }: ChoiceGroupProps) => (
  <div className="grid gap-3">
    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
      {label}
    </span>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(name, option)}
            className={`rounded-[4px] border px-3.5 py-2 text-xs font-semibold transition-colors ${
              active
                ? "border-[#C6A77D] bg-[#C6A77D] text-[#111111]"
                : "border-white/12 bg-white/[0.04] text-white/62 hover:border-[#C6A77D] hover:text-white"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);

export default React.memo(ContactFormSection);
