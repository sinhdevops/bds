import { NextResponse } from "next/server";
import { getContactLeads } from "@/lib/supabaseContact";

export async function GET(request: Request) {
  const configuredToken = process.env.ADMIN_CONTACT_TOKEN;
  const requestToken = request.headers.get("x-admin-token");

  if (!configuredToken || requestToken !== configuredToken) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const contacts = await getContactLeads();
    return NextResponse.json({ contacts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load contact leads";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
