import { useEffect, useState } from 'react'
import TestList from "./TestList"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks([{id : 1, title : "Water the Plants", complete : false},
      {id : 2, title : "Plow the Land", complete : false},
      {id : 3, title : "Ferment the Fertilizer", complete : false}
    ])
  },[]);

  const handleComplete = (taskID) => {
    const updatedTasks = tasks.map(task => task.id === taskID ? {...task, complete : true} : task);
    setTasks(updatedTasks);
  }

  return (
    <div>
        <TestList tasks={tasks} onComplete={handleComplete}></TestList>
    </div>
  )
}

export default App
