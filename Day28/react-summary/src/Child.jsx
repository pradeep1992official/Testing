import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
  return (
    <div>
      <p>Child's Name : {props.familyName}</p>
      <GrandChild familyName={props.familyName}></GrandChild>
    </div>
  )
}

export default Child