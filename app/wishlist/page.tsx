"use client";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { HeartIcon, ShoppingCartIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <main className="px-4 md:px-10 py-12 md:py-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <HeartIcon size={64} weight="light" className="mx-auto mb-4 text-neutral-300" />
          <h1 className="text-2xl font-light mb-2">Your Wishlist is Empty</h1>
          <p className="text-neutral-500 mb-6">Save your favorite dolls to keep track of them</p>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Browse Dolls
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 md:px-10 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-3xl md:text-4xl font-light mb-3">MY WISHLIST</h1>
          <p className="text-sm text-neutral-500 font-light">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearWishlist}
            className="text-sm text-neutral-500 hover:text-black transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="group relative">
              <Link href={`/shop/${product.slug}`} className="block">
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
                  
                  {/* Action Buttons */}
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
                  </div>
                  
                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      removeItem(product.slug);
                    }}
                    className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                  >
                    <XIcon size={14} weight="bold" />
                  </button>
                </div>
                <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                <p className="text-sm text-neutral-500">${product.price}</p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add All to Cart */}
      <div className="mt-12 text-center">
        <button
          onClick={() => {
            items.forEach((product) => addItem(product));
          }}
          className="px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors"
        >
          Add All to Cart
        </button>
      </div>
    </main>
  );
}
