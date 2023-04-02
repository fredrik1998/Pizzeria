import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      const storedUsername = localStorage.getItem("username");
      return storedUsername ? { username: storedUsername } : null;
    });
  
    console.log("UserProvider user:", user);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  