import React, { useReducer } from "react";


function reducer(toys, action) {
  switch (action.type) {
    case "addToy":
      return [...toys, action.payload];

    case "removeToy":
      return toys.filter((t) => t !== action.payload);

    default:
      return toys;
  }
}

function Withreducer() {
  const [toys, dispatch] = useReducer(reducer, [
    "Cars",
    "Dolls",
    "Copter",
    "Animals",
  ]);

  return (
    <div>
      <h1>With Reducer</h1>
      {toys.map((toy, index) => (
        <p key={index}>{toy}</p>
      ))}

      <button onClick={() => dispatch({ type: "addToy", payload: "Puzzles" })}>
        Add Puzzles
      </button>
      <button onClick={() => dispatch({ type: "removeToy", payload: "Puzzles" })}>
        Remove Puzzles
      </button>
    </div>
  );
}

export default Withreducer;
