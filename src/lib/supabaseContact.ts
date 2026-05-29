export type ContactLeadInput = {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  interest?: string;
  channel?: string;
  source?: string;
  message?: string;
};

export type ContactLead = ContactLeadInput & {
  id?: string | number;
  created_at?: string;
};

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY ?? process.env.SUPABASE_PUBLISHABLE_KEY;
const CONTACT_TABLE = "contact";

function getSupabaseConfig() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Missing Supabase configuration");
  }

  return {
    url: SUPABASE_URL.replace(/\/$/, ""),
    key: SUPABASE_KEY,
  };
}

function supabaseHeaders() {
  const { key } = getSupabaseConfig();

  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

export async function createContactLead(input: ContactLeadInput) {
  const { url } = getSupabaseConfig();
  const payload = {
    name: input.name,
    phone: input.phone,
    email: input.email ?? "",
    project: input.project ?? "",
    interest: input.interest ?? "",
    channel: input.channel ?? "",
    source: input.source ?? "",
    message: input.message ?? "",
    created_at: new Date().toISOString(),
  };
  const fallbackPayload = {
    name: input.name,
    phone: input.phone,
    created_at: payload.created_at,
  };

  const response = await fetch(`${url}/rest/v1/${CONTACT_TABLE}`, {
    method: "POST",
    headers: {
      ...supabaseHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    if (message.includes("Could not find") || message.includes("schema cache")) {
      const fallbackResponse = await fetch(`${url}/rest/v1/${CONTACT_TABLE}`, {
        method: "POST",
        headers: {
          ...supabaseHeaders(),
          Prefer: "return=representation",
        },
        body: JSON.stringify(fallbackPayload),
      });

      if (fallbackResponse.ok) {
        const fallbackData = (await fallbackResponse.json().catch(() => [])) as ContactLead[];
        return fallbackData[0] ?? fallbackPayload;
      }
    }
    throw new Error(message || "Unable to save contact lead");
  }

  const data = (await response.json().catch(() => [])) as ContactLead[];
  return data[0] ?? payload;
}

export async function getContactLeads() {
  const { url } = getSupabaseConfig();
  const response = await fetch(
    `${url}/rest/v1/${CONTACT_TABLE}?select=name,phone,created_at&order=created_at.desc`,
    {
      method: "GET",
      headers: supabaseHeaders(),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Unable to load contact leads");
  }

  return (await response.json()) as ContactLead[];
}
