import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const exists = get().items.find((i) => i.id === product.id);
        if (exists) {
          set({
            items: get().items.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...product, quantity: 1 }] });
        }
      },

      removeItem: (id) => {
        const item = get().items.find((i) => i.id === id);
        if (item.quantity === 1) {
          set({ items: get().items.filter((i) => i.id !== id) });
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
        }
      },

      deleteItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),

      clearCart: () => set({ items: [] }),

      getTotal: () =>
        get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;