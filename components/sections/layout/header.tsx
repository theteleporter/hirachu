"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X } from "@phosphor-icons/react";
import { CartButton } from "@/components/cart/cart-button";

const menuLinks = [
  { label: "Home", href: "/", description: "Back to start" },
  { label: "Shop", href: "/shop", description: "Browse dolls" },
  { label: "About", href: "/about", description: "Our story" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 md:px-10 py-4 md:py-5 flex justify-between items-center border-b bg-white relative z-40 sticky top-0">
        <Link href="/" className="font-hachi text-2xl font-light">
          Hirachu
        </Link>
        <div className="flex items-center gap-2">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white z-50 shadow-2xl"
            >
              <div className="relative h-full flex flex-col">
                {/* Close Button */}
                <div className="flex justify-between items-center p-6 border-b">
                  <span className="font-hachi text-2xl">menu</span>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X size={20} weight="light" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center px-8 py-12 space-y-2">
                  {menuLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className="group block py-4 border-b border-neutral-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-baseline justify-between">
                          <span className="text-4xl md:text-5xl font-light group-hover:translate-x-2 transition-transform duration-300">
                            {link.label}
                          </span>
                          <span className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 font-light uppercase tracking-wide">
                          {link.description}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-8 border-t bg-neutral-50"
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">FOLLOW US</p>
                      <div className="flex gap-4 text-sm">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">TikTok</a>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">SUPPORT</p>
                      <p className="text-sm">hello@hirachu.com</p>
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
