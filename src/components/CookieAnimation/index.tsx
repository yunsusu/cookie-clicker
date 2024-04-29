import "./style.scss";
import useCookie from "../../stores/cookie.ts";
import useSubStore from "../../stores/storeSub.ts";
import useMoreAuto from "../../stores/moreAuto.ts";

function CookieAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { cookie, setCookie }: any = useCookie();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { upgrade }: any = useSubStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { more }: any = useMoreAuto();

  return (
    <div className="midWrap">
      <div className="upgradeAni">
        {/* {upgrade.map((item, index) => (
          <div key={index}>{item}</div>
        ))} */}
      </div>
    </div>
  );
}

export default CookieAnimation;
