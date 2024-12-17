import React from "react";

const LocationSearchPanel = ({ setVehiclePanelOpen, setPanelOpen }) => {
  const locations = [
    "24B, Chandikamata Apt. kawiltali, Chiplun,415605",
    "Police Headquarter, near Ajinkya road, Mumbai,",
    "Shivakrupa sadan near NAB Eye Hosiptal, chiplun",
    "Shivaji chowk, chiplun, 415605",
  ];
  return (
    <div>
      {/* sample data */}
      {locations.map((location) => {
        return (
          <div
            key={location}
            onClick={() => {
              setVehiclePanelOpen(true), setPanelOpen(false);
            }}
            className="flex flex-row border-2 active:border-2 p-2 active:border-black rounded-lg items-center my-4 justify-start gap-4"
          >
            <h2 className="bg-[#eee] h-10 w-14 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
