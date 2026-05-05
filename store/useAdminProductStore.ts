import { create } from "zustand";
import type { AdminProduct } from "@/lib/data/admin-products";

interface AdminProductState {
  isModalOpen: boolean;
  editProduct: AdminProduct | null;
  openModal: (product?: AdminProduct | null) => void;
  closeModal: () => void;
}

export const useAdminProductStore = create<AdminProductState>((set) => ({
  isModalOpen: false,
  editProduct: null,
  openModal: (product = null) => set({ isModalOpen: true, editProduct: product }),
  closeModal: () => set({ isModalOpen: false, editProduct: null }),
}));
