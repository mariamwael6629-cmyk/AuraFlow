import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/endpoints";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("auraflow_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auraflow_token");
    if (!token) {
      setLoading(false);
      return;
    }
    authApi
      .me()
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("auraflow_user", JSON.stringify(res.data));
      })
      .catch(() => {
        localStorage.removeItem("auraflow_token");
        localStorage.removeItem("auraflow_user");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  function persistSession(token, userData) {
    localStorage.setItem("auraflow_token", token);
    localStorage.setItem("auraflow_user", JSON.stringify(userData));
    setUser(userData);
  }

  async function login(email, password) {
    const res = await authApi.login({ email, password });
    persistSession(res.data.access_token, res.data.user);
    return res.data.user;
  }

  async function register(name, email, password) {
    const res = await authApi.register({ name, email, password });
    persistSession(res.data.access_token, res.data.user);
    return res.data.user;
  }

  function logout() {
    localStorage.removeItem("auraflow_token");
    localStorage.removeItem("auraflow_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
