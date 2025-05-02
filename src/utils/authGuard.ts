
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthGuard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (!userData) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [navigate]);

  return { isAuthenticated, isLoading };
};

export const getUser = () => {
  const userData = localStorage.getItem("paygo-user");
  if (!userData) return null;
  return JSON.parse(userData);
};

export const logout = (navigate: (path: string) => void) => {
  localStorage.removeItem("paygo-user");
  navigate("/login");
};
