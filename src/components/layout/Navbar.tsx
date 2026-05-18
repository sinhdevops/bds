"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  { label: "Trang Chủ", href: "/" },
  { label: "Về SRT Miền Trung", href: "/about" },
  { label: "Dự Án", href: "/project" },
  { label: "Tin Tức", href: "/news" },
  { label: "Chính Sách", href: "/sales-policy" },
  { label: "Liên Hệ", href: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D8]/80 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[76px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="SRT Miền Trung"
              width={160}
              height={52}
              priority
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`label-small link-underline transition-colors duration-300 font-semibold ${
                  scrolled
                    ? "text-[#555555] hover:text-[#0B2545]"
                    : "text-white/95 hover:text-[#C6A77D] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-[#C6A77D] text-[#1A1A1A] label-small font-semibold tracking-[0.12em] rounded-sm hover:bg-[#0B2545] hover:text-white transition-all duration-300 shadow-sm"
            >
              Đăng Ký Tư Vấn
            </Link>

            <button
              className="lg:hidden p-2 flex flex-col gap-1.5 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-[#1A1A1A]" : scrolled ? "bg-[#1A1A1A]" : "bg-white"}`}
              />
              <span
                className={`block w-4 h-px transition-all duration-300 ${menuOpen ? "opacity-0 bg-[#1A1A1A]" : scrolled ? "bg-[#1A1A1A]" : "bg-white"}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-[#1A1A1A]" : scrolled ? "bg-[#1A1A1A]" : "bg-white"}`}
              />
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
                  <Link
                    href={link.href}
                    className="text-2xl font-serif text-[#1A1A1A] hover:text-[#C6A77D] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-serif)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 pt-6 border-t border-[#E5E0D8]"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#C6A77D] text-[#1A1A1A] label-small tracking-[0.12em] rounded-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng Ký Tư Vấn
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
