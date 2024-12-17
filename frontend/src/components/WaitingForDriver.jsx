import React from "react";

const WaitingForDriver = ({ setWaitingForDriver }) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          setWaitingForDriver(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-xl text-gray-500"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium ">Ram</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 2232</h4>
          <p className="text-sm text-gray-500">Maruti Suziki Alto</p>
        </div>
      </div>
      <div className="flex gap-4 justify-between items-center flex-col "></div>
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
    </div>
  );
};

export default WaitingForDriver;
