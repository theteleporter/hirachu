'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from './products';

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productSlug: string) => void;
  isInWishlist: (productSlug: string) => boolean;
  toggleItem: (product: Product) => void;
  clearWishlist: () => void;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('hirachu-wishlist');
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse wishlist:', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('hirachu-wishlist', JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.slug === product.slug);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  const removeItem = (productSlug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== productSlug));
  };

  const isInWishlist = (productSlug: string) => {
    return items.some((item) => item.slug === productSlug);
  };

  const toggleItem = (product: Product) => {
    if (isInWishlist(product.slug)) {
      removeItem(product.slug);
    } else {
      addItem(product);
    }
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const totalItems = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        isInWishlist,
        toggleItem,
        clearWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
}
