import { createContext, useState, useEffect } from "react";

import { login, register, getMe } from "./services/auth.api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelLogin = async (username, password) => {
    setLoading(true);
    try {
      const response = await login(username, password);
      setuser(response.user);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handelRegister = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await register(username, email, password);
      setuser(response.user);
      return response
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return(
    <AuthContext.Provider value={{user,loading,handelLogin,handelRegister}}>
        {children}
    </AuthContext.Provider>
  )
}
