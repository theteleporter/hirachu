import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN!,
  storefrontApiVersion: "2025-10",
  publicStorefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const shopifyFetch = client.getPublicTokenHeaders;
export const shopifyStorefrontApiUrl = client.getStorefrontApiUrl();

// GraphQL query helper with timeout and error handling
export async function shopifyGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

    const response = await fetch(shopifyStorefrontApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...client.getPublicTokenHeaders(),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      signal: controller.signal,
      // @ts-ignore - Next.js specific caching with ISR
      next: { revalidate: 3600 }, // Revalidate every hour (ISR)
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const text = await response.text();
      console.error('Shopify API error response:', text);
      throw new Error(`Shopify API error: ${response.status} - ${text}`);
    }

    const json = await response.json();

    if (json.errors) {
      console.error('Shopify GraphQL errors:', json.errors);
      throw new Error(json.errors[0].message);
    }

    return json.data as T;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Shopify API timeout - check network connection');
      } else {
        console.error('Shopify API error:', error.message);
      }
    }
    console.error('Error fetching products:', error);
    throw error;
  }
}
