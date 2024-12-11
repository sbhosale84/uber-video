import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehicleType("");
    setVehicleCapacity("");
    setVehiclePlate("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-1"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={(e) => submitHandler(e)}>
          {/* Name Section */}
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex justify-between gap-3 mb-4">
            <input
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First name"
            />
            <input
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last name"
            />
          </div>

          {/* Email Section */}
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            className="border bg-[#eeeeee] w-full rounded mb-5 px-4 py-2 text-lg placeholder:text-base"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
          />

          {/* Password Section */}
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="border bg-[#eeeeee] w-full mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />

          {/* Vehicle Details Section */}
          <h3 className="text-base font-medium mb-2">Vehicle Details</h3>
          <div className="flex justify-between gap-3 mb-4">
            <input
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Color"
            />
            <select
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <div className="flex justify-between gap-3 mb-4">
            <input
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-base"
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Capacity"
            />
            <input
              className="border bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-sm placeholder:text-base"
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Plate Number"
            />
          </div>

          <button className="w-full bg-black text-white mb-2 p-2 rounded font-bold">
            Register Captain
          </button>
        </form>
        <p className="text-center p-3">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <p className="text-[10px] py-3 leading-tight text-gray-400">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline">Google Policy</span> and{" "}
        <span className="underline">Terms and Service apply</span>
      </p>
    </div>
  );
};

export default CaptainSignup;
