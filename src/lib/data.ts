
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Embroidered Chikan Kurta",
    category: "Kurta",
    price: 1299,
    image: "https://images.unsplash.com/photo-1604038839523-873a9cf37bdf?q=80&w=800&auto=format&fit=crop",
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    name: "White Chikan Anarkali Suit",
    category: "Suits",
    price: 2499,
    image: "https://images.unsplash.com/photo-1581798269145-eaccb7a654df?q=80&w=800&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: 3,
    name: "Elegant Chikan Palazzo Set",
    category: "Palazzo Sets",
    price: 1899,
    image: "https://images.unsplash.com/photo-1594550653132-1ffa10d2288d?q=80&w=800&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: 4,
    name: "Pastel Blue Chikan Dupatta",
    category: "Dupattas",
    price: 899,
    image: "https://images.unsplash.com/photo-1595342484034-65e54efb5447?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 5,
    name: "Traditional Lucknowi Chikan Saree",
    category: "Sarees",
    price: 3499,
    image: "https://images.unsplash.com/photo-1603618987232-730775368374?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Ivory Thread Work Chikan Kurta",
    category: "Kurta",
    price: 1599,
    image: "https://images.unsplash.com/photo-1614267871887-4bb2eceaedb3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Contemporary Chikan Crop Top",
    category: "Tops",
    price: 999,
    image: "https://images.unsplash.com/photo-1585035779963-2ba8297c0904?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Chanderi Chikan Work Lehenga",
    category: "Lehengas",
    price: 4999,
    image: "https://images.unsplash.com/photo-1606024429853-1337c2c489ad?q=80&w=800&auto=format&fit=crop",
    isNew: true
  }
];

export const categories = [
  "All",
  "Kurta",
  "Suits",
  "Palazzo Sets",
  "Dupattas",
  "Sarees",
  "Tops",
  "Lehengas"
];

export type BrandInfo = {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  values: string[];
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
};

export const brandInfo: BrandInfo = {
  name: "SWARNIM",
  tagline: "Traditional Chikan Elegance for the Modern Woman",
  description: "Founded with passion for authentic Indian craftsmanship, Swarnim celebrates the timeless art of Chikankari embroidery. We create beautifully detailed, handcrafted women's apparel that honors tradition while embracing contemporary style. Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.",
  foundedYear: 2023,
  values: [
    "Traditional Craftsmanship",
    "Artisan Empowerment",
    "Sustainable Materials",
    "Custom Tailoring"
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  }
};
