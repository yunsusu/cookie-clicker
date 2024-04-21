import "./style.scss";
import ScssExample from "./components/scss-example";
import useToggle from "./hooks/useToggle";
import CookieClick from "./components/CookieClick";

function App() {
  const [isExPage, handleRoutePage] = useToggle(false);

  if (isExPage) {
    return <ScssExample onRoutePage={handleRoutePage} />;
  }

  return (
    <>
      <main>
        <article>
          <CookieClick />
        </article>
        <article>지수쓰 파트</article>
        <article>
          <button
            style={{ backgroundColor: "red", padding: "24px" }}
            onClick={handleRoutePage}
          >
            scss 예시 페이지로 이동
          </button>
          지원쓰 파트
        </article>
      </main>
    </>
  );
}

export default App;
