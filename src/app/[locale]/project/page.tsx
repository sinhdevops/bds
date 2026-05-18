import type { Metadata } from "next";
import ProjectHero from "@/components/page/project/ProjectHero";
import ProjectGrid from "@/components/page/project/ProjectGrid";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srtmientrung.vn";
const pageUrl = `${siteUrl}/project`;

export const metadata: Metadata = {
  title: "Dự Án Căn Hộ Cao Cấp Đà Nẵng — Sun Symphony, Sun Ponte, Sun Cosmo",
  description:
    "Danh sách các dự án căn hộ cao cấp Sun Group tại Đà Nẵng: Sun Symphony Residence, Sun Ponte Residence, Sun Cosmo Residence. Lý tưởng đầu tư từ Hà Nội — view sông Hàn, sở hữu lâu dài, giá từ 2.8 tỷ.",
  keywords: [
    "dự án căn hộ cao cấp Đà Nẵng",
    "Sun Symphony Residence",
    "Sun Ponte Residence",
    "Sun Cosmo Residence",
    "căn hộ view sông Hàn Đà Nẵng",
    "mua căn hộ Sun Group Đà Nẵng",
    "đầu tư bất động sản Đà Nẵng 2025",
    "bảng giá căn hộ Đà Nẵng",
    "Sun Group Đà Nẵng",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dự Án Căn Hộ Cao Cấp Đà Nẵng — Sun Symphony, Sun Ponte, Sun Cosmo",
    description:
      "Ba tổ hợp căn hộ cao cấp nhất Đà Nẵng: Sun Symphony, Sun Ponte, Sun Cosmo Residence. Đầu tư từ Hà Nội — pháp lý đầy đủ, sinh lời cao.",
    url: pageUrl,
    type: "website",
  },
};

export default function ProjectPage() {
  return (
    <>
      <ProjectHero />
      <ProjectGrid />
    </>
  );
}
