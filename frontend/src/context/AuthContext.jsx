import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const register = async (name, email, password, phone) => {
    setLoading(true);
    try {
      const data = await authAPI.register(name, email, password, phone);
      if (data.token) {
        setToken(data.token);
        setUser(data.user);
      }
      return data;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await authAPI.login(email, password);
      if (data.token) {
        setToken(data.token);
        setUser(data.user);
      }
      return data;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    if (!token) return;
    try {
      const data = await authAPI.updateProfile(token, profileData);
      if (data.user) {
        setUser(data.user);
      }
      return data;
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  const updateLocation = async (latitude, longitude) => {
    if (!token) return;
    try {
      await authAPI.updateLocation(token, latitude, longitude);
    } catch (error) {
      console.error("Location update failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        register,
        login,
        logout,
        updateProfile,
        updateLocation,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
