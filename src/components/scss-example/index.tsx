import styles from "./scss-example.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ScssExample({
  onRoutePage,
}: {
  onRoutePage: () => void;
}) {
  const isSelected = true;
  return (
    <>
      <button className={cx("button")} onClick={onRoutePage}>
        원래 페이지로 이동하기
      </button>
      <div>
        <h1>[ global ]</h1>
        <p className={cx("global")}></p>
      </div>
      <br />
      <div>
        <h1>[ reset ]</h1>
        <p className={cx("reset")}>폰트는 pretendard입니다.</p>
      </div>
      <br />
      <div>
        <h1>[ color ]</h1>
        <p className={cx("color")}>컬러는 변수로 적용합니다.</p>
      </div>
      <br />
      <div className={cx("z-index")}>
        <h1>[ z-index ]</h1>
        <p className={cx("z-index-test1")}>test1</p>
        <p className={cx("z-index-test2")}>test2</p>
      </div>
      <br />
      <div>
        <h1>[ flexbox ]</h1>
        <div className={cx("flexbox")}>
          <p></p>
          <p></p>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1>[ responsive ]</h1>
        <p className={cx("responsive")}></p>
      </div>
      <br />
      <div>
        <h1>[ text-style ]</h1>
        <p className={cx("text-style")}>
          폰트의 size, weight, color를 mixin으로 한번에 정할 수 있습니다.
        </p>
      </div>
      <br />
      <div>
        <h1>[ classnames 사용법 ]</h1>
        <p className={cx("example", "colored")}>
          class를 여러개 적용하려면 이렇게 하면 됩니다.
        </p>
        <p className={cx("example", { selected: isSelected })}>
          classnames로 조건부 스타일을 간결하게 적용할 수 있습니다.
        </p>
      </div>
    </>
  );
}
