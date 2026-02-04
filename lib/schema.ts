import { Product } from "./products";

export function generateProductSchema(
  product: Product,
  baseUrl: string = "https://hirachu.vercel.app",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${baseUrl}/shop/${product.slug}`,
    },
    brand: {
      "@type": "Brand",
      name: "Hirachu",
    },
    category: "Collectible Dolls",
  };
}

export function generateOrganizationSchema(
  baseUrl: string = "https://hirachu.vercel.app",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hirachu",
    description: "Handcrafted collectible dolls where kawaii meets couture",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: ["https://instagram.com/hirachu", "https://twitter.com/hirachu"],
  };
}
