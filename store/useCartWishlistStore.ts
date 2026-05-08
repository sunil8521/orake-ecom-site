import { create } from 'zustand';

interface CartWishlistState {
  cartCount: number;
  wishlistCount: number;
  setCartCount: (count: number) => void;
  setWishlistCount: (count: number) => void;
  incrementCart: (by?: number) => void;
  decrementCart: (by?: number) => void;
  incrementWishlist: () => void;
  decrementWishlist: () => void;
}

export const useCartWishlistStore = create<CartWishlistState>((set) => ({
  cartCount: 0,
  wishlistCount: 0,
  setCartCount: (count) => set({ cartCount: count }),
  setWishlistCount: (count) => set({ wishlistCount: count }),
  incrementCart: (by = 1) => set((state) => ({ cartCount: state.cartCount + by })),
  decrementCart: (by = 1) => set((state) => ({ cartCount: Math.max(0, state.cartCount - by) })),
  incrementWishlist: () => set((state) => ({ wishlistCount: state.wishlistCount + 1 })),
  decrementWishlist: () => set((state) => ({ wishlistCount: Math.max(0, state.wishlistCount - 1) })),
}));
