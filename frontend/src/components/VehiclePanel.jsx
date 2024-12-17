import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmedRidePanel }) => {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          setVehiclePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-xl text-gray-500"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-3">Chose a Vehicle</h3>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl p-3 w-full items-center justify-between mb-2"
      >
        <img
          className="w-20 h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹192.34</h2>
      </div>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl p-3 w-full items-center justify-between mb-2"
      >
        <img
          className="w-20 h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹86.60</h2>
      </div>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          setVehiclePanelOpen(false);
        }}
        className="flex border-2 active:border-black bg-gray-100 rounded-xl p-3 w-full items-center justify-between "
      >
        <img
          className="w-20 h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹60.24</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
