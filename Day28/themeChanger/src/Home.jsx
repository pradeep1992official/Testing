import React from 'react'
import { useContext } from 'react'
import { themeChange } from './userContext';

function Home() {

const theme = useContext(themeChange);

  return (
    <div style={{background: theme === 'light' ? "white" : "black", color: theme ==="light" ? "black" : "white", width : "100%", height : "300px"}}>
      The theme is : {theme}
    </div>
  )
}

export default Home