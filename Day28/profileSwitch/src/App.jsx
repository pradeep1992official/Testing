import { useState } from "react";
import { userContext } from "./UserContext";
import Account from "./Account";

const pradeep = {
  name: "Pradeep Srinivasan",
  course: "Full Stack Development",
};

const hasma = {
  name: "HasmaShruthi Sakthivel",
  course: "DevOps",
};

function App() {
  const [name, setName] = useState(pradeep);

  const changeUser = () => {
    setName(name === pradeep ? hasma : pradeep);
  };
  return (
    <div>
      <userContext.Provider value={name}>
        <Account></Account>
      </userContext.Provider>
      <button onClick={changeUser}> Change User</button>
    </div>
  );
}

export default App;
