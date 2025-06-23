import { useState } from 'react'
import Child from './Child';


function App() {
const [familyName, setFamilyname] = useState("");

const handleFamilyName = (name) => {
  setFamilyname(name);
}

  return (
    <div>
        <p>Family Name : {familyName}</p>
        <button onClick={() => handleFamilyName("Gellers")}>Family Name</button>
        <Child familyName={familyName}></Child>
    </div>
  )
}

export default App
