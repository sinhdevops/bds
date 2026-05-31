export function trackMetaLead() {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "Lead");
}
