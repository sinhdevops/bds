"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { openConsultationModal } from "@/components/shared/ConsultationModal";
import { OFFICE_ADDRESS } from "@/lib/contact";

const ContactHero = () => {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#0B2545] pt-24 text-white lg:min-h-[620px]">
      <Image
        src="/images/hero-song-han-clean.png"
        alt="Bất động sản cao cấp bên sông Hàn tại Đà Nẵng"
        fill
        className="object-cover object-center opacity-55"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A31]/95 via-[#0B2545]/78 to-[#0B2545]/18" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF8F5] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] items-center px-6 pb-16 pt-12 lg:px-12">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="label-small mb-5 block text-[#C6A77D]"
          >
            Liên hệ BĐS Đà Nẵng
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="font-serif max-w-2xl font-light leading-[1.06]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            Tư vấn căn hộ Đà Nẵng theo đúng nhu cầu của bạn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
            className="mt-6 max-w-xl text-sm font-medium leading-[1.85] text-white/72 md:text-base"
          >
            Nhận bảng giá, chính sách ưu đãi và lịch xem nhà từ đội ngũ chuyên trách
            các dự án Sun Group tại Đà Nẵng.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={openConsultationModal}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#C6A77D] px-6 text-xs font-bold uppercase tracking-[0.14em] text-[#111111] transition-colors duration-300 hover:bg-white"
            >
              Đăng ký tư vấn
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="tel:0702252678"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-white/22 px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-[#C6A77D] hover:text-[#C6A77D]"
            >
              <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
              0702252678
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.46 }}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-white/10 bg-white/10 sm:grid-cols-3"
          >
            {[
              ["15 phút", "Phản hồi yêu cầu"],
              ["1-1", "Chuyên viên phụ trách"],
              ["Online", "Xem nhà từ xa"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#0B2545]/52 px-5 py-4 backdrop-blur">
                <strong className="block text-xl font-semibold text-[#C6A77D]">
                  {value}
                </strong>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.12em] text-white/54">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-10 right-6 hidden max-w-xs rounded-[6px] border border-white/12 bg-[#071A31]/70 p-5 backdrop-blur-md lg:block"
        >
          <div className="mb-3 flex items-center gap-2 text-[#C6A77D]">
            <FiMapPin className="h-4 w-4" aria-hidden="true" />
            <span className="label-small">Văn phòng</span>
          </div>
          <p className="text-sm font-medium leading-[1.75] text-white/72">
            {OFFICE_ADDRESS}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ContactHero);
