"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E5E0D8] shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[64px] flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p
                className="hidden lg:block font-serif text-[#0B2545] font-semibold"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
              >
                Sở hữu không gian sống đẳng cấp bên bờ Sông Hàn
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end flex-shrink-0">
              {/* Call button on Mobile */}
              <a
                href="tel:0325610016"
                className="flex sm:hidden w-11 h-11 rounded-full bg-[#0B2545] items-center justify-center text-white shadow-sm hover:bg-[#C6A77D] transition-colors duration-300 flex-shrink-0"
                aria-label="Gọi điện tư vấn"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#C6A77D"
                  strokeWidth="1.3"
                  className="w-5 h-5"
                >
                  <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3z" />
                </svg>
              </a>

              {/* Call text on Desktop */}
              <a
                href="tel:0325610016"
                className="hidden sm:flex items-center gap-2 text-[#0B2545] label-small font-bold"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#C6A77D"
                  strokeWidth="1.3"
                  className="w-3.5 h-3.5"
                >
                  <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3z" />
                </svg>
                0981 814 814
              </a>

              {/* CTA button (Full width on mobile, normal width on desktop) */}
              <a
                href="#contact"
                className="flex-grow sm:flex-grow-0 text-center justify-center px-6 py-2.5 bg-[#C6A77D] text-[#1A1A1A] label-small font-semibold tracking-[0.1em] rounded-sm hover:bg-[#0B2545] hover:text-white transition-all duration-300 shadow-sm"
              >
                Đăng Ký Tư Vấn Ngay
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
