// Product data - ready for Shopify integration
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  category: "girl" | "boy";
  tag?: "BESTSELLER" | "LIMITED" | "NEW";
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "sakura",
    name: "Sakura",
    price: 248,
    description: "Delicate and graceful, Sakura embodies the beauty of cherry blossoms in spring. Hand-painted features with meticulous attention to detail, dressed in a flowing pink ensemble with cherry blossom accents.",
    image: "/images/product-shot-girl-1.png",
    images: ["/images/product-shot-girl-1.png"],
    category: "girl",
    tag: "BESTSELLER",
    inStock: true,
  },
  {
    id: "2",
    slug: "luna",
    name: "Luna",
    price: 268,
    description: "Mysterious and elegant, Luna captures the essence of moonlit nights. Features ethereal styling with celestial-inspired accessories and a dreamy color palette.",
    image: "/images/product-shot-girl-2.png",
    images: ["/images/product-shot-girl-2.png"],
    category: "girl",
    inStock: true,
  },
  {
    id: "3",
    slug: "violet",
    name: "Violet",
    price: 258,
    description: "Bold and sophisticated, Violet makes a statement with her deep purple tones and edgy fashion sense. Limited edition piece with unique hand-crafted details.",
    image: "/images/product-shot-girl-3.png",
    images: ["/images/product-shot-girl-3.png"],
    category: "girl",
    tag: "LIMITED",
    inStock: true,
  },
  {
    id: "4",
    slug: "mochi",
    name: "Mochi",
    price: 238,
    description: "Sweet and playful, Mochi brings joy with her soft pastel styling and adorable accessories. Perfect for collectors who love kawaii aesthetic.",
    image: "/images/product-shot-girl-4.png",
    images: ["/images/product-shot-girl-4.png"],
    category: "girl",
    inStock: true,
  },
  {
    id: "5",
    slug: "ren",
    name: "Ren",
    price: 278,
    description: "Charismatic and modern, Ren blends streetwear aesthetics with traditional craftsmanship. Features contemporary styling with attention to every detail.",
    image: "/images/product-shot-boy-1.png",
    images: ["/images/product-shot-boy-1.png"],
    category: "boy",
    tag: "NEW",
    inStock: true,
  },
  {
    id: "6",
    slug: "kai",
    name: "Kai",
    price: 288,
    description: "Sophisticated and refined, Kai represents the perfect balance of elegance and edge. Premium craftsmanship with luxurious details.",
    image: "/images/product-shot-boy-2.png",
    images: ["/images/product-shot-boy-2.png"],
    category: "boy",
    tag: "NEW",
    inStock: true,
  },
  {
    id: "7",
    slug: "yuki",
    name: "Yuki",
    price: 268,
    description: "Cool and mysterious, Yuki embodies winter elegance with icy tones and minimalist styling. A collector's favorite.",
    image: "/images/product-shot-boy-3.png",
    images: ["/images/product-shot-boy-3.png"],
    category: "boy",
    tag: "NEW",
    inStock: true,
  },
  {
    id: "8",
    slug: "haru",
    name: "Haru",
    price: 298,
    description: "Bright and energetic, Haru captures the spirit of spring with vibrant styling and cheerful details. Premium edition with unique features.",
    image: "/images/product-shot-boy-4.png",
    images: ["/images/product-shot-boy-4.png"],
    category: "boy",
    tag: "NEW",
    inStock: true,
  },
  {
    id: "9",
    slug: "sora",
    name: "Sora",
    price: 258,
    description: "Dreamy and artistic, Sora features celestial-inspired design elements and ethereal styling. Perfect for those who appreciate unique aesthetics.",
    image: "/images/product-shot-boy-5.png",
    images: ["/images/product-shot-boy-5.png"],
    category: "boy",
    tag: "NEW",
    inStock: true,
  },
  {
    id: "10",
    slug: "rose",
    name: "Rose",
    price: 248,
    description: "Romantic and timeless, Rose features classic beauty with modern touches. Elegant styling with floral accents.",
    image: "/images/product-shot-girl-5.png",
    images: ["/images/product-shot-girl-5.png"],
    category: "girl",
    inStock: true,
  },
  {
    id: "11",
    slug: "iris",
    name: "Iris",
    price: 258,
    description: "Artistic and unique, Iris showcases avant-garde styling with creative details. For the collector with discerning taste.",
    image: "/images/product-shot-girl-6.png",
    images: ["/images/product-shot-girl-6.png"],
    category: "girl",
    inStock: true,
  },
  {
    id: "12",
    slug: "nova",
    name: "Nova",
    price: 268,
    description: "Bold and futuristic, Nova combines edgy aesthetics with kawaii charm. Limited production with exclusive features.",
    image: "/images/product-shot-girl-7.png",
    images: ["/images/product-shot-girl-7.png"],
    category: "girl",
    inStock: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: "girl" | "boy"): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.tag === "BESTSELLER" || p.id === "1" || p.id === "2" || p.id === "3" || p.id === "4");
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.tag === "NEW");
};
