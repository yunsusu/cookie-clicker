import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMoreAuto = create(
  persist(
    set => ({
      more: [
        {
          img: "1",
          basePrice: 50,
          price: 100,
          count: 0,
        },
        {
          img: "2",
          basePrice: 100,
          price: 200,
          count: 0,
        },
        {
          img: "3",
          basePrice: 150,
          price: 250,
          count: 0,
        },
        {
          img: "4",
          basePrice: 200,
          price: 300,
          count: 0,
        },
        {
          img: "5",
          basePrice: 150,
          price: 350,
          count: 0,
        },
        {
          img: "6",
          basePrice: 200,
          price: 400,
          count: 0,
        },
      ],
      moreAuto: (index, i) =>
        set(state => ({
          more: state.more.map((item, idx) =>
            idx === index && i !== 0
              ? {
                  ...item,
                  price: Math.floor(item.price + i * item.basePrice),
                  count: item.count + i,
                }
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
