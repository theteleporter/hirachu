"use client";
import { useState, useMemo, useCallback } from "react";
import { useShopifyProducts } from "@/lib/use-shopify";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

export function ProductSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { products, loading } = useShopifyProducts();

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 5);
  }, [query, products]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const handlePrefetch = useCallback((slug: string) => {
    // Prefetch product page on hover
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = `/shop/${slug}`;
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={handleOpen}
        className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
        aria-label="Search products"
      >
        <MagnifyingGlassIcon size={24} weight="light" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b">
              <MagnifyingGlassIcon size={24} weight="light" className="text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={handleClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <XIcon size={20} weight="bold" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="p-8 text-center text-neutral-500">
                  <p>Loading products...</p>
                </div>
              ) : query.trim() && searchResults.length === 0 ? (
                <div className="p-8 text-center text-neutral-500">
                  <p>No products found for "{query}"</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="divide-y">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      onClick={handleClose}
                      onMouseEnter={() => handlePrefetch(product.slug)}
                      className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="relative w-16 h-16 bg-neutral-100 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">{product.name}</h3>
                        <p className="text-xs text-neutral-500 mt-1">
                          ${product.price} • {product.category}
                        </p>
                      </div>
                      {product.tag && (
                        <span className="text-[10px] bg-black text-white px-2 py-1">
                          {product.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-neutral-500">
                  <p className="text-sm">Start typing to search products...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
