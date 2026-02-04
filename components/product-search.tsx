"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useShopifyProducts } from "@/lib/use-shopify";
import type { Product } from "@/lib/products";

export const ProductSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { products, loading } = useShopifyProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Filter products based on search
  useEffect(() => {
    if (!search.trim() || !products) {
      setFilteredProducts([]);
      return;
    }

    const query = search.toLowerCase();
    const filtered = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.slug.toLowerCase().includes(query)
      )
      .slice(0, 8);

    setFilteredProducts(filtered);
  }, [search, products]);

  // Ctrl+K shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  const handleSelect = (slug: string) => {
    setOpen(false);
    setSearch("");
    router.push(`/shop/${slug}`);
    router.prefetch(`/shop/${slug}`);
  };

  const handlePrefetch = (slug: string) => {
    router.prefetch(`/shop/${slug}`);
  };

  const hasResults = filteredProducts.length > 0;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-black transition-colors border border-neutral-200 rounded hover:border-neutral-300 hover:bg-neutral-50"
      >
        <MagnifyingGlassIcon size={16} weight="light" />
        <span className="hidden sm:inline text-neutral-400">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-neutral-500 bg-white border border-neutral-200 rounded shadow-sm">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Command Palette */}
          <motion.div 
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            className="relative w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <Command label="Product Search" loop shouldFilter={false}>
              <div className="bg-white rounded-xl shadow-2xl border border-neutral-200/80 overflow-hidden backdrop-blur-xl">
                {/* Hidden title for accessibility */}
                <h2 id="search-title" className="sr-only">Search for dolls</h2>
                
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 border-b border-neutral-200/50">
                  <MagnifyingGlassIcon size={18} weight="light" className="text-neutral-400 flex-shrink-0" />
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Search dolls..."
                    autoFocus
                    className="flex-1 bg-transparent py-4 text-[15px] outline-none placeholder:text-neutral-400"
                  />
                  <kbd className="hidden sm:flex items-center justify-center min-w-[52px] px-2 py-1 text-[10px] font-mono text-neutral-400 bg-neutral-50 border border-neutral-200 rounded">
                    ESC
                  </kbd>
                </div>

                {/* Results with dynamic height */}
                <AnimatePresence mode="wait">
                  {hasResults && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <Command.List className="max-h-[320px] overflow-y-auto p-2 scroll-smooth">
                        <Command.Group>
                          {filteredProducts.map((product, index) => (
                            <motion.div
                              key={product.id}
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.02, duration: 0.2 }}
                            >
                              <Command.Item
                                value={product.id}
                                onSelect={() => handleSelect(product.slug)}
                                onMouseEnter={() => handlePrefetch(product.slug)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-150 hover:bg-neutral-50 aria-selected:bg-neutral-100 group outline-none"
                              >
                                <div className="relative w-11 h-11 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0 ring-1 ring-neutral-200/50">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[13px] font-medium text-neutral-900 truncate leading-tight">
                                    {product.name}
                                  </p>
                                  <p className="text-[12px] text-neutral-500 mt-0.5">${product.price}</p>
                                </div>
                                {product.tag && (
                                  <span className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-neutral-900 text-white rounded">
                                    {product.tag}
                                  </span>
                                )}
                              </Command.Item>
                            </motion.div>
                          ))}
                        </Command.Group>
                      </Command.List>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* No results message */}
                {search && !hasResults && !loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center"
                  >
                    <p className="text-sm text-neutral-500">
                      No dolls found for "{search}"
                    </p>
                  </motion.div>
                )}

                {/* Loading state */}
                {loading && search && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 text-center"
                  >
                    <p className="text-sm text-neutral-400">Loading...</p>
                  </motion.div>
                )}
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </>
  );
};
