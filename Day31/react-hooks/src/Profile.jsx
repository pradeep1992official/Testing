import React, { useContext } from 'react'
import Welcome from "./Welcome"
import Course from "./Course"
import { UserContext, UserContextProvider } from './UserContext';


function Profile() {
    const {user}  = useContext(UserContext);
    const {toggleUser}  = useContext(UserContext);
  return (
    <div>
      <Welcome></Welcome>
      <Course ></Course>
      <button onClick={toggleUser}>Toggle User</button>
    </div>
  )
}

export default Profile