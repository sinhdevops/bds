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
  priceDisplay?: string;
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
  seoKeywords?: string[];
}

export const PROJECT_CATALOG: ProjectCatalogItem[] = [
  {
    slug: "fours-tower-da-nang",
    name: "FourS Tower Đà Nẵng",
    shortName: "FourS Tower",
    status: "open",
    statusLabel: "Đang nhận giỏ hàng",
    location: "Nam Đà Nẵng",
    address: "Khu vực trung tâm phát triển mới Nam Đà Nẵng",
    priceFrom: 3,
    priceTo: null,
    priceDisplay: "3XX tỷ",
    floors: null,
    totalUnits: null,
    area: "1BR+ - 2BR sân vườn",
    views: ["Sông", "Công viên", "Trung tâm"],
    idealFor: "Khách cần căn hộ có pháp lý cần xác minh, chính sách thanh toán cần đối chiếu và thông tin giỏ hàng tham khảo tại khu vực Nam Đà Nẵng.",
    handover: "Đang cập nhật",
    heroImage: "/images/projects/fours/fours-banner.webp",
    thumbnail: "/images/projects/fours/fours-banner.webp",
    gallery: ["/images/projects/sun-symphony-tower.jpg", "/images/projects/capital-square-street.jpg"],
    badge: "Ưu tiên tư vấn",
    segment: "urban",
    summary:
      "FourS Tower Đà Nẵng được giới thiệu như một lựa chọn căn hộ tại Nam Đà Nẵng, cần đối chiếu pháp lý, giỏ hàng, view sông - công viên và chính sách thanh toán tại thời điểm tư vấn.",
    contentFile: "fours-tower-da-nang.md",
    sourceNotes: ["Thông tin truyền thông dự án"],
    seoKeywords: [
      "fours tower đà nẵng",
      "căn hộ fours tower",
      "căn hộ view biển đà nẵng",
      "căn hộ gần biển mỹ khê",
      "căn hộ cao cấp đà nẵng",
      "căn hộ sơn trà đà nẵng",
      "mua căn hộ đà nẵng",
      "mua căn hộ fours tower",
      "bán căn hộ fours đà nẵng",
      "giá fours tower",
      "bảng giá fours tower",
      "giá căn hộ fours tower",
      "căn hộ đà nẵng view biển",
      "căn hộ cao cấp sơn trà",
      "căn hộ nghỉ dưỡng đà nẵng",
      "apartment da nang beach",
      "my khe beach apartment",
      "luxury apartment da nang",
      "condo da nang",
      "beachfront apartment da nang",
      "đầu tư căn hộ đà nẵng",
      "căn hộ airbnb đà nẵng",
      "căn hộ biển mỹ khê",
      "căn hộ võ nguyên giáp",
      "bất động sản đà nẵng",
      "fours apartment da nang"
    ],
  },
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
    idealFor: "Khách muốn căn hộ đô thị mới, cần đánh giá theo thị trường, giá vào, phương án vận hành và nhu cầu thực tế.",
    handover: "Đang cập nhật",
    heroImage: "/images/projects/sun-solar-hero.jpg",
    thumbnail: "/images/projects/sun-solar-hero.jpg",
    gallery: ["/images/projects/sun-solar-location.jpg", "/images/projects/sun-solar-masterplan.jpg"],
    badge: "Dự án mới",
    segment: "urban",
    summary:
      "Sun Solar Residence được truyền thông như một sản phẩm căn hộ đô thị tại Đà Nẵng, nhấn mạnh lợi thế kết nối trung tâm và nhu cầu đánh giá phương án vận hành thực tế.",
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
    priceFrom: 2.1,
    priceTo: 18,
    floors: 39,
    totalUnits: 396,
    area: "52 - 158m²",
    views: ["Sông Hàn", "Biển Mỹ Khê", "Pháo hoa"],
    idealFor: "Khách cân nhắc tài sản ven sông, cần đánh giá theo thị trường, giá vào, phương án vận hành và nhu cầu thực tế.",
    handover: "Dự kiến 2025 - 2026",
    heroImage: "/images/Phoi-canh-Sun-Symphony-5.jpg",
    thumbnail: "/images/Phoi-canh-Sun-Symphony-5.jpg",
    gallery: ["/images/projects/sun-symphony-tower.jpg", "/images/hero-song-han-clean.png"],
    badge: "Ven sông Hàn",
    segment: "river",
    summary:
      "Sun Symphony 5 là phân khu căn hộ nổi bật trong tổ hợp Sun Symphony Residences, đặt trọng tâm vào trải nghiệm sống ven sông Hàn và tiêu chuẩn nghỉ dưỡng trong đô thị.",
    contentFile: "sun-symphony-5.md",
    sourceNotes: ["symphonyresidence.vn", "dinhtanbds.com"],
    seoKeywords: [
      "chung cư đà nẵng",
      "căn hộ đà nẵng",
      "symphony 5",
      "mua symphony 5",
      "mua symphony 5 đà nẵng",
      "symphony 5 đà nẵng",
    ],
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
      "Sun Ponte Residence hướng đến nhóm khách hàng quan tâm căn hộ cạnh biểu tượng Cầu Rồng, nơi nhịp sống trung tâm và du lịch giao thoa.",
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
    idealFor: "Khách muốn nhận nhà nhanh, kiểm chứng sản phẩm thực tế và cân nhắc phương án vận hành theo nhu cầu.",
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
