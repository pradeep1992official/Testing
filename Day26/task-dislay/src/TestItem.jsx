import React from 'react'

function TestItem(props) {
  return (
    <div>
      <p>{props.task.title + " : "+props.task.complete}</p>
      <button onClick={()=>props.onComplete(props.task.id)}>complete</button>
    </div>
  )
} 

export default TestItem