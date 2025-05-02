import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let name = "Pradeep Srininvasan";
  let age = 33;

  return (
    <>
    <div>Phone Contact App using React</div>
      <button>Add</button>
      <div className="main">
        <span>Name : {name} </span>
        <span>Age :{age} </span>
      </div>
    </>
  )
}

export default App
