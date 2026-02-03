"use client";
import { shopifyClientGraphQL } from "./shopify-client";

export interface CartItem {
  id: string;
  merchandiseId: string;
  quantity: number;
}

const CREATE_CART_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export interface CartLineItem {
  merchandiseId: string;
  quantity: number;
}

export async function createCart(lines: CartLineItem[]) {
  try {
    const data = await shopifyClientGraphQL<{
      cartCreate: {
        cart: { id: string; checkoutUrl: string };
        userErrors: Array<{ field: string[]; message: string }>;
      };
    }>(CREATE_CART_MUTATION, {
      input: {
        lines,
      },
    });

    if (data.cartCreate.userErrors.length > 0) {
      console.error("Cart creation errors:", data.cartCreate.userErrors);
      throw new Error(data.cartCreate.userErrors[0].message);
    }

    return data.cartCreate.cart;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
}

// Get Shopify variant ID from product
// For Storefront API, we need to get the first variant
const GET_PRODUCT_VARIANT_QUERY = `
  query GetProductVariant($handle: String!) {
    product(handle: $handle) {
      id
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

export async function getProductVariantId(handle: string): Promise<string> {
  try {
    const data = await shopifyClientGraphQL<{
      product: {
        id: string;
        variants: {
          edges: Array<{ node: { id: string } }>;
        };
      };
    }>(GET_PRODUCT_VARIANT_QUERY, { handle });

    return data.product.variants.edges[0].node.id;
  } catch (error) {
    console.error("Error fetching variant ID:", error);
    throw error;
  }
}
