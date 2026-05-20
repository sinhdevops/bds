import { Link } from "@/i18n/navigation";

type InfoKey = "about" | "policy" | "faq";

const INFO_LINKS: { key: InfoKey; label: string; href: "/about" | "/sales-policy" | "/legal" }[] = [
  { key: "about", label: "Về tôi", href: "/about" },
  { key: "policy", label: "Chính sách", href: "/sales-policy" },
  { key: "faq", label: "FAQ", href: "/legal" },
];

interface InfoPageLayoutProps {
  active: InfoKey;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function InfoPageLayout({
  active,
  eyebrow,
  title,
  description,
  children,
}: InfoPageLayoutProps) {
  return (
    <section className="bg-[#FAF8F5] pt-[76px]">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] lg:grid-cols-[300px_1fr]">
        <aside className="bg-[#11110F] px-8 py-10 lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:px-10 lg:py-14">
          <p className="mb-8 text-[0.76rem] font-bold uppercase tracking-[0.24em] text-white/28">
            Thông tin
          </p>
          <nav className="flex gap-5 overflow-x-auto lg:flex-col lg:gap-7">
            {INFO_LINKS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`whitespace-nowrap text-lg font-medium transition-colors duration-300 lg:text-xl ${
                  active === item.key ? "text-[#C6A77D]" : "text-white/62 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 hidden border-t border-white/10 pt-8 lg:block">
            <p className="text-sm font-medium leading-relaxed text-white/42">
              Thông tin được trình bày ngắn gọn để khách hàng dễ kiểm tra trước khi liên hệ tư vấn.
            </p>
          </div>
        </aside>

        <main>
          <div className="border-b border-[#E5E0D8] bg-white px-6 py-14 lg:px-14 lg:py-20">
            <p className="label-small mb-5 text-[#9C7B5D]">{eyebrow}</p>
            <h1
              className="max-w-3xl font-serif text-4xl font-normal leading-tight text-[#111111] lg:text-6xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-[1.85] text-[#666666]">
              {description}
            </p>
          </div>

          <div className="px-6 py-12 lg:px-14 lg:py-16">{children}</div>
        </main>
      </div>
    </section>
  );
}
