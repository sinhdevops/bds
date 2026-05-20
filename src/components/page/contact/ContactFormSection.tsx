"use client";

import React, { memo, useCallback, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiSend } from "react-icons/fi";
import {
  CHANNEL_OPTIONS,
  CONTACT_CARDS,
  CONTACT_NOTES,
  INITIAL_CONTACT_FORM,
  INTEREST_OPTIONS,
  PROJECT_OPTIONS,
  type ContactFormState,
} from "@/lib/contact";

type FieldName = keyof ContactFormState;
type ChoiceName = "interest" | "channel";
type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

const fieldClass =
  "h-12 w-full rounded-[4px] border border-white/10 bg-white/[0.06] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/22 focus:border-[#C6A77D]";

const ContactFormSection = () => {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_CONTACT_FORM);
  const [submitted, setSubmitted] = useState(false);

  const identityFields = useMemo(
    () => [
      {
        label: "Họ và tên",
        name: "name" as const,
        value: formData.name,
        placeholder: "Nguyễn Văn A",
        required: true,
      },
      {
        label: "Số điện thoại",
        name: "phone" as const,
        value: formData.phone,
        placeholder: "0325 610016",
        type: "tel",
        required: true,
      },
      {
        label: "Email",
        name: "email" as const,
        value: formData.email,
        placeholder: "email@example.com",
        type: "email",
      },
    ],
    [formData.email, formData.name, formData.phone]
  );

  const handleChange = useCallback((event: InputEvent) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleChoice = useCallback((name: ChoiceName, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(INITIAL_CONTACT_FORM);
  }, []);

  const resetSubmitted = useCallback(() => setSubmitted(false), []);

  return (
    <section id="contact-form" className="bg-[#FAF8F5] py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ContactInfo />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="rounded-[8px] bg-[#0B2545] p-5 shadow-2xl shadow-[#0B2545]/15 md:p-8"
          >
            {submitted ? (
              <SubmittedState onReset={resetSubmitted} />
            ) : (
              <ConsultationForm
                formData={formData}
                identityFields={identityFields}
                onChange={handleChange}
                onChoice={handleChoice}
                onSubmit={handleSubmit}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = memo(function ContactInfo() {
  return (
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
          BĐS Đà Nẵng hỗ trợ lọc giỏ hàng, cập nhật chính sách bán hàng,
          đặt lịch xem nhà và tư vấn phương án tài chính cho khách mua ở hoặc đầu tư.
        </p>
      </div>

      <div className="grid gap-3">
        {CONTACT_CARDS.map((item) => (
          <ContactCard key={item.label} {...item} />
        ))}
      </div>

      <div className="grid gap-4 border-l border-[#C6A77D] pl-5">
        {CONTACT_NOTES.map((item) => (
          <ContactNote key={item.text} {...item} />
        ))}
      </div>
    </motion.div>
  );
});

type ContactCardProps = (typeof CONTACT_CARDS)[number];

const ContactCard = memo(function ContactCard({ icon: Icon, label, value, meta, href }: ContactCardProps) {
  const content = (
    <div className="grid gap-1">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
        {label}
      </span>
      <span className="text-sm font-semibold leading-relaxed text-[#0B2545]">{value}</span>
      <span className="text-xs font-medium text-[#8A8A8A]">{meta}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-[44px_1fr] gap-4 rounded-[6px] border border-[#E5E0D8] bg-white px-4 py-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-[#0B2545] text-[#C6A77D]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      {href ? (
        <a href={href} className="transition-colors hover:text-[#9C7B5D]">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
});

type ContactNoteProps = (typeof CONTACT_NOTES)[number];

const ContactNote = memo(function ContactNote({ icon: Icon, text }: ContactNoteProps) {
  return (
    <div className="flex gap-3 text-sm font-medium text-[#555555]">
      <Icon className="mt-1 h-4 w-4 flex-none text-[#9C7B5D]" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
});

type IdentityField = {
  label: string;
  name: FieldName;
  value: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

type ConsultationFormProps = {
  formData: ContactFormState;
  identityFields: IdentityField[];
  onChange: (event: InputEvent) => void;
  onChoice: (name: ChoiceName, value: string) => void;
  onSubmit: (event: FormEvent) => void;
};

const ConsultationForm = memo(function ConsultationForm({
  formData,
  identityFields,
  onChange,
  onChoice,
  onSubmit,
}: ConsultationFormProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div>
        <span className="label-small mb-3 block text-[#C6A77D]">Đăng ký tư vấn</span>
        <h3 className="font-serif text-2xl font-light text-white md:text-3xl">
          Nhận thông tin dự án phù hợp
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {identityFields.map((field) => (
          <Field key={field.name} {...field} onChange={onChange} />
        ))}
        <ProjectSelect value={formData.project} onChange={onChange} />
      </div>

      <ChoiceGroup
        label="Nhu cầu"
        name="interest"
        value={formData.interest}
        options={INTEREST_OPTIONS}
        onSelect={onChoice}
      />

      <ChoiceGroup
        label="Kênh liên hệ ưu tiên"
        name="channel"
        value={formData.channel}
        options={CHANNEL_OPTIONS}
        onSelect={onChoice}
      />

      <div className="grid gap-2">
        <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
          Ghi chú thêm
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
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
  );
});

type FieldProps = IdentityField & {
  onChange: (event: InputEvent) => void;
};

const Field = memo(function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: FieldProps) {
  return (
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
        className={fieldClass}
      />
    </div>
  );
});

type ProjectSelectProps = {
  value: string;
  onChange: (event: InputEvent) => void;
};

const ProjectSelect = memo(function ProjectSelect({ value, onChange }: ProjectSelectProps) {
  return (
    <div className="grid gap-2">
      <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
        Khu vực quan tâm
      </label>
      <select name="project" value={value} onChange={onChange} className={fieldClass}>
        {PROJECT_OPTIONS.map((option) => (
          <option key={option.label} className="text-[#111111]" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

type ChoiceGroupProps = {
  label: string;
  name: ChoiceName;
  value: string;
  options: string[];
  onSelect: (name: ChoiceName, value: string) => void;
};

const ChoiceGroup = memo(function ChoiceGroup({
  label,
  name,
  value,
  options,
  onSelect,
}: ChoiceGroupProps) {
  const handleClick = useCallback(
    (option: string) => {
      onSelect(name, option);
    },
    [name, onSelect]
  );

  return (
    <div className="grid gap-3">
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <ChoiceButton
            key={option}
            active={option === value}
            label={option}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
});

type ChoiceButtonProps = {
  active: boolean;
  label: string;
  onClick: (option: string) => void;
};

const ChoiceButton = memo(function ChoiceButton({ active, label, onClick }: ChoiceButtonProps) {
  const handleClick = useCallback(() => onClick(label), [label, onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-[4px] border px-3.5 py-2 text-xs font-semibold transition-colors ${
        active
          ? "border-[#C6A77D] bg-[#C6A77D] text-[#111111]"
          : "border-white/12 bg-white/[0.04] text-white/62 hover:border-[#C6A77D] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
});

const SubmittedState = memo(function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-[520px] flex-col items-center justify-center text-center"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A77D]/35 text-[#C6A77D]">
        <FiCheck className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="font-serif text-3xl font-light text-white">Đã nhận thông tin</h3>
      <p className="mt-4 max-w-sm text-sm font-medium leading-[1.8] text-white/58">
        Chuyên viên BĐS Đà Nẵng sẽ liên hệ lại trong thời gian sớm nhất theo kênh bạn đã chọn.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-[4px] border border-white/18 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#C6A77D] hover:text-[#C6A77D]"
      >
        Gửi yêu cầu khác
      </button>
    </motion.div>
  );
});

export default React.memo(ContactFormSection);
