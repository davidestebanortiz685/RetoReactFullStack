import { create } from "zustand";
import { persist } from "zustand/middleware";
import users from "../mockdata/users";

const useAuthStore = create(
  persist(
    (set, get) => ({
      currentUser: null,

      login: (email, password) => {
        const found = users.find(
          (u) => u.email === email && u.password === password
        );
        if (found) {
          set({ currentUser: found });
          return true;
        }
        return false;
      },

      register: (name, email, password) => {
        const exists = users.find((u) => u.email === email);
        if (exists) return false;
        const newUser = { id: Date.now(), name, email, password };
        users.push(newUser);
        set({ currentUser: newUser });
        return true;
      },

      logout: () => set({ currentUser: null }),

      isLoggedIn: () => get().currentUser !== null,
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;