import "./style.scss";
import Cookie from "../../assets/img/cookie.webp";
import { useEffect, useState } from "react";
import useCookie from "../../stores/cookie.ts";
import useSubStore from "../../stores/storeSub.ts";
import useMoreAuto from "../../stores/moreAuto.ts";
import Snowflakes from "./Snow.js";

interface upgradeType {
  img: string;
  price: number;
  count: number;
}

function CookieClick() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cookie, setCookie }: any = useCookie();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { upgrade }: any = useSubStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { more }: any = useMoreAuto();
  const [cookieCount, setCookieCount] = useState<number>(cookie);
  const [moreCookie, setMoreCookie] = useState<number>(0);
  const [moreClick, setMoreClick] = useState<number>(0);

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
    let count = 1;
    upgrade.map((item: upgradeType, index: number) => {
      count += item.count * (index + 1);
    });
    setMoreClick(count);
  }, [upgrade]);

  useEffect(() => {
    let count = 1;
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
      <h2 className="subTitle">나의 제과점</h2>
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
