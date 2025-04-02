
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
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    name: "White Chikan Anarkali Suit",
    category: "Suits",
    price: 2499,
    image: "https://images.unsplash.com/photo-1643320753025-b10c50e0fb35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true
  },
  {
    id: 3,
    name: "Elegant Chikan Palazzo Set",
    category: "Palazzo Sets",
    price: 1899,
    image: "https://images.unsplash.com/photo-1614093302611-8efc4de12e3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true
  },
  {
    id: 4,
    name: "Pastel Blue Chikan Dupatta",
    category: "Dupattas",
    price: 899,
    image: "https://images.unsplash.com/photo-1610030469668-8e4e3f92345f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isNew: true
  },
  {
    id: 5,
    name: "Traditional Lucknowi Chikan Saree",
    category: "Sarees",
    price: 3499,
    image: "https://images.unsplash.com/photo-1595342084842-98e113868cf4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Ivory Thread Work Chikan Kurta",
    category: "Kurta",
    price: 1599,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    name: "Contemporary Chikan Crop Top",
    category: "Tops",
    price: 999,
    image: "https://images.unsplash.com/photo-1593476087123-36d1de271f08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    name: "Chanderi Chikan Work Lehenga",
    category: "Lehengas",
    price: 4999,
    image: "https://images.unsplash.com/photo-1614252369475-531eba780d5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
