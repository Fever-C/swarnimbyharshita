
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
    name: "Relaxed Fit Cotton T-shirt",
    category: "T-shirts",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true,
    isNew: true
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    category: "Bottoms",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true
  },
  {
    id: 3,
    name: "Oversized Cotton Hoodie",
    category: "Outerwear",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true
  },
  {
    id: 4,
    name: "Linen Blend Shirt",
    category: "Shirts",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isNew: true
  },
  {
    id: 5,
    name: "Classic Wool Blend Coat",
    category: "Outerwear",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Cotton Blend Sweater",
    category: "Knitwear",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    name: "Straight Leg Twill Pants",
    category: "Bottoms",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    name: "Lightweight Puffer Jacket",
    category: "Outerwear",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isNew: true
  }
];

export const categories = [
  "All",
  "T-shirts",
  "Shirts",
  "Knitwear",
  "Bottoms",
  "Outerwear"
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
  name: "MAISON",
  tagline: "Refined Essentials for the Modern Wardrobe",
  description: "Founded with a passion for quality and sustainability, MAISON creates timeless pieces that transcend seasonal trends. Our commitment to ethical production and premium materials results in clothing that looks good and feels good to wear.",
  foundedYear: 2018,
  values: [
    "Sustainable Materials",
    "Ethical Production",
    "Timeless Design",
    "Quality Craftsmanship"
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  }
};
