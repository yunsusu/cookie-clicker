import "./style.scss";
import ScssExample from "./components/scss-example";
import useToggle from "./hooks/useToggle";
import CookieClick from "./components/CookieClick";
import CookieStore from "./components/CookieStore";
import CookieAnimation from "./components/CookieAnimation";

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
        <article>
          <CookieAnimation />
        </article>
        <article>
          <CookieStore />
        </article>
      </main>
    </>
  );
}

export default App;
