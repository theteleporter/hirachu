"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartIcon, ShoppingCartIcon } from "@phosphor-icons/react/dist/ssr";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useSearchParams } from "next/navigation";
import { useShopifyProducts } from "@/lib/use-shopify";

export const dynamic = 'force-dynamic'; // Ensure client-side data fetching

export default function ShopPage() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter') as "all" | "girl" | "boy" | "new" | null;
  const [filter, setFilter] = useState<"all" | "girl" | "boy">(
    filterParam && (filterParam === "girl" || filterParam === "boy") ? filterParam : "all"
  );
  const { products, loading, error } = useShopifyProducts();
  const { addItem } = useCart();
  
  useEffect(() => {
    if (filterParam && (filterParam === "girl" || filterParam === "boy")) {
      setFilter(filterParam);
    }
  }, [filterParam]);
  
  const filteredProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter(p => p.category === filter);
  }, [products, filter]);

  if (loading) {
    return (
      <main className="px-4 md:px-10 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-light mb-3">ALL DOLLS</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-neutral-200 mb-3" />
              <div className="h-4 bg-neutral-200 mb-2 w-3/4" />
              <div className="h-4 bg-neutral-200 w-1/2" />
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="px-4 md:px-10 py-12 md:py-16">
        <div className="text-center text-neutral-500">
          <p>Failed to load products. Please try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 md:px-10 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-3">ALL DOLLS</h1>
        <p className="text-sm text-neutral-500 font-light">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-10">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-4 py-2 text-xs border transition-colors ${
            filter === "all" 
              ? "bg-black text-white border-black" 
              : "bg-white text-black border-neutral-300 hover:border-black"
          }`}
        >
          ALL
        </button>
        <button
          type="button"
          onClick={() => setFilter("girl")}
          className={`px-4 py-2 text-xs border transition-colors ${
            filter === "girl" 
              ? "bg-black text-white border-black" 
              : "bg-white text-black border-neutral-300 hover:border-black"
          }`}
        >
          GIRLS
        </button>
        <button
          type="button"
          onClick={() => setFilter("boy")}
          className={`px-4 py-2 text-xs border transition-colors ${
            filter === "boy" 
              ? "bg-black text-white border-black" 
              : "bg-white text-black border-neutral-300 hover:border-black"
          }`}
        >
          BOYS
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

function ProductCard({ product }: { product: any }) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  
  return (
    <Link href={`/shop/${product.slug}`} className="group cursor-pointer block">
      <div className="relative aspect-square bg-neutral-100 mb-3 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
  );
}
