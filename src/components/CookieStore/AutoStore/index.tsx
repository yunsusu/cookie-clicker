import jelly1 from "../../../assets/img/jelly1.webp";
import jelly2 from "../../../assets/img/jelly2.webp";
import jelly3 from "../../../assets/img/jelly3.webp";
import jelly4 from "../../../assets/img/jelly4.png";
import jelly5 from "../../../assets/img/jelly5.webp";
import jelly6 from "../../../assets/img/jelly6.webp";
import useCookie from "../../../stores/cookie.js";
import useMoreAuto from "../../../stores/moreAuto.js";

interface upgradeType {
  img: string;
  price: number;
  count: number;
}

function AutoStore() {
  const { cookie, setCookie } = useCookie();
  const { more, moreAuto } = useMoreAuto();

  const imageBox = {
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
