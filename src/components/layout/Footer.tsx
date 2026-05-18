"use client";

import { Link } from "@/i18n/navigation";

const LINKS = {
  project: [
    { label: "Giới Thiệu", href: "/about" },
    { label: "Căn Hộ Của SRT", href: "/project" },
    { label: "Tin Tức BĐS", href: "/news" },
    { label: "Liên Hệ Ngay", href: "/contact" },
  ],
  info: [
    { label: "Chính Sách Bán Hàng", href: "/sales-policy" },
    { label: "Điều khoản sử dụng", href: "/terms" },
    { label: "Chính sách bảo mật", href: "/privacy-policy" },
    { label: "Pháp lý dự án", href: "/legal" },
  ],
} as const;

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <rect x="2" y="2" width="16" height="16" rx="4" />
        <circle cx="10" cy="10" r="4" />
        <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M17.5 5.5s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C12.8 2.5 10 2.5 10 2.5s-2.8 0-4.7.1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2.4 7.1 2.4 8.6v1.4c0 1.5.1 3.1.1 3.1s.2 1.4.8 2c.8.8 1.8.8 2.3.8C7 16 10 16 10 16s2.8 0 4.7-.1c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.1-1.6.1-3.1V8.6c0-1.5-.1-3.1-.1-3.1zM8.3 12.5v-5l5.4 2.5-5.4 2.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#141412] relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A77D]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_160px_160px_200px] gap-10 lg:gap-16 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-5">
              <p
                className="font-serif text-white text-[1.25rem] tracking-[0.1em] uppercase leading-none mb-1 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                SRT Miền Trung
              </p>
              <p className="label-small text-[#C6A77D] tracking-[0.2em] font-semibold">REAL ESTATE</p>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs mb-6">
              Nhà phân phối chiến lược các dự án bất động sản cao cấp của Tập đoàn Sun Group tại Đà Nẵng.
            </p>
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 20" fill="none" stroke="#C6A77D" strokeWidth="1.2" className="w-3.5 h-4.5 mt-0.5 flex-shrink-0">
                <path d="M8 1C4.7 1 2 3.7 2 7c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6z" />
                <circle cx="8" cy="7" r="2" />
              </svg>
              <p className="text-white/40 text-xs font-light leading-relaxed">
                Lô 12, Khu B2-4, Đường Lê Văn Duyệt,<br />
                Phường Nại Hiên Đông, Quận Sơn Trà, TP. Đà Nẵng
              </p>
            </div>
          </div>

          {/* Links - Project */}
          <div>
            <p className="label-small text-[#555555] mb-5 font-semibold">Dự Án</p>
            <ul className="flex flex-col gap-3">
              {LINKS.project.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 font-light hover:text-[#C6A77D] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Info */}
          <div>
            <p className="label-small text-[#555555] mb-5 font-semibold">Thông Tin</p>
            <ul className="flex flex-col gap-3">
              {LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 font-light hover:text-[#C6A77D] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-small text-[#555555] mb-5 font-semibold">Liên Hệ</p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0981814814"
                className="flex items-center gap-2 text-white/60 hover:text-[#C6A77D] transition-colors duration-300 group"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3.5 text-[#C6A77D]">
                  <path d="M13 10.7l-1.9.2c-.4 0-.8.3-1 .6-.2.3-.4 1.2-3.1-1.5C4.4 7.3 5.3 7 5.5 6.7c.3-.3.5-.6.6-1l.2-1.9c0-.4-.1-.8-.3-1.1L5.2 1.9c-.3-.4-.9-.5-1.4-.2L2.3 2.7C1.7 3 1.5 3.7 1.7 4.3c.6 2.8 2.3 5.6 4.8 8.1 2.5 2.5 5.3 4.2 8.1 4.8.6.1 1.3-.1 1.6-.6l1.1-1.5c.3-.5.2-1.1-.2-1.4l-.9-1c-.3-.2-.7-.4-1.2-.3l.9-.7z" />
                </svg>
                <span className="text-sm font-semibold">0981 814 814</span>
              </a>
              <a
                href="mailto:info@srtmientrung.vn"
                className="flex items-center gap-2 text-white/60 hover:text-[#C6A77D] transition-colors duration-300"
              >
                <svg viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-3.5 h-3 text-[#C6A77D]">
                  <rect x="1" y="1" width="14" height="10" rx="1" />
                  <path d="M1 3l7 5 7-5" />
                </svg>
                <span className="text-sm font-light">info@srtmientrung.vn</span>
              </a>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#C6A77D]/60 hover:text-[#C6A77D] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-light">
            © 2026 SRT Miền Trung. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-xs text-white/25 font-light hover:text-white/50 transition-colors duration-300"
            >
              Điều khoản
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs text-white/25 font-light hover:text-white/50 transition-colors duration-300"
            >
              Chính sách BM
            </Link>
            <Link
              href="/legal"
              className="text-xs text-white/25 font-light hover:text-white/50 transition-colors duration-300"
            >
              Pháp lý
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
