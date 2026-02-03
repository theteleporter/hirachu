// Client-side only Shopify GraphQL helper
// This runs in the browser, bypassing Node.js network issues

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'hirachu.myshopify.com';
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '20a03e4d16a1d5bd9f795997934b65c5';

const STOREFRONT_API_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2025-10/graphql.json`;

export async function shopifyClientGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(STOREFRONT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const text = await response.text();
      console.error('Shopify API error:', text);
      throw new Error(`Shopify API error: ${response.status}`);
    }

    const json = await response.json();

    if (json.errors) {
      console.error('Shopify GraphQL errors:', json.errors);
      throw new Error(json.errors[0].message);
    }

    return json.data as T;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Shopify API timeout');
    }
    throw error;
  }
}
