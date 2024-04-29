import "./style.scss";
import Cookie from "../../assets/img/cookie.webp";
import { useEffect, useState } from "react";
import useCookie from "../../stores/cookie.js";
import useSubStore from "../../stores/storeSub.js";
import useMoreAuto from "../../stores/moreAuto.js";
import Snowflakes from "./Snow.js";

interface upgradeType {
  img: string;
  price: number;
  count: number;
}

function CookieClick() {
  const { cookie, setCookie } = useCookie();
  const { upgrade } = useSubStore();
  const { more } = useMoreAuto();
  const [cookieCount, setCookieCount] = useState<number>(cookie);
  const [moreCookie, setMoreCookie] = useState<number>(1);
  const [moreClick, setMoreClick] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount(cookie + moreCookie);
    }, 1000);

    return () => clearInterval(interval);
  }, [moreCookie, cookie]);

  useEffect(() => {
    setCookie(cookieCount);
  }, [cookieCount, setCookie]);

  const clickCookie = () => {
    setCookieCount(cookieCount + moreClick);
  };

  useEffect(() => {
    let count = 0;
    upgrade.map((item: upgradeType, index: number) => {
      count += item.count * (index + 1);
    });
    setMoreClick(count);
  }, [upgrade]);

  useEffect(() => {
    let count = 0;
    more.map((item: upgradeType, index: number) => {
      count += item.count * (index + 1);
    });
    setMoreCookie(count);
  }, [more]);

  return (
    <div className="wrap">
      {moreCookie > 100 ? (
        <Snowflakes count={100 / 2} />
      ) : (
        <Snowflakes count={moreCookie / 2} />
      )}
      <h2 className="subTitle">지원의 제과점</h2>
      <h2 className="mainTitle">
        {formatNumber(cookieCount)} 쿠키
        <span>초당 : {formatNumber(moreCookie)}</span>
        <span>클릭당 : {formatNumber(moreClick)}</span>
      </h2>
      <img src={Cookie} className="clicker" onClick={clickCookie} />
    </div>
  );
}

export default CookieClick;

function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
