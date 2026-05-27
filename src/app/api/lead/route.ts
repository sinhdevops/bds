import { NextResponse } from "next/server";
import { createContactLead, type ContactLeadInput } from "@/lib/supabaseContact";

type LeadRequest = Partial<ContactLeadInput>;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadRequest | null;
  const name = body?.name?.trim() ?? "";
  const phone = body?.phone?.trim() ?? "";

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  try {
    const contact = await createContactLead({
      name,
      phone,
      email: body?.email?.trim() ?? "",
      project: body?.project?.trim() ?? "",
      interest: body?.interest?.trim() ?? "",
      channel: body?.channel?.trim() ?? "",
      source: body?.source?.trim() ?? "Website",
      message: body?.message?.trim() ?? "",
    });

    return NextResponse.json({ ok: true, contact });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save contact lead";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
