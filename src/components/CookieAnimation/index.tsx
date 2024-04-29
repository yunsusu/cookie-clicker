import "./style.scss";
import useCookie from "../../stores/cookie.ts";
import useSubStore from "../../stores/storeSub.ts";
import useMoreAuto from "../../stores/moreAuto.ts";
import cookie2 from "../../assets/img/cookie2.webp";
import cookie3 from "../../assets/img/cookie3.webp";
import cookie4 from "../../assets/img/cookie4.webp";
import cookie5 from "../../assets/img/cookie5.webp";
import cookie6 from "../../assets/img/cookie6.webp";
import jelly1 from "../../assets/img/jelly1.webp";
import jelly2 from "../../assets/img/jelly2.webp";
import jelly3 from "../../assets/img/jelly3.webp";
import jelly4 from "../../assets/img/jelly4.png";
import jelly5 from "../../assets/img/jelly5.webp";
import jelly6 from "../../assets/img/jelly6.webp";

function CookieAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cookie, setCookie }: any = useCookie();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { upgrade }: any = useSubStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { more }: any = useMoreAuto();

  const imagePaths: ImageBox = {
    2: cookie2,
    3: cookie3,
    4: cookie4,
    5: cookie5,
    6: cookie6,
  };

  const imageBox: ImageBox = {
    1: jelly1,
    2: jelly2,
    3: jelly3,
    4: jelly4,
    5: jelly5,
    6: jelly6,
  };

  return (
    <>
      <div className="midWrap">
        <div className="upgradeAni">
          {upgrade.map((item, index) => {
            return item.count ? (
              <div key={index} className="imgWrap">
                <img
                  className="minImg"
                  src={imagePaths[item.img]}
                  alt="쿠키 이미지"
                />
                <p>{item.count}</p>
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="moreAni">
        {more.map((item, index) => (
          <div key={index} className="moreWrap">
            {Array.from({ length: item.count }, (_, i) => (
              <img src={imageBox[item.img]} alt="젤리" key={i} />
            ))}
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CookieAnimation;
