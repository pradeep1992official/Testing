import React from "react";
import TestItem from "./TestItem";

function TestList(props) {
  return (
    <div>
      {props.tasks.map(task => (
        <TestItem key={task.id} task={task} onComplete = {props.onComplete}></TestItem>
      ))}
    </div>
  )
}

export default TestList;
