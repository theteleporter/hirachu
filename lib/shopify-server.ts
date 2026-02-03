import { shopifyGraphQL } from "./shopify";
import { PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY, transformShopifyProduct, type Product } from "./products";

// Server-side functions with caching
export async function getServerProducts(): Promise<Product[]> {
  try {
    const data = await shopifyGraphQL<{ products: { edges: { node: any }[] } }>(
      PRODUCTS_QUERY,
      { first: 50 }
    );

    return data.products.edges.map(edge => transformShopifyProduct(edge.node));
  } catch (error) {
    console.error("Error fetching products on server:", error);
    return [];
  }
}

export async function getServerProduct(slug: string): Promise<Product | null> {
  try {
    const data = await shopifyGraphQL<{ product: any }>(
      PRODUCT_BY_HANDLE_QUERY,
      { handle: slug }
    );

    if (!data.product) return null;

    return transformShopifyProduct(data.product);
  } catch (error) {
    console.error(`Error fetching product ${slug} on server:`, error);
    return null;
  }
}
