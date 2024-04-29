import AutoStore from "./AutoStore";
import SubStore from "./SubStore";
import "./style.scss";

function CookieStore() {
  return (
    <div className="storeWrap">
      <h2 className="title">상점</h2>

      <SubStore />

      <AutoStore />
    </div>
  );
}

export default CookieStore;
