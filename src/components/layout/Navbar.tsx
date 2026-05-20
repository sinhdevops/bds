"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "@/i18n/navigation";
import { openConsultationModal } from "@/components/shared/ConsultationModal";

type NavLink = {
  label: string;
  href: "/" | "/project" | "/news" | "/contact";
  match: string[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Trang Chủ", href: "/", match: ["/"] },
  { label: "Dự Án", href: "/project", match: ["/du-an", "/project"] },
  { label: "Tin Tức", href: "/news", match: ["/tin-tuc", "/news"] },
  { label: "Liên Hệ", href: "/contact", match: ["/lien-he", "/contact"] },
];

const headerMotion = {
  initial: { y: -80, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref = useMemo(() => {
    const normalized = pathname || "/";
    return NAV_LINKS.find((link) =>
      link.match.some((match) => (match === "/" ? normalized === "/" : normalized.startsWith(match)))
    )?.href;
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const openLeadModal = useCallback(() => {
    setMenuOpen(false);
    openConsultationModal();
  }, []);

  return (
    <>
      <motion.header
        {...headerMotion}
        className={`fixed left-0 right-0 top-0 z-50 h-[76px] transition-colors duration-500 ${
          scrolled
            ? "border-b border-[#E5E0D8]/80 bg-[#FAF8F5]/95 shadow-[0_1px_20px_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="BĐS Đà Nẵng"
              width={160}
              height={52}
              priority
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          <DesktopNav activeHref={activeHref} scrolled={scrolled} />

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openLeadModal}
              className="hidden items-center gap-2 rounded-[3px] bg-[#C6A77D] px-8 py-3 label-small font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white hover:text-[#0B2545] lg:inline-flex"
            >
              Nhận Tư Vấn
            </button>

            <MenuButton open={menuOpen} scrolled={scrolled} onClick={toggleMenu} />
          </div>
        </div>
      </motion.header>

      <MobileMenu
        activeHref={activeHref}
        open={menuOpen}
        onClose={closeMenu}
        onOpenLeadModal={openLeadModal}
      />
    </>
  );
}

type NavProps = {
  activeHref?: NavLink["href"];
  scrolled?: boolean;
};

const DesktopNav = memo(function DesktopNav({ activeHref, scrolled = false }: NavProps) {
  return (
    <nav className="hidden items-center gap-7 lg:flex">
      {NAV_LINKS.map((link) => (
        <NavItem key={link.href} link={link} active={activeHref === link.href} scrolled={scrolled} />
      ))}
    </nav>
  );
});

type NavItemProps = {
  link: NavLink;
  active: boolean;
  scrolled: boolean;
};

const NavItem = memo(function NavItem({ link, active, scrolled }: NavItemProps) {
  const className = `label-small link-underline font-semibold transition-colors duration-300 ${
    scrolled
      ? "text-[#555555] hover:text-[#0B2545]"
      : "text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-[#C6A77D]"
  } ${active && !scrolled ? "text-[#C6A77D] after:w-full" : ""}`;

  return (
    <Link href={link.href} className={className} aria-current={active ? "page" : undefined}>
      {link.label}
    </Link>
  );
});

type MenuButtonProps = {
  open: boolean;
  scrolled: boolean;
  onClick: () => void;
};

const MenuButton = memo(function MenuButton({ open, scrolled, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-[4px] border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A77D]/50 lg:hidden ${
        open || scrolled
          ? "border-[#C6A77D]/70 bg-[#FAF8F5] text-[#0B2545] shadow-[0_8px_20px_rgba(11,37,69,0.12)]"
          : "border-[#C6A77D] bg-[#071A31]/70 text-[#C6A77D] shadow-[0_8px_22px_rgba(0,0,0,0.22)] backdrop-blur"
      }`}
      onClick={onClick}
      aria-label={open ? "Đóng menu" : "Mở menu"}
      aria-expanded={open}
    >
      {open ? <FiX className="h-6 w-6" aria-hidden="true" /> : <FiMenu className="h-6 w-6" aria-hidden="true" />}
    </button>
  );
});

type MobileMenuProps = {
  activeHref?: NavLink["href"];
  open: boolean;
  onClose: () => void;
  onOpenLeadModal: () => void;
};

const MobileMenu = memo(function MobileMenu({
  activeHref,
  open,
  onClose,
  onOpenLeadModal,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-[#FAF8F5] pt-[72px]"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <nav className="flex flex-col gap-6 p-8">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`font-serif text-2xl transition-colors duration-300 ${
                    activeHref === link.href ? "text-[#C6A77D]" : "text-[#1A1A1A] hover:text-[#C6A77D]"
                  }`}
                  style={{ fontFamily: "var(--font-serif)" }}
                  onClick={onClose}
                  aria-current={activeHref === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 border-t border-[#E5E0D8] pt-6"
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-sm bg-[#C6A77D] px-8 py-3 label-small tracking-[0.12em] text-[#1A1A1A]"
                onClick={onOpenLeadModal}
              >
                Nhận Tư Vấn
              </button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
