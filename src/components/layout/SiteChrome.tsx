"use client";

import { usePathname } from "next/navigation";
import FloatingContact from "@/components/layout/FloatingContact";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StickyBar from "@/components/layout/StickyBar";

const CUSTOM_LANDING_PATHS = ["/du-an/fours-tower-da-nang", "/project/fours-tower-da-nang"];

function isCustomLanding(pathname: string) {
  return CUSTOM_LANDING_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function SiteTopChrome() {
  const pathname = usePathname();
  if (isCustomLanding(pathname || "")) return null;
  return <Navbar />;
}

export function SiteBottomChrome() {
  const pathname = usePathname();
  if (isCustomLanding(pathname || "")) return null;

  return (
    <>
      <Footer />
      <FloatingContact />
      <StickyBar />
    </>
  );
}
