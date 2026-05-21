import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "sinh.dev.ops@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "BDS Da Nang <onboarding@resend.dev>";

type LeadRequest = {
  name?: string;
  phone?: string;
  email?: string;
  project?: string;
  interest?: string;
  channel?: string;
  source?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as LeadRequest | null;
  const name = body?.name?.trim() ?? "";
  const phone = body?.phone?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const project = body?.project?.trim() ?? "";
  const interest = body?.interest?.trim() ?? "";
  const channel = body?.channel?.trim() ?? "";
  const source = body?.source?.trim() ?? "Website";
  const message = body?.message?.trim() ?? "";

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const submittedAt = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date());

  const rows = [
    ["Họ và tên", name],
    ["Số điện thoại", phone],
    ["Email", email || "Không cung cấp"],
    ["Dự án / khu vực quan tâm", project || "Chưa xác định"],
    ["Nhu cầu", interest || "Chưa xác định"],
    ["Kênh liên hệ ưu tiên", channel || "Chưa xác định"],
    ["Nguồn", source],
    ["Thời gian", submittedAt],
    ["Ghi chú", message || "Không có"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e2d8;color:#6b5d4c;font-weight:600;width:140px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e8e2d8;color:#111827;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: RECIPIENT_EMAIL,
    subject: `Lead mới từ website: ${name} - ${phone}`,
    replyTo: email || undefined,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#faf8f5;padding:24px;color:#111827;">
        <h1 style="margin:0 0 16px;color:#0b2545;font-size:24px;">Khách hàng đăng ký tư vấn</h1>
        <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e8e2d8;">
          <tbody>${htmlRows}</tbody>
        </table>
      </div>
    `,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
