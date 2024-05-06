import useCookie from "../../stores/cookie";

function MidTop() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setCookie }: any = useCookie();

  const handleReset = () => {
    const con = confirm("초기화 하시겠습니까?");
    if (con === true) {
      setCookie(0);
      window.localStorage.removeItem("cookie-substore");
      window.localStorage.removeItem("cookie-moreAuto");
      window.location.reload();
    }
  };

  return (
    <div className="midTop">
      <p>설정</p>
      <div>
        <button onClick={handleReset}>초기화</button>
      </div>
    </div>
  );
}

export default MidTop;
