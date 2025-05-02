import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);

  let postOne = "Master Class on FSD";
  let postTwo = "Roadmap - FSD";
  let postThree = "Career Opportunities";

  return (
    <>
      <h1>Mr.Pradeep Srinivasan's MasterClass on Full Stack Developmet</h1>
      <Post name = {postOne} venue={"Coimbatore"} date={"05-02-2025"}></Post>
      <Post name = {postTwo} venue={"Pondicherry"} date={"15-03-2025"}></Post>
      <Post name = {postThree} venue={"Online"} date={"08-04-2025"}></Post>
    </>
  );
}

export default App;
