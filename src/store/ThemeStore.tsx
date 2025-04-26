import { create } from "zustand"; //create a global theme store
import { persist } from "zustand/middleware"; //use persist to save selected them under localstorage

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void; // function to switch  themes
}

//hook to create the themestore
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme:
        //set theme based on browser preferences
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      toggleTheme: () => {
        //switch themes
        const newTheme: Theme = get().theme === "light" ? "dark" : "light";
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
          );
        }

        set({ theme: newTheme });
      },
    }),
    {
      name: "theme", //local storage
      onRehydrateStorage: () => (state) => {
        if (state?.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);
