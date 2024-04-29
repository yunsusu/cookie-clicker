import jelly1 from "../../../assets/img/jelly1.webp";
import jelly2 from "../../../assets/img/jelly2.webp";
import jelly3 from "../../../assets/img/jelly3.webp";
import jelly4 from "../../../assets/img/jelly4.png";
import jelly5 from "../../../assets/img/jelly5.webp";
import jelly6 from "../../../assets/img/jelly6.webp";
import useCookie from "../../../stores/cookie.ts";
import useMoreAuto from "../../../stores/moreAuto.ts";

interface upgradeType {
  img: string;
  price: number;
  count: number;
}

interface ImageBox {
  [key: string]: string;
}

function AutoStore() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cookie, setCookie }: any = useCookie();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { more, moreAuto }: any = useMoreAuto();

  const imageBox: ImageBox = {
    1: jelly1,
    2: jelly2,
    3: jelly3,
    4: jelly4,
    5: jelly5,
    6: jelly6,
  };

  const handleClick = (index: number) => {
    if (cookie >= more[index].price) {
      moreAuto(index);
      setCookie(cookie - more[index].price);
    }
  };

  return (
    <div className="autoWrap">
      {more.map((item: upgradeType, index) => (
        <div className="jelly" key={index} onClick={() => handleClick(index)}>
          <img src={imageBox[item.img]} alt="젤리" />
          <p>{item.price}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
}

export default AutoStore;
