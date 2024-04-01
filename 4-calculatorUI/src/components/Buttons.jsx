import "../App.css"

function Buttons() {
    const btnData = ["1", "2","3","+","4","5","6","-","7","8","9","x","0",".","=","/"]
  return (
    <>
        {btnData.map((item) => 
        <button type="button" 
        className="bbtn btn-secondary btn-lg dj-btn">{item}
        </button>
        )}
    </>
  )
}

export default Buttons;