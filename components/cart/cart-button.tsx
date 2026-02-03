'use client';

import { useCart } from '@/lib/cart-context';
import { ShoppingBagIcon } from '@phosphor-icons/react/dist/ssr';
import { motion, AnimatePresence } from 'motion/react';

export function CartButton() {
  const { openCart, totalItems } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative p-2 hover:bg-neutral-100 rounded-full transition-colors"
      aria-label="Open cart"
    >
      <ShoppingBagIcon size={24} weight="bold" />
      
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {totalItems > 9 ? '9+' : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
