import React from 'react'

function Header(props) {
  return (
    <div>
      <div className = "header">{props.name}</div>
    </div>
  )
}

export default Header