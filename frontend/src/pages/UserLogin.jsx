import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
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
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            value={userData.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" border bg-[#eeeeee] w-full rounded px-4 py-2 text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            value={userData.password}
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
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <Link to={"/captain-login"} className="w-full flex items-center justify-center bg-green-500 text-white p-2 rounded font-bold">
        Sign in is as captain
      </Link>
    </div>
  );
};

export default UserLogin;