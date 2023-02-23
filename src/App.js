import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // let count = 0;

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("count = ", count);
          }}
        >
          <h2>+</h2>
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("count = ", count);
          }}
        >
          <h2>-</h2>
        </button>
      </div>
    </div>
  );
}

export default App;
