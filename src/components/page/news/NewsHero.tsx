"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsHero = () => {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#071522]">
      <Image
        src="/images/hero-song-han-clean.png"
        alt="Tin tức bất động sản Đà Nẵng"
        fill
        className="object-cover object-center opacity-75"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#071522]/94 via-[#071522]/72 to-[#071522]/18" />
      <div className="absolute inset-0 bg-linear-to-t from-[#071522] via-transparent to-[#071522]/38" />

      <div className="relative z-10 mx-auto grid min-h-[520px] max-w-[1240px] items-end gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1fr_420px]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#C6A77D]" />
            <span className="label-small text-[#C6A77D]">Tin tức & phân tích</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-normal leading-[1.02] text-white"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.6rem)" }}
          >
            Đọc nhanh
            <br />
            <em className="text-[#C6A77D]">ra quyết định tốt hơn</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-[600px] text-base font-medium leading-[1.85] text-white/72"
          >
            Cập nhật thị trường, quy hoạch, tiến độ dự án và các góc nhìn cần thiết trước khi xuống tiền vào bất động sản Đà Nẵng.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="rounded-md border border-white/12 bg-white/9 p-5 backdrop-blur-md"
        >
          <p className="label-small text-[#C6A77D]">Bản tin tuần này</p>
          <h2 className="mt-3 font-serif text-2xl font-normal leading-tight text-white" style={{ fontFamily: "var(--font-serif)" }}>
            Dòng tiền đang dịch chuyển về các dự án ven sông có pháp lý rõ ràng
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white/62">
            Ưu tiên hiện tại của nhà đầu tư là vị trí thật, khả năng khai thác rõ và tiến độ minh bạch.
          </p>
          <a
            href="#news-list"
            className="mt-5 inline-flex rounded-[3px] bg-[#C6A77D] px-5 py-3 label-small font-bold text-white transition-colors hover:bg-white hover:text-[#071522]"
          >
            Xem bài mới
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(NewsHero);
