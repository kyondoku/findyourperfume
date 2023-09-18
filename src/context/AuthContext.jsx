import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(
      //(user) => {setUser(user);}
      //전달받는 인자와 호출에 전달하는 인자가 같으므로
      //setUser
      (user) => {
        console.log(user);
        setUser(user);
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
