import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSubStore = create(
  persist(
    set => ({
      upgrade: [
        {
          img: "2",
          price: 100,
          count: 0,
        },
        {
          img: "3",
          price: 100,
          count: 0,
        },
        {
          img: "4",
          price: 100,
          count: 0,
        },
        {
          img: "5",
          price: 100,
          count: 0,
        },
        {
          img: "6",
          price: 100,
          count: 0,
        },
      ],
      increasePrice: index =>
        set(state => ({
          upgrade: state.upgrade.map((item, idx) =>
            idx === index
              ? { ...item, price: item.price + 100, count: item.count + 1 }
              : item,
          ),
        })),
    }),
    {
      name: "cookie-substore", // 로컬 스토리지에 저장할 때 사용될 키
      getStorage: () => localStorage, // 상태를 저장할 스토리지 지정
    },
  ),
);

export default useSubStore;
