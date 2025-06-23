import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./Home";
import { themeChange } from "./userContext";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <themeChange.Provider value={theme}>
        <Home></Home>
      </themeChange.Provider>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default App;
