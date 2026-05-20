export type ProjectStatus = "open" | "under-construction" | "delivered" | "rumored";

export interface ProjectCatalogItem {
  slug: string;
  name: string;
  shortName: string;
  status: ProjectStatus;
  statusLabel: string;
  location: string;
  address: string;
  priceFrom: number | null;
  priceTo: number | null;
  floors: number | null;
  totalUnits: number | null;
  area: string;
  views: string[];
  idealFor: string;
  handover: string;
  heroImage: string;
  thumbnail: string;
  gallery: string[];
  badge: string;
  segment: "river" | "bridge" | "ready" | "urban";
  summary: string;
  contentFile: string;
  sourceNotes: string[];
}

export const PROJECT_CATALOG: ProjectCatalogItem[] = [
  {
    slug: "sun-solar-residence",
    name: "Sun Solar Residence",
    shortName: "Sun Solar",
    status: "open",
    statusLabel: "Đang giới thiệu",
    location: "Đà Nẵng",
    address: "Khu vực trung tâm ven sông Hàn",
    priceFrom: null,
    priceTo: null,
    floors: 23,
    totalUnits: null,
    area: "Studio - 3PN",
    views: ["Sông Hàn", "Cầu Rồng", "Trung tâm"],
    idealFor: "Khách muốn căn hộ đô thị mới, dễ khai thác cho thuê và có câu chuyện tăng giá theo hạ tầng.",
    handover: "Đang cập nhật",
    heroImage: "/images/projects/sun-solar-hero.jpg",
    thumbnail: "/images/projects/sun-solar-hero.jpg",
    gallery: ["/images/projects/sun-solar-location.jpg", "/images/projects/sun-solar-masterplan.jpg"],
    badge: "Dự án mới",
    segment: "urban",
    summary:
      "Sun Solar Residence được truyền thông như một sản phẩm căn hộ đô thị của Sun Group tại Đà Nẵng, nhấn mạnh lợi thế kết nối trung tâm và khả năng khai thác dòng tiền.",
    contentFile: "sun-solar-residence.md",
    sourceNotes: ["sungroupsr.vn"],
  },
  {
    slug: "sun-symphony-5",
    name: "Sun Symphony 5",
    shortName: "Symphony 5",
    status: "open",
    statusLabel: "Đang mở bán",
    location: "Sơn Trà, Đà Nẵng",
    address: "Trần Hưng Đạo - Lê Văn Duyệt",
    priceFrom: 2.8,
    priceTo: 18,
    floors: 39,
    totalUnits: 396,
    area: "52 - 158m²",
    views: ["Sông Hàn", "Biển Mỹ Khê", "Pháo hoa"],
    idealFor: "Nhà đầu tư cần vị trí ven sông, sản phẩm dễ truyền thông và tiềm năng khai thác thuê cao.",
    handover: "Dự kiến 2025 - 2026",
    heroImage: "/images/projects/sun-symphony-hero.png",
    thumbnail: "/images/projects/sun-symphony-hero.png",
    gallery: ["/images/projects/sun-symphony-tower.jpg", "/images/hero-song-han-clean.png"],
    badge: "Ven sông Hàn",
    segment: "river",
    summary:
      "Sun Symphony 5 là phân khu căn hộ nổi bật trong tổ hợp Sun Symphony Residences, đặt trọng tâm vào trải nghiệm sống ven sông Hàn và tiêu chuẩn nghỉ dưỡng trong đô thị.",
    contentFile: "sun-symphony-5.md",
    sourceNotes: ["symphonyresidence.vn", "dinhtanbds.com"],
  },
  {
    slug: "capital-square-da-nang",
    name: "The Capital Square Đà Nẵng",
    shortName: "Capital Square",
    status: "open",
    statusLabel: "Đang nhận thông tin",
    location: "Sơn Trà, Đà Nẵng",
    address: "Trần Hưng Đạo, An Hải Bắc",
    priceFrom: null,
    priceTo: null,
    floors: null,
    totalUnits: null,
    area: "Căn hộ cao tầng, thương mại dịch vụ",
    views: ["Sông Hàn", "Trung tâm", "Biển"],
    idealFor: "Khách tìm sản phẩm trung tâm, ưu tiên thiết kế hiện đại và hệ tiện ích đô thị.",
    handover: "Đang cập nhật",
    heroImage: "/images/projects/capital-square-hero.png",
    thumbnail: "/images/projects/capital-square-street.jpg",
    gallery: ["/images/projects/capital-square-masterplan.png", "/images/projects/capital-square-street.jpg"],
    badge: "Tâm điểm mới",
    segment: "urban",
    summary:
      "The Capital Square Đà Nẵng được phát triển theo tinh thần khu phức hợp đô thị hiện đại, khai thác lợi thế trục Trần Hưng Đạo và không gian ven sông.",
    contentFile: "capital-square-da-nang.md",
    sourceNotes: ["thecapitalsquare.vn"],
  },
  {
    slug: "sun-ponte-residence",
    name: "Sun Ponte Residence",
    shortName: "Sun Ponte",
    status: "under-construction",
    statusLabel: "Đang xây dựng",
    location: "Sơn Trà, Đà Nẵng",
    address: "Khu vực Cầu Rồng - Sơn Trà",
    priceFrom: 3.5,
    priceTo: 22,
    floors: 35,
    totalUnits: 352,
    area: "58 - 175m²",
    views: ["Cầu Rồng", "Sông Hàn", "Trung tâm"],
    idealFor: "Khách thích vị trí biểu tượng, sản phẩm view Cầu Rồng và giá trị khai thác theo du lịch đô thị.",
    handover: "Dự kiến 2026",
    heroImage: "/images/projects/sun-ponte-hero.jpg",
    thumbnail: "/images/projects/sun-ponte-hero.jpg",
    gallery: ["/images/hero-song-han-clean.png", "/images/projects/sun-symphony-tower.jpg"],
    badge: "View Cầu Rồng",
    segment: "bridge",
    summary:
      "Sun Ponte Residence hướng đến nhóm khách hàng muốn sở hữu căn hộ cao cấp cạnh biểu tượng Cầu Rồng, nơi nhịp sống trung tâm và du lịch giao thoa.",
    contentFile: "sun-ponte-residence.md",
    sourceNotes: ["dinhtanbds.com", "sunpropertygroup.vn"],
  },
  {
    slug: "sun-cosmo-residence",
    name: "Sun Cosmo Residence",
    shortName: "Sun Cosmo",
    status: "delivered",
    statusLabel: "Đã bàn giao",
    location: "Hải Châu, Đà Nẵng",
    address: "Nguyễn Tất Thành, Hải Châu",
    priceFrom: 3,
    priceTo: 14,
    floors: 33,
    totalUnits: 318,
    area: "55 - 148m²",
    views: ["Sông Hàn", "Thành phố", "Ngũ Hành Sơn"],
    idealFor: "Khách muốn nhận nhà nhanh, kiểm chứng sản phẩm thực tế và khai thác dòng tiền sớm.",
    handover: "Đã bàn giao",
    heroImage: "/images/projects/sun-cosmo-hero.jpg",
    thumbnail: "/images/projects/sun-cosmo-hero.jpg",
    gallery: ["/images/hero-song-han-clean.png", "/images/projects/sun-ponte-hero.jpg"],
    badge: "Nhận nhà ngay",
    segment: "ready",
    summary:
      "Sun Cosmo Residence là lựa chọn thực tế cho khách cần sản phẩm đã hình thành, có thể xem nhà và đánh giá khả năng khai thác ngay.",
    contentFile: "sun-cosmo-residence.md",
    sourceNotes: ["sunpropertygroup.vn", "dinhtanbds.com"],
  },
];

export function getCatalogProject(slug: string) {
  return PROJECT_CATALOG.find((project) => project.slug === slug) ?? null;
}

export function getCatalogProjectSlugs() {
  return PROJECT_CATALOG.map((project) => project.slug);
}
