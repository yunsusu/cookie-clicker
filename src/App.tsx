import "./style.scss";
import ScssExample from "./components/scss-example";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("");

  const handleRouteEx = () => {
    setCurrentPage("");
  };

  if (currentPage === "ex") {
    return <ScssExample onRouteEx={handleRouteEx} />;
  }

  return (
    <>
      <main>
        <article>윤수쓰 파트</article>
        <article>지수쓰 파트</article>
        <article>
          <button
            style={{ backgroundColor: "red", padding: "24px" }}
            onClick={() => setCurrentPage("ex")}
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
