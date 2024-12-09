import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-bottom bg-[url(https://img.freepik.com/free-photo/red-traffic-light-pedestrians-with-countdown_23-2148139857.jpg?t=st=1733467905~exp=1733471505~hmac=fc33dd25c3882a0fd0d875e59ac733cde5c6d22ee0f122a72b0acb5ec1378d93&w=360)] h-screen pt-8  w-full bg-red-400 flex justify-between flex-col">
      <img
        className="w-16 ml-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white pb-7 px-5 py-5">
        <h2 className="text-3xl font-bold">Get started with uber</h2>
        <Link to={"/login"} className="flex items-center justify-center w-full rounded text-white py-3 bg-black mt-5">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
