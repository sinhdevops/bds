import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vi"],
  defaultLocale: "vi",
  localePrefix: "never",
  pathnames: {
    "/": "/",
    "/about": "/ve-chung-toi",
    "/project": "/du-an",
    "/project/[slug]": "/du-an/[slug]",
    "/news": "/tin-tuc",
    "/contact": "/lien-he",
    "/sales-policy": "/chinh-sach-ban-hang",
    "/terms": "/dieu-khoan",
    "/privacy-policy": "/chinh-sach-bao-mat",
    "/legal": "/phap-ly",
  },
});
