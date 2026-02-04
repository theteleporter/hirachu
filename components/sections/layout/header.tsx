"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { XIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { CartButton } from "@/components/cart/cart-button";
import { useWishlist } from "@/lib/wishlist-context";
import { ProductSearch } from "@/components/product-search";

const menuLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Wishlist", href: "/wishlist" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useWishlist();

  // Lock/unlock body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="px-4 md:px-10 py-3.5 md:py-4 flex justify-between items-center border-b bg-white relative z-40 sticky top-0">
        <Link
          href="/"
          className="font-hachi text-xl md:text-2xl font-light lowercase"
        >
          Hirachu
        </Link>
        <div className="flex items-center gap-1.5 md:gap-2">
          <ProductSearch />
          <Link
            href="/wishlist"
            className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Wishlist"
          >
            <HeartIcon size={20} className="md:w-6 md:h-6" weight="light" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink-600 text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          <CartButton />
          <button
            type="button"
            className="border border-neutral-300 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-light hover:border-black hover:bg-black hover:text-white transition-all duration-200"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white z-50 shadow-2xl"
            >
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center px-6 md:px-8 py-5 md:py-6 border-b border-neutral-200">
                  <Link
                    href="/"
                    className="font-hachi text-xl md:text-2xl md:text-2xl lowercase"
                  >
                    Hirachu
                  </Link>
                  <button
                    type="button"
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <XIcon size={22} weight="regular" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col justify-center px-6 md:px-8">
                  <div className="space-y-0.5">
                    {menuLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          className="group relative block py-6 md:py-7 border-b border-neutral-200 overflow-hidden"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="relative text-4xl md:text-5xl font-medium group-hover:translate-x-3 transition-transform duration-300 inline-block">
                            {link.label}
                          </span>
                          {link.href === "/wishlist" && totalItems > 0 && (
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-pink-600 text-white text-sm rounded-full flex items-center justify-center font-semibold">
                              {totalItems}
                            </span>
                          )}
                          <span className="absolute inset-0 bg-neutral-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="px-6 md:px-8 py-6 md:py-8 border-t border-neutral-200"
                >
                  <p className="text-[10px] tracking-[0.3em] mb-4 text-neutral-400">
                    CONNECT
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://x.com/hirachu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 border border-neutral-200 text-sm text-neutral-600 hover:border-black hover:text-black transition-colors"
                    >
                      Twitter
                    </Link>
                    <Link
                      href="https://www.instagram.com/hirachu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 border border-neutral-200 text-sm text-neutral-600 hover:border-black hover:text-black transition-colors"
                    >
                      Instagram
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
