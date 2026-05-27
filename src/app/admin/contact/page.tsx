import Link from "next/link";
import { getContactLeads } from "@/lib/supabaseContact";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatDate(value?: string) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Bangkok",
  }).format(new Date(value));
}

function Badge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#0B2545] px-3 py-1 text-sm font-bold text-white">
      {count}
    </span>
  );
}

export default async function AdminContactPage() {
  let contacts: Awaited<ReturnType<typeof getContactLeads>> = [];
  let errorMessage = "";

  try {
    contacts = await getContactLeads();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Không tải được dữ liệu contact";
  }

  const today = contacts.filter((c) => {
    if (!c.created_at) return false;
    const d = new Date(c.created_at);
    const now = new Date();
    return (
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  }).length;

  return (
    <main className="min-h-screen bg-[#F4F1EC] font-[var(--font-montserrat)]">
      {/* Header */}
      <header className="border-b border-[#E0D9CF] bg-white px-6 py-5 shadow-sm sm:px-10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#0B2545]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6A77D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#9C7B5D]">
                Admin Panel
              </p>
              <h1 className="text-base font-bold text-[#0B2545]">Quản lý Contact</h1>
            </div>
          </div>

          <Link
            href="/admin/contact"
            className="inline-flex items-center gap-2 rounded-[6px] border border-[#E0D9CF] bg-white px-4 py-2 text-xs font-semibold text-[#0B2545] shadow-sm transition-colors hover:bg-[#F4F1EC]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Làm mới
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10">
        {/* Stats row */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <StatCard label="Tổng contact" value={contacts.length} color="bg-[#0B2545]" />
          <StatCard label="Hôm nay" value={today} color="bg-[#C6A77D]" />
          <StatCard
            label="Nguồn dữ liệu"
            value="Supabase"
            isText
            color="bg-[#2D6A4F]"
          />
        </div>

        {errorMessage ? (
          <div className="flex items-start gap-3 rounded-[8px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-none">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[10px] border border-[#E0D9CF] bg-white shadow-[0_4px_24px_rgba(11,37,69,0.07)]">
            {/* Table header */}
            <div className="flex items-center justify-between border-b border-[#E0D9CF] px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#0B2545]">Danh sách khách hàng</span>
                <Badge count={contacts.length} />
              </div>
              <span className="text-xs font-medium text-[#888]">
                Mới nhất ở trên
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#F8F5F0]">
                    <th className="px-6 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.13em] text-[#888]">
                      #
                    </th>
                    <th className="px-6 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.13em] text-[#888]">
                      Họ và tên
                    </th>
                    <th className="px-6 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.13em] text-[#888]">
                      Số điện thoại
                    </th>
                    <th className="px-6 py-3.5 text-[0.67rem] font-bold uppercase tracking-[0.13em] text-[#888]">
                      Ngày giờ để lại thông tin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-16 text-center text-sm font-medium text-[#999]"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C6A77D" strokeWidth="1.5">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                          Chưa có contact nào trong bảng.
                        </div>
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact, index) => (
                      <tr
                        key={`${contact.phone}-${contact.created_at}-${index}`}
                        className="border-t border-[#F0EBE3] transition-colors hover:bg-[#FDFAF6]"
                      >
                        <td className="px-6 py-4 text-xs font-semibold text-[#BBBBBB]">
                          {contacts.length - index}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold text-[#0B2545]">
                            {contact.name || "—"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={`tel:${contact.phone}`}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0B2545] transition-colors hover:text-[#9C7B5D]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C6A77D]">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.78a16 16 0 0 0 6.29 6.29l1.87-1.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            {contact.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-[#666]">
                          {formatDate(contact.created_at)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {contacts.length > 0 && (
              <div className="border-t border-[#F0EBE3] bg-[#F8F5F0] px-6 py-3 text-right text-xs font-medium text-[#999]">
                Hiển thị {contacts.length} contact · Bảng{" "}
                <code className="rounded bg-[#E8E2D8] px-1.5 py-0.5 font-mono text-[0.7rem] text-[#555]">
                  contact
                </code>{" "}
                · Supabase
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  color,
  isText = false,
}: {
  label: string;
  value: number | string;
  color: string;
  isText?: boolean;
}) {
  return (
    <div className="rounded-[8px] border border-[#E0D9CF] bg-white px-5 py-4 shadow-sm">
      <p className="text-[0.67rem] font-semibold uppercase tracking-[0.13em] text-[#999]">
        {label}
      </p>
      <p
        className={`mt-2 text-2xl font-bold ${isText ? "text-base font-semibold text-[#555]" : "text-[#0B2545]"}`}
      >
        {isText ? (
          <span className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            {value}
          </span>
        ) : (
          value
        )}
      </p>
    </div>
  );
}
