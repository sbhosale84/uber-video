import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found, redirecting to login...");
        navigate("/login");
        return;
      }

      try {
        console.log("Sending logout request with token:", token);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Logout successful:", response.data);
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Logout failed:", error);
        if (error.response && error.response.status === 401) {
          console.warn(
            "Unauthorized request, clearing token and redirecting..."
          );
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
