import React from "react";
import { useContext } from "react";
import { userContext } from "./UserContext";

function Account() {

  const user = useContext(userContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.course}</h2>
      
    </div>
  );
}

export default Account;
