import { useState } from "react"
import Tree from "./Tree"

function App() {
  const [color, setColor] = useState('Yellow');
  const [fruit, setFruit] = useState('Jackfruit');

  function changeColor(newColor) {
    setColor(newColor);
  }
  function changeFruit(newFruit) {
    setFruit(newFruit);
  }

  return (
    <div>
      <Tree color={color} fruit={fruit}></Tree>
      <button onClick={()=> changeColor('Red')}>Red</button> 
      <button onClick={()=> changeColor('Blue')}>Blue</button> <br /><br />
      <button onClick={()=> changeFruit('Grapes')}>Grow Grapes</button>
      <button onClick={()=> changeFruit('Watermelons')}>Grow Watermelons</button>
    </div>
  )
}

export default App
