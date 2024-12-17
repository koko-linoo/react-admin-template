import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ThemeState {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeMode: "light",
      toggleTheme: () =>
        set(({ themeMode }) => ({
          themeMode: themeMode === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
