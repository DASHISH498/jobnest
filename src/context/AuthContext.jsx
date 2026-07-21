import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("jobnest-auth");

    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  function login(userData) {
    localStorage.setItem("jobnest-auth", JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("jobnest-auth");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}