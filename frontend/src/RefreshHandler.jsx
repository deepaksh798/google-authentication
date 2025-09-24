import React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userInfo = JSON.parse(data)?.token;

    if (userInfo) {
      setIsAuthenticated(true);
      if (location.pathname === "/login" || location.pathname === "/") {
        navigate("/dashboard", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);
  return null;
};

export default RefreshHandler;
