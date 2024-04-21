import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCookie = create(
  persist(
    set => ({
      cookie: "",
      setCookie: text => set({ cookie: text }),
    }),
    {
      name: "cookie-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default useCookie;
