'use client';

import { useCart } from '@/lib/cart-context';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { X, Minus, Plus, ShoppingBag } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[440px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShoppingBag weight="duotone" className="text-pink-600" />
                Cart ({totalItems})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBag size={80} weight="thin" className="text-neutral-300 mb-4" />
                <p className="text-neutral-600 text-lg mb-2">Your cart is empty</p>
                <p className="text-neutral-400 text-sm mb-6">Add some dolls to get started!</p>
                <button
                  onClick={closeCart}
                  className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-4 bg-neutral-50 rounded-2xl"
                    >
                      {/* Image */}
                      <Link
                        href={`/shop/${item.product.slug}`}
                        onClick={closeCart}
                        className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <Link
                            href={`/shop/${item.product.slug}`}
                            onClick={closeCart}
                            className="font-semibold text-neutral-900 hover:text-pink-600 transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-neutral-500 mt-1">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border border-neutral-200">
                            <button
                              onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                              className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                            >
                              <Minus size={16} weight="bold" />
                            </button>
                            <span className="text-sm font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                              className="p-1 hover:bg-neutral-100 rounded-full transition-colors"
                            >
                              <Plus size={16} weight="bold" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.product.slug)}
                            className="text-sm text-neutral-400 hover:text-red-600 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-neutral-600">Subtotal</span>
                    <span className="text-2xl font-bold text-neutral-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full py-4 bg-pink-600 text-white rounded-full font-bold text-lg hover:bg-pink-700 transition-colors mb-3">
                    Checkout
                  </button>
                  <button
                    onClick={closeCart}
                    className="w-full py-3 bg-white border border-neutral-300 text-neutral-700 rounded-full font-semibold hover:bg-neutral-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
