"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingCartIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { generateProductSchema } from "@/lib/schema";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useState, useMemo } from "react";
import { useShopifyProduct, useShopifyProducts } from "@/lib/use-shopify";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { product, loading, error } = useShopifyProduct(params.slug);
  const { products: allProducts } = useShopifyProducts();
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product, allProducts]);

  if (loading) {
    return (
      <main className="px-4 md:px-10 py-12 md:py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 mb-8 w-1/3" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-neutral-200" />
            <div>
              <div className="h-6 bg-neutral-200 mb-4 w-3/4" />
              <div className="h-4 bg-neutral-200 mb-2 w-full" />
              <div className="h-4 bg-neutral-200 mb-8 w-5/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    notFound();
  }

  const schema = generateProductSchema(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Breadcrumbs */}
      <div className="px-4 md:px-10 py-6 border-b">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <CaretRightIcon size={12} weight="bold" />
          <Link href="/shop" className="hover:text-black transition-colors">
            Shop
          </Link>
          <CaretRightIcon size={12} weight="bold" />
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image */}
          <div className="relative aspect-square bg-neutral-100 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.tag && (
              <span className="inline-block bg-black text-white text-[10px] px-2 py-1 mb-4 w-fit">
                {product.tag}
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl font-light mb-2">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>

            <div className="mb-8 pb-8 border-b">
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-medium mb-3">DETAILS</h3>
              <ul className="text-sm text-neutral-600 space-y-2 font-light">
                <li>• Handcrafted collectible doll</li>
                <li>• Limited production</li>
                <li>• Articulated joints</li>
                <li>• Includes display stand</li>
                <li>• Height: 12 inches (30cm)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(true);
                  addItem(product);
                  setTimeout(() => setIsAdding(false), 1000);
                }}
                disabled={isAdding}
                className="w-full bg-black text-white px-6 py-4 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:bg-neutral-400"
              >
                <ShoppingCartIcon size={18} weight="light" />
                {isAdding ? 'ADDED!' : 'ADD TO CART'}
              </button>
              
              <button
                type="button"
                onClick={() => toggleItem(product)}
                className={`w-full px-6 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                  isInWishlist(product.slug)
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "border border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                <HeartIcon size={18} weight={isInWishlist(product.slug) ? "fill" : "light"} />
                {isInWishlist(product.slug) ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
              </button>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-xs text-neutral-500 font-light">
                ✓ Free shipping on orders over $200<br />
                ✓ Ships within 3-5 business days<br />
                ✓ 30-day return policy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="px-4 md:px-10 py-16 md:py-24 border-t bg-neutral-50">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-light">YOU MIGHT ALSO LIKE</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/shop/${relatedProduct.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-square bg-neutral-100 mb-3 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-medium mb-1">{relatedProduct.name}</h3>
                <p className="text-sm text-neutral-500">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      </main>
    </>
  );
}
