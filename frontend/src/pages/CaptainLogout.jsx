import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found, redirecting to login...");
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          console.log("Logout successful", response.status);
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        if (error.response && error.response.status === 401) {
          console.warn(
            "Unauthorized request, clearing token and redirecting..."
          );
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      }
    };
    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
