"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Tổng Quan" },
  { id: "highlights", label: "Điểm Nổi Bật" },
  { id: "can-ho", label: "Căn Hộ" },
  { id: "gallery", label: "Hình Ảnh" },
  { id: "tien-ich", label: "Tiện Ích" },
  { id: "vi-tri", label: "Vị Trí" },
  { id: "registration", label: "Đăng Ký" },
];

export default function ProjectDetailNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
      const current = SECTIONS.find((s) => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed top-[76px] left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D8]/80 shadow-[0_2px_20px_rgba(11,37,69,0.05)]"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-11 flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3.5 py-1.5 rounded-sm label-small whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    active === s.id
                      ? "text-[#0B2545] bg-[#0B2545]/6 font-semibold"
                      : "text-[#8A8A8A] hover:text-[#0B2545]"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A77D]"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            <a
              href="#registration"
              className="hidden lg:flex items-center gap-2 px-5 py-1.5 bg-[#0B2545] text-white label-small rounded-sm hover:bg-[#C6A77D] hover:text-[#0B2545] transition-all duration-300 flex-shrink-0 ml-4"
            >
              Đăng Ký Ngay
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
