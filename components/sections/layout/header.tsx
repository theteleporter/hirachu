"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { XIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { CartButton } from "@/components/cart/cart-button";
import { useWishlist } from "@/lib/wishlist-context";
import { ProductSearch } from "@/components/product-search";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useWishlist();

  // Lock/unlock body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="px-4 md:px-10 py-4 md:py-5 flex justify-between items-center border-b bg-white relative z-40 sticky top-0">
        <Link href="/" className="font-hachi text-2xl font-light">
          Hirachu
        </Link>
        <div className="flex items-center gap-2">
          <ProductSearch />
          <Link
            href="/wishlist"
            className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <HeartIcon size={24} weight="light" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <CartButton />
          <button
            type="button"
            className="border border-black px-4 py-2 text-sm font-light hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => setIsMenuOpen(true)}
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
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full md:w-[600px] bg-white z-50 shadow-2xl"
            >
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-end items-center p-6 md:p-8 border-b border-neutral-200">
                  <button
                    type="button"
                    className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XIcon size={20} weight="regular" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col justify-center px-8 md:px-12">
                  <div className="space-y-1">
                    {menuLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          className="group block py-4 border-b border-neutral-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-4xl md:text-5xl font-light group-hover:opacity-60 transition-opacity">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 md:p-12 border-t border-neutral-200"
                >
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] mb-3 text-neutral-400">CONNECT</p>
                      <div className="space-y-2">
                        <a
                          href="mailto:hello@hirachu.com"
                          className="block text-base text-neutral-600 hover:text-black transition-colors"
                        >
                          hello@hirachu.com
                        </a>
                        <a
                          href="#"
                          className="block text-base text-neutral-600 hover:text-black transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
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
