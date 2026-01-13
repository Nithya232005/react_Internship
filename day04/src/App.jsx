import React, { useState, useMemo, useCallback } from "react";
import "./App.css";
function expensiveCalculation(num) {
  console.log("Calculating:", num);
  return num * 10;
}

const ListItem = React.memo(({ number }) => {
  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  console.log("ListItem rendered:", number);

  return <li>{number} → {result}</li>;
});
const NumberList = React.memo(({ numbers }) => {
  console.log("NumberList rendered");

  return (
    <ul>
      {numbers.map((num) => (
        <ListItem key={num} number={num} />
      ))}
    </ul>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="container">
      <h2>Optimized List</h2>

      <button onClick={increment}>Counter: {count}</button>

      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
