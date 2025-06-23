import React from 'react'

function GrandChild(props) {
  return (
    <div>
      <p>Grand Child's Name : {props.familyName}</p>
    </div>
  )
}

export default GrandChild