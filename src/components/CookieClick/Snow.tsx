import { useState, useEffect } from "react";
import "./Snowflakes.scss";
import { generateRandomNumber } from "./math.ts";
import IconSnow from "../../assets/img/cookie.webp";

interface Snowflakes {
  left: number;
  fallDelay: number;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

interface SnowflakesProps {
  count?: number; // 눈송이 개수
}

export default function Snowflakes({ count = 17 }: SnowflakesProps) {
  const [snowflake, setSnowflake] = useState<Snowflakes[]>([]);
  // 외부에서 On/Off를 제어할 경우 사용한다.
  const isShow = true;

  // 클라이언트 사이드에서만 실행되도록.
  useEffect(() => {
    const newSnowflake = Array.from({ length: count }).map(() => {
      const fallDelay = generateRandomNumber(0, 15, { fixed: 2 });
      const shakeDelay = Math.min(
        generateRandomNumber(0, 10, { fixed: 1 }),
        Number.parseFloat((fallDelay - 0.07).toFixed(1)),
      ); // fallDelay보다 무조건 길어야 한다. 그렇지 않으면 일부 구간 눈송이가 일자로 내리게 된다.
      return {
        left: generateRandomNumber(0, 100),
        fallDelay,
        shakeDelay,
        blur: generateRandomNumber(0.2, 0.5, { fixed: 1 }),
        opacity: generateRandomNumber(0.55, 0.95, { fixed: 2 }),
        size: generateRandomNumber(12, 18),
      };
    });
    setSnowflake(newSnowflake);
  }, [count]);

  return (
    <div
      className={`snowflake ${
        isShow && snowflake.length ? "visible" : "hidden"
      } snowWrap`}
      aria-hidden="true"
    >
      {snowflake.map((flake, index) => (
        <div
          key={`flake-${index}`}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            filter: `blur(${flake.blur}px)`,
            opacity: `${flake.opacity}`,
            animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
            WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
          }}
        >
          <img src={IconSnow} />
        </div>
      ))}
    </div>
  );
}
