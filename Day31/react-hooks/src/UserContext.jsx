import { createContext, useState } from "react";

export const UserContext = createContext({
  name: null,
  course: null,
})

const John = {
  name: "John",
  course: "DevOps",
};

const Jack = {
  name: "Jack",
  course: "FSD",
};

export function UserContextProvider({ children }) {


  const [user, setUser] = useState(John);

  const toggleUser = () => {
    if (user === Jack) {
      setUser(John);
    }
    else {
      setUser(Jack);
    }
  }
  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      {children}
    </UserContext.Provider>

  )
}