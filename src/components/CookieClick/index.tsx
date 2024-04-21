import "./style.scss";
import Cookie from "../../assets/img/cookie.webp";
import { useEffect, useState } from "react";
import useCookie from "../../stores/cookie.js";
import Snowflakes from "./Snow.js";

function CookieClick() {
  const { cookie, setCookie } = useCookie();
  const [cookieCount, setCookieCount] = useState<number>(cookie);
  const [moreCookie, setMoreCookie] = useState<number>(1);
  const [moreClick, setMoreClick] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount(prevCount => prevCount + moreCookie);
    }, 1000);

    return () => clearInterval(interval);
  }, [moreCookie, cookie]);

  useEffect(() => {
    setCookie(cookieCount);
  }, [cookieCount, setCookie]);

  const clickCookie = () => {
    setCookieCount(cookieCount + moreClick);
  };

  return (
    <div className="wrap">
      <div className="subTitle">지원의 제과점</div>
      <div className="mainTitle">
        {formatNumber(cookieCount)} 쿠키
        <span>초당 : {moreCookie}</span>
      </div>
      <img src={Cookie} className="clicker" onClick={clickCookie} />
      <Snowflakes count={moreCookie} />
    </div>
  );
}

export default CookieClick;

function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
