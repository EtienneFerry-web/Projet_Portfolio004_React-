import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface WishlistContextValue {
  ids: number[];
  toggle: (id: number) => void;
  has: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sf_wishlist') ?? '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('sf_wishlist', JSON.stringify(ids));
  }, [ids]);

  function toggle(id: number) {
    setIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  }

  function has(id: number) {
    return ids.includes(id);
  }

  return (
    <WishlistContext.Provider value={{ ids, toggle, has }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
}
