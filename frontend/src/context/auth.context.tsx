import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  login(email: string, password: string): Promise<any>;
  logout(): Promise<any>;
  signed: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [signed, setSigned] = useState(false);

  useEffect(() => { }, []);

  async function login(email: string, password: string) {
    setLoading(true);
    setTimeout(() => {
      setSigned(true);
      setLoading(false);
    }, 2000);
  }

  async function logout() {
    setLoading(true);
    setTimeout(() => {
      setSigned(false);
      setLoading(false);
    }, 2000);
  }

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      signed,
    }} >
      {children}
    </AuthContext.Provider>
  );
};


export function useAuth() {
  return useContext(AuthContext);
}
