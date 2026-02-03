"use client";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartIcon, ShoppingCartIcon } from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useShopifyProducts } from "@/lib/use-shopify";

export const FeaturedDolls = () => {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const { products, loading, error } = useShopifyProducts();

  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.tag === "BESTSELLER" || p.tag === "LIMITED").slice(0, 4);
  }, [products]);

  if (loading) {
    return (
      <section className="px-4 md:px-10 py-16 md:py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs text-neutral-500 mb-2">CURATED SELECTION</p>
            <h2 className="text-2xl md:text-3xl font-light">FEATURED DOLLS</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-neutral-200 mb-3" />
              <div className="h-4 bg-neutral-200 mb-2 w-3/4" />
              <div className="h-4 bg-neutral-200 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 md:px-10 py-16 md:py-24">
        <div className="text-center text-neutral-500">
          <p>Failed to load products. Please try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-10 py-16 md:py-24">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs text-neutral-500 mb-2">CURATED SELECTION</p>
          <h2 className="text-2xl md:text-3xl font-light">FEATURED DOLLS</h2>
        </div>
        <a
          href="/shop"
          className="text-sm border-b border-black pb-1 hover:border-neutral-400 hover:text-neutral-400 transition-colors"
        >
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/shop/${product.slug}`} className="group cursor-pointer block">
              <div className="relative aspect-square bg-neutral-100 mb-3 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-black text-white text-[10px] px-2 py-1">
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-9 h-9 bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  >
                    <ShoppingCartIcon size={16} weight="bold" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleItem(product);
                    }}
                    className={`w-9 h-9 backdrop-blur-sm flex items-center justify-center transition-colors ${
                      isInWishlist(product.slug)
                        ? "bg-pink-600 text-white hover:bg-pink-700"
                        : "bg-white/80 text-black hover:bg-white"
                    }`}
                  >
                    <HeartIcon size={16} weight={isInWishlist(product.slug) ? "fill" : "light"} />
                  </button>
                </div>
              </div>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-neutral-500">${product.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
