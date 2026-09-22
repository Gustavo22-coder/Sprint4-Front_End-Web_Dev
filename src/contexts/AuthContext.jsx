"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    setAuthenticated(localStorage.getItem("jovi-auth") === "true");
    setChecking(false);
  }, []);

  function login(user, password) {
    const valid = user.trim().toLowerCase() === "aluno" && password === "1234";

    if (valid) {
      localStorage.setItem("jovi-auth", "true");
      setAuthenticated(true);
    }

    return valid;
  }

  function logout() {
    localStorage.removeItem("jovi-auth");
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
