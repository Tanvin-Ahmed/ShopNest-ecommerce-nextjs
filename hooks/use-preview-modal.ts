import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalPropsType {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalPropsType>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));

export default usePreviewModal;
