import { EncryptStorage } from "encrypt-storage";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  user?: LoginResponse;
  login: (user: LoginResponse) => void;
  logout: () => void;
}

const storage = new EncryptStorage("auth-storage");

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: undefined,
      login: (user) => set({ user }),
      logout: () => set({ user: undefined }),
    }),
    {
      name: "auth-storage",
      storage: {
        getItem: (name) => storage.getItem(name),
        setItem: (name, value) => storage.setItem(name, value),
        removeItem: (name) => storage.removeItem(name),
      },
    }
  )
);
