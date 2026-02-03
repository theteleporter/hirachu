import { shopifyGraphQL } from "./shopify";

// Product data interface
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

// GraphQL queries
export const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          tags
          availableForSale
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      tags
      availableForSale
    }
  }
`;

// Transform Shopify product to our Product interface
export function transformShopifyProduct(shopifyProduct: any): Product {
  const tags = shopifyProduct.tags || [];
  const category = tags.includes("boy") ? "boy" : "girl";
  
  let tag: "BESTSELLER" | "LIMITED" | "NEW" | undefined;
  if (tags.includes("bestseller")) tag = "BESTSELLER";
  else if (tags.includes("limited")) tag = "LIMITED";
  else if (tags.includes("new")) tag = "NEW";

  const images = shopifyProduct.images?.edges?.map((edge: any) => edge.node.url) || [];

  return {
    id: shopifyProduct.id.split("/").pop() || shopifyProduct.id,
    slug: shopifyProduct.handle,
    name: shopifyProduct.title,
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    description: shopifyProduct.description || "",
    image: images[0] || "/images/placeholder.png",
    images,
    category,
    tag,
    inStock: shopifyProduct.availableForSale,
  };
}

// Fetch all products from Shopify
export async function getAllProducts(): Promise<Product[]> {
  const data = await shopifyGraphQL<{ products: { edges: { node: any }[] } }>(
    PRODUCTS_QUERY,
    { first: 50 }
  );

  return data.products.edges.map(edge => transformShopifyProduct(edge.node));
}

// Static fallback products (keeping your original data as fallback)
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

// Get product by slug from Shopify
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const data = await shopifyGraphQL<{ product: any }>(
    PRODUCT_BY_HANDLE_QUERY,
    { handle: slug }
  );

  if (!data.product) return undefined;
  return transformShopifyProduct(data.product);
}

// Get products by category from Shopify
export async function getProductsByCategory(category: "girl" | "boy"): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((p) => p.category === category);
}

// Get featured products from Shopify
export async function getFeaturedProducts(): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((p) => p.tag === "BESTSELLER").slice(0, 4);
}

// Get new arrivals from Shopify
export async function getNewArrivals(): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter((p) => p.tag === "NEW");
}
