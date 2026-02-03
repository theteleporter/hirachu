"use client";
import { useEffect, useState } from "react";
import { Product, PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY, transformShopifyProduct } from "./products";
import { shopifyClientGraphQL } from "./shopify-client";

export function useShopifyProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        const data = await shopifyClientGraphQL<{ products: any }>(PRODUCTS_QUERY, {
          first: 50,
        });
        
        if (mounted) {
          const transformed = data.products.edges.map((edge: any) => 
            transformShopifyProduct(edge.node)
          );
          setProducts(transformed);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load products");
          console.error("Error loading products:", err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, loading, error };
}

export function useShopifyProduct(slug: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProduct() {
      try {
        setLoading(true);
        const data = await shopifyClientGraphQL<{ product: any }>(
          PRODUCT_BY_HANDLE_QUERY,
          { handle: slug }
        );
        
        if (mounted) {
          if (data.product) {
            setProduct(transformShopifyProduct(data.product));
            setError(null);
          } else {
            setError("Product not found");
          }
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load product");
          console.error("Error loading product:", err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      mounted = false;
    };
  }, [slug]);

  return { product, loading, error };
}
