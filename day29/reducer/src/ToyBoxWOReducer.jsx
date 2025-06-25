import React, { useState } from "react";

function ToyBoxWOReducer() {
  const [toys, setToys] = useState(["Cars", "Dolls", "Copter", "Animals"]);

  const addToys = (toy) => {
    setToys([...toys, toy]);
  };

  const removeToys = (toy) => {
    setToys(toys.filter((t) => t !== toy));
  };

  return (
    <div>
      <h1>Toys</h1>
      {toys.map((toy, index) => (
        <p key={index}>{toy}</p>
      ))}

      <button
        onClick={() => {
          addToys("Puzzles");
        }}
      >
        Add Puzzles
      </button>
      <button
        onClick={() => {
          removeToys("Dolls");
        }}
      >
        Remove Dolls
      </button>
    </div>
  );
}

export default ToyBoxWOReducer;
