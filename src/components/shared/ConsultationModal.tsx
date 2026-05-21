"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { memo, useCallback, useEffect, useState } from "react";
import { FiCheck, FiPhoneCall, FiSend, FiX } from "react-icons/fi";
import {
  HOTLINE_DISPLAY,
  HOTLINE_TEL,
  INITIAL_LEAD_FORM,
  type LeadFormState,
} from "@/lib/contact";

export const CONSULTATION_MODAL_EVENT = "open-consultation-modal";

export const openConsultationModal = () => {
  window.dispatchEvent(new CustomEvent(CONSULTATION_MODAL_EVENT));
};

const modalMotion = {
  initial: { opacity: 0, y: 18, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 12, scale: 0.98 },
  transition: { duration: 0.25, ease: "easeOut" as const },
};

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<LeadFormState>(INITIAL_LEAD_FORM);

  const reset = useCallback(() => {
    setSubmitted(false);
    setSubmitting(false);
    setErrorMessage("");
    setForm(INITIAL_LEAD_FORM);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const openModal = useCallback(() => {
    reset();
    setOpen(true);
  }, [reset]);

  useEffect(() => {
    window.addEventListener(CONSULTATION_MODAL_EVENT, openModal);
    return () => window.removeEventListener(CONSULTATION_MODAL_EVENT, openModal);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  const updateField = useCallback(
    (field: keyof LeadFormState) => (event: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    },
    []
  );

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        source: typeof window !== "undefined" ? window.location.href : "Website",
        message: "Đăng ký tư vấn nhanh từ popup",
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(data?.error ?? "Không thể gửi thông tin");
        }

        setSubmitted(true);
        setForm(INITIAL_LEAD_FORM);
      })
      .catch(() => {
        setErrorMessage("Chưa gửi được thông tin. Vui lòng thử lại hoặc gọi hotline.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  }, [form]);

  const stopPropagation = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071A31]/72 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
          onMouseDown={close}
        >
          <motion.div
            {...modalMotion}
            className="relative w-full max-w-[460px] rounded-[8px] border border-white/10 bg-[#0B2545] p-6 shadow-2xl shadow-black/30 md:p-8"
            onMouseDown={stopPropagation}
          >
            <CloseButton onClose={close} />
            {submitted ? (
              <SuccessState onClose={close} />
            ) : (
              <LeadForm
                form={form}
                onChange={updateField}
                onSubmit={handleSubmit}
                submitting={submitting}
                errorMessage={errorMessage}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const CloseButton = memo(function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/10 text-white/62 transition-colors hover:border-[#C6A77D] hover:text-[#C6A77D] focus:outline-none focus:ring-2 focus:ring-[#C6A77D]/40"
      aria-label="Đóng modal"
    >
      <FiX className="h-5 w-5" aria-hidden="true" />
    </button>
  );
});

const SuccessState = memo(function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C6A77D]/35 text-[#C6A77D]">
        <FiCheck className="h-7 w-7" aria-hidden="true" />
      </div>
      <h2 id="consultation-modal-title" className="font-serif text-3xl font-light text-white">
        Đã nhận thông tin
      </h2>
      <p className="mt-4 max-w-sm text-sm font-medium leading-[1.8] text-white/58">
        Chuyên viên BĐS Đà Nẵng sẽ liên hệ lại theo số điện thoại bạn đã gửi.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 rounded-[4px] bg-[#C6A77D] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors hover:bg-white"
      >
        Hoàn tất
      </button>
    </div>
  );
});

type LeadFormProps = {
  form: LeadFormState;
  onChange: (field: keyof LeadFormState) => (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  submitting: boolean;
  errorMessage: string;
};

const LeadForm = memo(function LeadForm({
  form,
  onChange,
  onSubmit,
  submitting,
  errorMessage,
}: LeadFormProps) {
  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="pr-10">
        <span className="label-small mb-3 block text-[#C6A77D]">Đăng ký tư vấn nhanh</span>
        <h2
          id="consultation-modal-title"
          className="font-serif text-2xl font-light leading-tight text-white md:text-3xl"
        >
          Để lại thông tin, chúng tôi sẽ gọi lại
        </h2>
        <p className="mt-3 text-sm font-medium leading-[1.75] text-white/54">
          Chỉ cần tên, số điện thoại và email để chuyên viên tư vấn đúng nhu cầu của bạn.
        </p>
      </div>

      <div className="grid gap-4">
        <LeadInput
          label="Họ và tên"
          value={form.name}
          onChange={onChange("name")}
          placeholder="Nguyễn Văn A"
          autoFocus
        />
        <LeadInput
          label="Số điện thoại"
          value={form.phone}
          onChange={onChange("phone")}
          placeholder={HOTLINE_DISPLAY}
          type="tel"
        />
        <LeadInput
          label="Email"
          value={form.email}
          onChange={onChange("email")}
          placeholder="email@example.com"
          type="email"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#C6A77D] px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Đang gửi..." : "Gửi thông tin"}
        <FiSend className="h-4 w-4" aria-hidden="true" />
      </button>

      {errorMessage ? (
        <p className="text-center text-xs font-semibold text-red-200">{errorMessage}</p>
      ) : null}

      <a
        href={HOTLINE_TEL}
        className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/48 transition-colors hover:text-[#C6A77D]"
      >
        <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
        Gọi ngay {HOTLINE_DISPLAY}
      </a>
    </form>
  );
});

type LeadInputProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
};

const LeadInput = memo(function LeadInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoFocus = false,
}: LeadInputProps) {
  return (
    <div className="grid gap-2">
      <label className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/45">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required
        className="h-12 w-full rounded-[4px] border border-white/10 bg-white/[0.06] px-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/22 focus:border-[#C6A77D]"
      />
    </div>
  );
});
