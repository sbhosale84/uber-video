import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
    }
    navigate("/captain-home");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-4"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" border bg-[#eeeeee] w-full rounded px-4 py-2 text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-[#eeeeee] w-full mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />
          <button className="w-full bg-black text-white mb-2 p-2 rounded font-bold">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to={"/captain-signup"} className="text-blue-600">
            Register as Captain
          </Link>
        </p>
      </div>
      <Link
        to={"/login"}
        className="w-full flex items-center justify-center bg-yellow-500 text-white p-2 rounded font-bold"
      >
        Sign in is as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
