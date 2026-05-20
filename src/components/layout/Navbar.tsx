"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { openConsultationModal } from "@/components/shared/ConsultationModal";

const NAV_LINKS = [
  { label: "Trang Chủ", href: "/", isPage: true, active: true },
  { label: "Dự Án", href: "/project", isPage: false },
  { label: "Tin Tức", href: "/news", isPage: true },
  { label: "Liên Hệ", href: "/contact", isPage: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (scrolled: boolean, active?: boolean) =>
    `label-small link-underline transition-colors duration-300 font-semibold ${
      scrolled
        ? "text-[#555555] hover:text-[#0B2545]"
        : "text-white/95 hover:text-[#C6A77D] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
    } ${active && !scrolled ? "text-[#C6A77D] after:w-full" : ""}`;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 h-[76px] transition-colors duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D8]/80 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Sông Hàn Premium Residence"
              width={160}
              height={52}
              priority
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href as "/" | "/news" | "/contact"}
                  className={linkClass(scrolled, link.active)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(scrolled, link.active)}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openConsultationModal}
              className="hidden lg:inline-flex items-center gap-2 px-8 py-3 bg-[#C6A77D] text-white label-small font-semibold rounded-[3px] hover:bg-white hover:text-[#0B2545] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            >
              Nhận Tư Vấn
            </button>

            <button
              className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-[4px] border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A77D]/50 ${
                menuOpen || scrolled
                  ? "border-[#C6A77D]/70 bg-[#FAF8F5] text-[#0B2545] shadow-[0_8px_20px_rgba(11,37,69,0.12)]"
                  : "border-[#C6A77D] bg-[#071A31]/70 text-[#C6A77D] shadow-[0_8px_22px_rgba(0,0,0,0.22)] backdrop-blur"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FAF8F5] flex flex-col pt-[72px]"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  {link.isPage ? (
                    <Link
                      href={link.href as "/" | "/news" | "/contact"}
                      className="text-2xl font-serif text-[#1A1A1A] hover:text-[#C6A77D] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-serif)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-2xl font-serif text-[#1A1A1A] hover:text-[#C6A77D] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-serif)" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 pt-6 border-t border-[#E5E0D8]"
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#C6A77D] text-[#1A1A1A] label-small tracking-[0.12em] rounded-sm"
                  onClick={() => {
                    setMenuOpen(false);
                    openConsultationModal();
                  }}
                >
                  Nhận Tư Vấn
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
