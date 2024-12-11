import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!token) {
    return null;
  }

  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
