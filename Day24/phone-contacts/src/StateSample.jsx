import React, { useState } from "react";
import './StateSample.css'

function StateSample() {
  const [counter, setCounter] = useState(0);
  
  const updateCounter = () => {
    setCounter(counter + 1);
  }

  return (
  <div>
    <button onClick={updateCounter}>Count is : {counter}</button>
  </div>
  );
}

export default StateSample;
