"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
const tokenContex = createContext("");

export default function TokenContex({ children }: { children: ReactNode }) {
  const [token, setToken] = useState("");
  const SubmitToken = (token: string) => {
    setToken(`Bearer ${token}`);
    localStorage.setItem("token", `Bearer ${token}`);
  };

useEffect(()=> {
    const cachedToken =localStorage.getItem('token');
if(cachedToken){
setToken(cachedToken);
}
} , [])

  return (
    <tokenContex.Provider value={{ token, SubmitToken }}>
      {children}
    </tokenContex.Provider>
  );
}
export { tokenContex };
