import React from "react";
import { useState } from "react";
import Profile from "./Profile"
import { UserContextProvider } from "./UserContext";




function App() {

  return (
    <main>
      <UserContextProvider>
        <Profile></Profile>
      </UserContextProvider>
    </main>);
}
export default App;
