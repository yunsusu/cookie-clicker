import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMoreAuto = create(
  persist(
    set => ({
      more: [
        {
          img: "1",
          price: 100,
          count: 0,
        },
        {
          img: "2",
          price: 200,
          count: 0,
        },
        {
          img: "3",
          price: 250,
          count: 0,
        },
        {
          img: "4",
          price: 300,
          count: 0,
        },
        {
          img: "5",
          price: 350,
          count: 0,
        },
        {
          img: "6",
          price: 400,
          count: 0,
        },
      ],
      moreAuto: index =>
        set(state => ({
          more: state.more.map((item, idx) =>
            idx === index
              ? { ...item, price: item.price + 100, count: item.count + 1 }
              : item,
          ),
        })),
    }),
    {
      name: "cookie-moreAuto", // 로컬 스토리지에 저장할 때 사용될 키
      getStorage: () => localStorage, // 상태를 저장할 스토리지 지정
    },
  ),
);

export default useMoreAuto;
