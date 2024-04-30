import cookie2 from "../../../assets/img/cookie2.webp";
import cookie3 from "../../../assets/img/cookie3.webp";
import cookie4 from "../../../assets/img/cookie4.webp";
import cookie5 from "../../../assets/img/cookie5.webp";
import cookie6 from "../../../assets/img/cookie6.webp";
import useCookie from "../../../stores/cookie.ts";
import useSubStore from "../../../stores/storeSub.ts";

interface upgradeType {
  img: string;
  price: number;
  count: number;
}

interface ImageBox {
  [key: string]: string;
}

function SubStore() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cookie, setCookie }: any = useCookie();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { upgrade, increasePrice }: any = useSubStore();
  const imagePaths: ImageBox = {
    2: cookie2,
    3: cookie3,
    4: cookie4,
    5: cookie5,
    6: cookie6,
  };

  const clickUpgrade = (index: number) => {
    if (cookie >= upgrade[index].price) {
      increasePrice(index);
      setCookie(cookie - upgrade[index].price);
    }
  };

  return (
    <div className="subWrap">
      {upgrade.map((item: upgradeType, index: number) => (
        <div
          className={`subItem${cookie < item.price ? ` disable` : ""}`}
          key={index}
          onClick={() => clickUpgrade(index)}
        >
          <img src={imagePaths[item.img]} alt={`쿠키 이미지`} />
          <p>{item.price} 쿠키</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
}

export default SubStore;
