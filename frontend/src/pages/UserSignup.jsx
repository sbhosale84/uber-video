import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
    }
    navigate("/home");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-[59px]"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex justify-between gap-3 mb-4 ">
            <input
              className=" border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First name"
            />
            <input
              className=" border bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className=" border bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 text-lg placeholder:text-base"
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="border bg-[#eeeeee] w-full mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
          <button className="w-full bg-black text-white mb-2 p-2 rounded font-bold">
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <p className="text-[10px] leading-tight  text-gray-400">
        By proceeding, you consent to get calls, WhatsApp 0r message, including
        by automated means, from uber and its affiliates to number provided.
      </p>
    </div>
  );
};

export default UserSignup;
7;
