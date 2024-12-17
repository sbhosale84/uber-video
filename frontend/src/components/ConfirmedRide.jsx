import React from "react";

const ConfirmedRide = ({ setConfirmedRidePanel, setVehicleFound }) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          setConfirmedRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-xl text-gray-500"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-3">Confirm your ride</h3>
      <div className="flex gap-4 justify-between items-center flex-col ">
        <img
          className="h-24"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col items-center gap-3 mt-5">
        <div className="flex items-center p-2 justify-start gap-5 w-full border-b-2 border-gray-200">
          <i className="ri-map-pin-2-fill"></i>
          <div className="">
            <h3 className="font-bold">526/11-A</h3>
            <p className="font-medium  text-gray-500">
              Chiplun kaviltali, 415605
            </p>
          </div>
        </div>
        <div className="flex items-center p-2 justify-start gap-5 w-full border-b-2 border-gray-200">
          <i className="ri-square-fill"></i>
          <div className="">
            <h3 className="font-bold">Third Wave Coffee</h3>
            <p className="font-medium  text-gray-500">
              Chiplun kaviltali, 415605
            </p>
          </div>
        </div>
        <div className="flex items-center p-2 justify-start gap-5 w-full ">
          <i className="ri-bank-card-fill"></i>
          <div className="">
            <h3 className="font-bold">₹193.34</h3>
            <p className=" font-medium  text-gray-500 ">Cash Cash</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setVehicleFound(true), setConfirmedRidePanel(false);
        }}
        className="w-full text-white active:bg-green-600 bg-green-500 font-semibold p-2 rounded-lg mt-5"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmedRide;
