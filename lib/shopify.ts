import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
  storefrontApiVersion: "2025-10",
  publicStorefrontToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
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
      // @ts-ignore - Next.js specific
      cache: 'no-store', // Disable cache for now to ensure fresh data
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
