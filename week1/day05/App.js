import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  function handleClick(btn) {
    setValue(value + btn);
  }
function handleEqual(e) {
    e.preventDefault(); 
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  }
  function clearAll() {
    setValue("");
  }

  return (
    <form onSubmit={handleEqual} style={{ width: "220px", margin: "50px auto" }}>
      <h3>Calculator</h3>

      <input
        type="text"
        value={value}
        readOnly
        style={{ width: "100%", height: "40px", marginBottom: "10px" }}
      />

      <div>
        <button type="button" onClick={() => handleClick("1")}>1</button>
        <button type="button" onClick={() => handleClick("2")}>2</button>
        <button type="button" onClick={() => handleClick("3")}>3</button>
        <button type="button" onClick={() => handleClick("+")}>+</button>
      </div>

      <div>
        <button type="button" onClick={() => handleClick("4")}>4</button>
        <button type="button" onClick={() => handleClick("5")}>5</button>
        <button type="button" onClick={() => handleClick("6")}>6</button>
        <button type="button" onClick={() => handleClick("-")}>-</button>
      </div>

      <div>
        <button type="button" onClick={() => handleClick("7")}>7</button>
        <button type="button" onClick={() => handleClick("8")}>8</button>
        <button type="button" onClick={() => handleClick("9")}>9</button>
        <button type="button" onClick={() => handleClick("*")}>*</button>
      </div>

      <div>
        <button type="button" onClick={clearAll}>C</button>
        <button type="button" onClick={() => handleClick("0")}>0</button>
        <button type="submit">=</button>
        <button type="button" onClick={() => handleClick("/")}>/</button>
      </div>
    </form>
  );
}
export default App;
