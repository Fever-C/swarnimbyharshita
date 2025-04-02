
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
    price: 699,
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17140926/2022/2/12/10359115-1273-475d-8579-ecd64cbedea71644653196938PARAMOUNTCHIKANWomenMustardYellowPaisleyEmbroideredFlaredSle1.jpg",
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    name: "White Chikan Anarkali Suit",
    category: "Suits",
    price: 1499,
    image: "https://th.bing.com/th?id=OPAC.cF0AErFZvfq%2bCA474C474&w=592&h=550&o=5&dpr=1.5&pid=21.1",
    isFeatured: true
  },
  {
    id: 3,
    name: "Elegant Chikan Palazzo Set",
    category: "Palazzo Sets",
    price: 1199,
    image: "https://mysanskritam.com/cdn/shop/files/img3447-267820_l.jpg?v=1703748570",
    isFeatured: true
  },
  {
    id: 4,
    name: "Pastel Blue Chikan Dupatta",
    category: "Dupattas",
    price: 699,
    image: "https://th.bing.com/th/id/OIP.KiQH_3AytEeucmbSftktoQHaLG?rs=1&pid=ImgDetMain",
    isNew: true
  },
  {
    id: 5,
    name: "Traditional Lucknowi Chikan Saree",
    category: "Sarees",
    price: 1499,
    image: "https://th.bing.com/th/id/OIP.byALsgv4-S2HSeBWqDq--wHaLH?rs=1&pid=ImgDetMain"
  },
  {
    id: 6,
    name: "Ivory Thread Work Chikan Kurta",
    category: "Kurta",
    price: 1099,
    image: "https://i.pinimg.com/originals/91/a2/d5/91a2d5910715831820040b1ad89089fe.jpg"
  },
  {
    id: 7,
    name: "Contemporary Chikan Crop Top",
    category: "Tops",
    price: 999,
    image: "https://th.bing.com/th/id/OIP.y1HPakBLuoGgyX0sC7orjgHaLH?rs=1&pid=ImgDetMain"
  },
  {
    id: 8,
    name: "Chanderi Chikan Work Lehenga",
    category: "Lehengas",
    price: 3999,
    image: "https://cdn0.weddingwire.in/article/3650/original/960/jpg/70563-chikankari-lehenga-talking-threads-off-white.jpeg",
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
