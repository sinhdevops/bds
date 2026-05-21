"use client";

import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import { HOTLINE_DISPLAY, HOTLINE_TEL, ZALO_HREF } from "@/lib/contact";

const ACTIONS = [
  {
    label: "Zalo",
    href: ZALO_HREF,
    icon: SiZalo,
    className: "border-[#0068FF]/20 bg-[#0068FF] text-white hover:bg-[#0059D6]",
    ringClassName: "border-[#0068FF]/45",
  },
  {
    label: "Điện ngay",
    href: HOTLINE_TEL,
    icon: FiPhoneCall,
    className: "border-[#C6A77D]/25 bg-[#0B2545] text-white hover:bg-[#C6A77D] hover:text-[#111111]",
    ringClassName: "border-[#C6A77D]/45",
  },
];

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-[92px] right-4 z-50 flex flex-col gap-3 sm:bottom-[96px] sm:right-6"
      aria-label="Liên hệ nhanh"
    >
      {ACTIONS.map((action, index) => {
        const Icon = action.icon;

        return (
          <motion.a
            key={action.href}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={action.label === "Zalo" ? "Nhắn Zalo" : `Gọi ngay ${HOTLINE_DISPLAY}`}
            className={`group relative flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur sm:h-13 sm:w-13 ${action.className}`}
            initial={{ opacity: 0, x: 18, scale: 0.88 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
          >
            <motion.span
              className={`absolute inset-0 rounded-full border ${action.ringClassName}`}
              aria-hidden="true"
              animate={{ scale: [1, 1.45, 1.45], opacity: [0.55, 0, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut", delay: index * 0.28 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-white/16"
              aria-hidden="true"
              animate={{ opacity: [0, 0.22, 0], scale: [0.82, 1.08, 0.82] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 + index * 0.2 }}
            />
            <Icon className="relative z-10 h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="pointer-events-none absolute right-[calc(100%+10px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-[4px] bg-[#071522] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-opacity duration-200 group-hover:opacity-100 sm:block">
              {action.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
