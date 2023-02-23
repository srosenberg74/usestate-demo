import React from "react";

function Count() {
    let count = 0;

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => count++}>
          <h2>+</h2>
        </button>
        <button onClick={() => count--}>
          <h2>-</h2>
        </button>
      </div>
    </div>
  );
}

export default Count;
