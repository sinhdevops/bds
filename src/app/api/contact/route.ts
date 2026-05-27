import { NextResponse } from "next/server";
import { getContactLeads } from "@/lib/supabaseContact";

export async function GET() {
  try {
    const contacts = await getContactLeads();
    return NextResponse.json({ contacts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load contact leads";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
