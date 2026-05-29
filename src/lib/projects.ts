export interface ApartmentType {
  code: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaRange?: string;
  view: string;
  priceFrom: string;
  priceTo?: string;
  image: string;
  available?: number;
}

export interface ProjectAmenity {
  name: string;
  desc: string;
  image: string;
  span?: string;
}

export interface NearbyPlace {
  icon: "plane" | "bridge" | "city" | "beach" | "mountain" | "hospital" | "market";
  name: string;
  time: string;
  distance: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  developer: string;
  distributor: string;
  status: "open" | "under-construction" | "delivered";
  statusLabel: string;
  location: string;
  fullAddress: string;
  floors: number;
  totalUnits: number;
  priceFrom: string;
  priceTo: string;
  completionYear: string;
  heroImage: string;
  heroVideo?: string;
  coverImages: string[];
  gallery: GalleryImage[];
  stats: { label: string; value: string; unit?: string }[];
  highlights: { icon: string; title: string; desc: string }[];
  apartments: ApartmentType[];
  amenities: ProjectAmenity[];
  nearbyPlaces: NearbyPlace[];
  mapDescription: string;
  seoTitle: string;
  seoDesc: string;
}

export const PROJECTS: Record<string, ProjectData> = {
  "sun-symphony-residence": {
    slug: "sun-symphony-residence",
    name: "Sun Symphony Residence",
    shortName: "Sun Symphony",
    tagline: "Khúc giao hưởng giữa lòng thành phố",
    description:
      "Sun Symphony Residence là tổ hợp căn hộ hạng sang tọa lạc tại vị trí đắc địa nhất ven bờ Sông Hàn — cung đường Trần Hưng Đạo tỷ đô. Kiến trúc lấy cảm hứng từ những nhịp sóng âm nhạc, tạo nên bản nhạc kiến trúc sống động giữa lòng Đà Nẵng. Mỗi căn hộ là một không gian sống nghỉ dưỡng đẳng cấp với tầm nhìn toàn cảnh sông biển.",
    developer: "Theo hồ sơ dự án",
    distributor: "BĐS Đà Nẵng",
    status: "open",
    statusLabel: "Đang Mở Bán — Symphony 5",
    location: "Sơn Trà, Đà Nẵng",
    fullAddress: "259 Trần Hưng Đạo, Phường An Hải Bắc, Quận Sơn Trà, Đà Nẵng",
    floors: 39,
    totalUnits: 396,
    priceFrom: "2.1",
    priceTo: "18",
    completionYear: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85&fit=crop",
    coverImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80", alt: "Phòng khách view Sông Hàn", caption: "Phòng khách tầng 28" },
      { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80", alt: "Master Bedroom", caption: "Master Bedroom cao cấp" },
      { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80", alt: "Hồ bơi vô cực", caption: "Infinity Pool tầng thượng" },
      { src: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=80", alt: "Sky Lounge", caption: "Sky Lounge & Bar" },
      { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80", alt: "Gym", caption: "Fitness Center" },
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80", alt: "Nhà bếp", caption: "Bếp trang bị đồ Miele" },
    ],
    stats: [
      { label: "Số tầng", value: "39", unit: "tầng" },
      { label: "Tổng căn", value: "396", unit: "căn" },
      { label: "Diện tích", value: "52 – 158", unit: "m²" },
      { label: "Giá từ", value: "2.1", unit: "Tỷ VND" },
    ],
    highlights: [
      {
        icon: "river",
        title: "Mặt Tiền Sông Hàn",
        desc: "Nhiều căn hộ có hướng nhìn ra sông Hàn hoặc biển Đông, tùy mã căn và tầng thực tế",
      },
      {
        icon: "location",
        title: "Cung Đường Tỷ Đô",
        desc: "Toạ lạc tại Trần Hưng Đạo — vị trí đắt giá nhất Đà Nẵng, kế bên các khách sạn 5 sao",
      },
      {
        icon: "star",
        title: "Tiện Ích 5 Sao",
        desc: "Hồ bơi, Sky Lounge, SPA, phòng gym, Kids Club và dịch vụ tiện ích theo chính sách vận hành dự án",
      },
      {
        icon: "invest",
        title: "Tiềm Năng Đầu Tư",
        desc: "Khả năng khai thác cho thuê cần được đánh giá theo vị trí, loại căn, giá vào và chính sách vận hành tại từng thời điểm",
      },
    ],
    apartments: [
      {
        code: "Studio",
        bedrooms: 0,
        bathrooms: 1,
        area: 52,
        view: "Sông Hàn",
        priceFrom: "2.1",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80",
        available: 12,
      },
      {
        code: "1 Phòng Ngủ",
        bedrooms: 1,
        bathrooms: 1,
        area: 66,
        areaRange: "63 – 70",
        view: "Sông Hàn",
        priceFrom: "3.8",
        priceTo: "4.5",
        image: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&q=80",
        available: 24,
      },
      {
        code: "2 Phòng Ngủ",
        bedrooms: 2,
        bathrooms: 2,
        area: 78,
        areaRange: "72 – 86",
        view: "Sông Hàn + Biển",
        priceFrom: "5.2",
        priceTo: "7.8",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80",
        available: 18,
      },
      {
        code: "3 Phòng Ngủ",
        bedrooms: 3,
        bathrooms: 3,
        area: 118,
        areaRange: "108 – 138",
        view: "Panorama 180°",
        priceFrom: "9.5",
        priceTo: "14",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80",
        available: 8,
      },
      {
        code: "Penthouse",
        bedrooms: 4,
        bathrooms: 4,
        area: 158,
        view: "Toàn Cảnh 360°",
        priceFrom: "15",
        priceTo: "18",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80",
        available: 4,
      },
    ],
    amenities: [
      {
        name: "Hồ Bơi Vô Cực Tầng 39",
        desc: "Infinity pool hướng Sông Hàn với tầm nhìn toàn cảnh",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85",
        span: "col-span-2 row-span-2",
      },
      {
        name: "Sky Lounge & Bar",
        desc: "Bar sky-top với wine cellar và cigar room",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "SPA & Wellness",
        desc: "8 phòng trị liệu, steam & sauna Finlandia",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "Fitness Center",
        desc: "Khu gym theo quy hoạch tiện ích dự án",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85",
        span: "col-span-2",
      },
    ],
    nearbyPlaces: [
      { icon: "beach", name: "Bãi biển Mỹ Khê", time: "5 phút", distance: "1.5km" },
      { icon: "bridge", name: "Cầu Rồng — Dragon Bridge", time: "3 phút", distance: "800m" },
      { icon: "plane", name: "Sân bay Quốc tế Đà Nẵng", time: "8 phút", distance: "4km" },
      { icon: "city", name: "Trung tâm Hành chính TP", time: "5 phút", distance: "1.8km" },
      { icon: "market", name: "Chợ Hàn & Phố đi bộ", time: "3 phút", distance: "600m" },
      { icon: "mountain", name: "Ngũ Hành Sơn", time: "20 phút", distance: "12km" },
    ],
    mapDescription:
      "Sun Symphony Residence tọa lạc tại vị trí trung tâm nhất của Đà Nẵng — cung đường Trần Hưng Đạo ven Sông Hàn, kết nối thuận tiện đến mọi tiện ích đô thị đẳng cấp.",
    seoTitle:
      "Sun Symphony Residence Đà Nẵng — Căn Hộ Hạng Sang Mặt Tiền Sông Hàn | BĐS Đà Nẵng",
    seoDesc:
      "Mua căn hộ Sun Symphony Residence Đà Nẵng — tổ hợp 39 tầng mặt tiền Sông Hàn, Trần Hưng Đạo. Giá từ 2.1 tỷ. Hotline: 0352.787777.",
  },

  "sun-ponte-residence": {
    slug: "sun-ponte-residence",
    name: "Sun Ponte Residence",
    shortName: "Sun Ponte",
    tagline: "Kiệt tác sống bên Cầu Rồng huyền thoại",
    description:
      "Sun Ponte Residence mang đến trải nghiệm sống độc bản tại Đà Nẵng — tầm nhìn trực diện Cầu Rồng biểu tượng và toàn cảnh Sông Hàn huyền ảo về đêm. Kiến trúc đương đại kết hợp nội thất hạng sang tạo nên không gian sống xứng tầm đẳng cấp quốc tế.",
    developer: "Theo hồ sơ dự án",
    distributor: "BĐS Đà Nẵng",
    status: "under-construction",
    statusLabel: "Đang Xây Dựng — Dự Kiến 2026",
    location: "Sơn Trà, Đà Nẵng",
    fullAddress: "Đường Phạm Văn Đồng, Phường Mân Thái, Quận Sơn Trà, Đà Nẵng",
    floors: 35,
    totalUnits: 352,
    priceFrom: "3.5",
    priceTo: "22",
    completionYear: "2026",
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=85&fit=crop",
    coverImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6d8c3e68?w=900&q=80", alt: "Living Room", caption: "Phòng khách view Cầu Rồng" },
      { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80", alt: "Bedroom", caption: "Phòng ngủ master" },
      { src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=900&q=80", alt: "Kitchen", caption: "Bếp trang bị cao cấp" },
      { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80", alt: "Pool", caption: "Rooftop Pool" },
      { src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80", alt: "Lounge", caption: "Lobby Lounge" },
      { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80", alt: "Gym", caption: "Fitness Center" },
    ],
    stats: [
      { label: "Số tầng", value: "35", unit: "tầng" },
      { label: "Tổng căn", value: "352", unit: "căn" },
      { label: "Diện tích", value: "58 – 175", unit: "m²" },
      { label: "Giá từ", value: "3.5", unit: "Tỷ VND" },
    ],
    highlights: [
      {
        icon: "bridge",
        title: "View Cầu Rồng Độc Quyền",
        desc: "Vị trí duy nhất tại Đà Nẵng có tầm nhìn trực diện Cầu Rồng — biểu tượng phun lửa hàng đêm",
      },
      {
        icon: "luxury",
        title: "Thiết Kế Đương Đại",
        desc: "KTS Tổng Vũ Tiến Hiếu — thiết kế lấy cảm hứng từ hình ảnh cây cầu và sóng nước",
      },
      {
        icon: "star",
        title: "Hotel-Branded Amenities",
        desc: "Quản lý và vận hành theo tiêu chuẩn 5 sao quốc tế, tích hợp dịch vụ concierge",
      },
      {
        icon: "invest",
        title: "Thanh Khoản Cao",
        desc: "Nằm trong khu vực trung tâm sôi động nhất, tỷ lệ lấp đầy cho thuê trên 85%",
      },
    ],
    apartments: [
      {
        code: "1 Phòng Ngủ",
        bedrooms: 1,
        bathrooms: 1,
        area: 58,
        areaRange: "55 – 65",
        view: "Cầu Rồng",
        priceFrom: "3.5",
        priceTo: "4.8",
        image: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&q=80",
        available: 20,
      },
      {
        code: "2 Phòng Ngủ",
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        areaRange: "78 – 95",
        view: "Sông Hàn + Cầu Rồng",
        priceFrom: "6.2",
        priceTo: "9.5",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80",
        available: 15,
      },
      {
        code: "3 Phòng Ngủ",
        bedrooms: 3,
        bathrooms: 3,
        area: 126,
        areaRange: "115 – 148",
        view: "Panorama Sông Hàn",
        priceFrom: "11",
        priceTo: "17",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80",
        available: 10,
      },
      {
        code: "Penthouse Sky Villa",
        bedrooms: 4,
        bathrooms: 4,
        area: 175,
        view: "360° Đà Nẵng",
        priceFrom: "18",
        priceTo: "22",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80",
        available: 3,
      },
    ],
    amenities: [
      {
        name: "Rooftop Infinity Pool",
        desc: "Nhìn thẳng ra Cầu Rồng — trải nghiệm sống không đâu có",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85",
        span: "col-span-2 row-span-2",
      },
      {
        name: "Dragon View Lounge",
        desc: "Lounge view độc quyền Cầu Rồng",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "Spa Premium",
        desc: "6 phòng trị liệu 5 sao, jacuzzi",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "BBQ & Garden Deck",
        desc: "Sky garden riêng biệt tầng 32",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85",
        span: "col-span-2",
      },
    ],
    nearbyPlaces: [
      { icon: "bridge", name: "Cầu Rồng — Dragon Bridge", time: "2 phút", distance: "300m" },
      { icon: "beach", name: "Bãi biển Mỹ Khê", time: "5 phút", distance: "2km" },
      { icon: "plane", name: "Sân bay Quốc tế Đà Nẵng", time: "10 phút", distance: "5km" },
      { icon: "city", name: "Phố đi bộ Bạch Đằng", time: "3 phút", distance: "1km" },
      { icon: "market", name: "Vincom Đà Nẵng", time: "4 phút", distance: "1.5km" },
      { icon: "mountain", name: "Bà Nà Hills", time: "40 phút", distance: "25km" },
    ],
    mapDescription:
      "Sun Ponte Residence tọa lạc ngay cạnh Cầu Rồng — trục kết nối trung tâm Đà Nẵng, dễ dàng di chuyển đến mọi điểm đến du lịch và thương mại của thành phố.",
    seoTitle:
      "Sun Ponte Residence Đà Nẵng — Căn Hộ View Cầu Rồng Độc Quyền | BĐS Đà Nẵng",
    seoDesc:
      "Mua căn hộ Sun Ponte Residence Đà Nẵng — tầm nhìn trực diện Cầu Rồng huyền thoại. Giá từ 3.5 tỷ. Hotline: 0352.787777.",
  },

  "sun-cosmo-residence": {
    slug: "sun-cosmo-residence",
    name: "Sun Cosmo Residence",
    shortName: "Sun Cosmo",
    tagline: "Cuộc sống tầm cao giữa sông núi hữu tình",
    description:
      "Sun Cosmo Residence là tổ hợp căn hộ đã bàn giao tọa lạc bên bờ Sông Hàn nhìn ra Cầu Trần Thị Lý và dãy Ngũ Hành Sơn hùng vĩ. Với thiết kế tối ưu cho từng góc nhìn, Sun Cosmo mang đến không gian sống trọn vẹn giữa thiên nhiên sông — núi độc đáo của Đà Nẵng.",
    developer: "Theo hồ sơ dự án",
    distributor: "BĐS Đà Nẵng",
    status: "delivered",
    statusLabel: "Đã Bàn Giao — Nhận Nhà Ngay",
    location: "Hải Châu, Đà Nẵng",
    fullAddress: "Đường Nguyễn Tất Thành, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng",
    floors: 33,
    totalUnits: 318,
    priceFrom: "3.0",
    priceTo: "14",
    completionYear: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&fit=crop",
    coverImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6d8c3e68?w=900&q=80", alt: "Phòng khách", caption: "Phòng khách view Sông Hàn" },
      { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80", alt: "Bếp ăn", caption: "Bếp & phòng ăn" },
      { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80", alt: "Phòng ngủ", caption: "Phòng ngủ master" },
      { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80", alt: "Hồ bơi", caption: "Pool deck tầng 30" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80", alt: "Biển", caption: "View Ngũ Hành Sơn" },
      { src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=900&q=80", alt: "Lobby", caption: "Grand Lobby" },
    ],
    stats: [
      { label: "Số tầng", value: "33", unit: "tầng" },
      { label: "Tổng căn", value: "318", unit: "căn" },
      { label: "Diện tích", value: "55 – 148", unit: "m²" },
      { label: "Giá từ", value: "3.0", unit: "Tỷ VND" },
    ],
    highlights: [
      {
        icon: "mountain",
        title: "View Núi & Sông Hữu Tình",
        desc: "Tầm nhìn độc đáo: phía Đông là Sông Hàn, phía Tây là dãy Ngũ Hành Sơn hùng vĩ",
      },
      {
        icon: "key",
        title: "Nhận Nhà Ngay",
        desc: "Đã hoàn thành bàn giao — ký hợp đồng và nhận bàn giao nhà trong tuần",
      },
      {
        icon: "star",
        title: "Khai Thác Cho Thuê",
        desc: "Dòng tiền cho thuê phụ thuộc vị trí căn, nội thất, thời điểm thị trường và phương án vận hành thực tế",
      },
      {
        icon: "invest",
        title: "Mức Giá Tham Khảo",
        desc: "Giá bán cần được xác nhận theo mã căn, giỏ hàng và chính sách tại thời điểm tư vấn",
      },
    ],
    apartments: [
      {
        code: "Studio",
        bedrooms: 0,
        bathrooms: 1,
        area: 55,
        view: "Sông Hàn",
        priceFrom: "3.0",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80",
        available: 6,
      },
      {
        code: "1 Phòng Ngủ",
        bedrooms: 1,
        bathrooms: 1,
        area: 68,
        areaRange: "62 – 74",
        view: "Cầu Trần Thị Lý",
        priceFrom: "3.8",
        priceTo: "5.2",
        image: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&q=80",
        available: 14,
      },
      {
        code: "2 Phòng Ngủ",
        bedrooms: 2,
        bathrooms: 2,
        area: 82,
        areaRange: "76 – 92",
        view: "Sông Hàn + Ngũ Hành Sơn",
        priceFrom: "5.5",
        priceTo: "8.2",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80",
        available: 22,
      },
      {
        code: "3 Phòng Ngủ",
        bedrooms: 3,
        bathrooms: 3,
        area: 118,
        areaRange: "105 – 148",
        view: "Panorama Sông & Núi",
        priceFrom: "9.0",
        priceTo: "14",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80",
        available: 9,
      },
    ],
    amenities: [
      {
        name: "Pool & Sun Deck",
        desc: "Hồ bơi nước mặn tầng 30 nhìn ra Ngũ Hành Sơn",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85",
        span: "col-span-2 row-span-2",
      },
      {
        name: "Sky Garden",
        desc: "Vườn treo trên cao với nhiều tiểu cảnh nhiệt đới",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "Business Lounge",
        desc: "Co-working và meeting room cao cấp",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=85",
        span: "col-span-1",
      },
      {
        name: "Kids Club & Playground",
        desc: "Khu vui chơi trẻ em an toàn, được giám sát",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85",
        span: "col-span-2",
      },
    ],
    nearbyPlaces: [
      { icon: "bridge", name: "Cầu Trần Thị Lý", time: "2 phút", distance: "500m" },
      { icon: "city", name: "Trung tâm Hải Châu", time: "5 phút", distance: "2km" },
      { icon: "plane", name: "Sân bay Quốc tế Đà Nẵng", time: "12 phút", distance: "6km" },
      { icon: "mountain", name: "Ngũ Hành Sơn", time: "15 phút", distance: "8km" },
      { icon: "market", name: "Vincom Đà Nẵng", time: "8 phút", distance: "3km" },
      { icon: "beach", name: "Bãi biển Non Nước", time: "18 phút", distance: "10km" },
    ],
    mapDescription:
      "Sun Cosmo Residence tọa lạc tại Hải Châu — quận trung tâm của Đà Nẵng, kết nối thuận tiện đến toàn thành phố và các điểm đến du lịch nổi tiếng.",
    seoTitle:
      "Sun Cosmo Residence Đà Nẵng — Căn Hộ Đã Bàn Giao View Sông Hàn & Ngũ Hành Sơn | BĐS Đà Nẵng",
    seoDesc:
      "Mua căn hộ Sun Cosmo Residence — đã bàn giao, nhận nhà ngay. View Sông Hàn & Ngũ Hành Sơn. Giá từ 3 tỷ. Hotline: 0352.787777.",
  },
};

export function getProject(slug: string): ProjectData | null {
  return PROJECTS[slug] ?? null;
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(PROJECTS);
}

export const STATUS_CONFIG = {
  open: { label: "Đang Mở Bán", bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
  "under-construction": { label: "Đang Xây Dựng", bg: "bg-amber-500/20", text: "text-amber-400", dot: "bg-amber-400" },
  delivered: { label: "Đã Bàn Giao", bg: "bg-sky-500/20", text: "text-sky-400", dot: "bg-sky-400" },
};

