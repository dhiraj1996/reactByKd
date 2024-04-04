import "../App.css";

function Buttons({handleButton}) {
  const btnData = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  return (
    <>
      <div className="button-container">
        {btnData.map((item, index) => (
          <button type="button" key={index} className="bbtn btn-secondary btn-lg dj-btn"
          onClick={()=>handleButton(item)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
