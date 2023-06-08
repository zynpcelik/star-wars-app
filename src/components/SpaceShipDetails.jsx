import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SpaceShipDetails() {
  const shipDetails = useSelector((state) => state.spaceShips.shipDetails);
  const isLoading = useSelector((state) => state.spaceShips.isLoading);

  return (
    <div className="flex justify-center ">
      <div className="flex flex-row justify-between bg-slate-700 opacity-90 m-8 rounded-2xl ">
        {!isLoading && (
          <div>
            <Link to="/" className="underline pl-12 text-sm font-bold">
              Go Back
            </Link>
            <div className="grid grid-cols-2">
              <div className="p-10 pr-3">
                <img
                  src="https://fmss-final-case-mustafa-sahin.vercel.app/images/black-CR90_corvette.jpg"
                  alt="space_ship"
                  className="w-72 rounded-r-none rounded-l-3xl"
                />
              </div>
              <div className="pt-10 text-xs ">
                <h1 className="text-3xl font-semibold">{shipDetails.name}</h1>
                <p className="m-1">
                  <span className="font-semibold underline ">Model:</span>{" "}
                  {shipDetails.model}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">Manufucturer:</span>{" "}
                  {shipDetails.manufacturer}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">
                    Cost In Credits:
                  </span>{" "}
                  {shipDetails.cost_in_credits}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">Length:</span>{" "}
                  {shipDetails.length}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">
                    Max atmosphering speed:
                  </span>{" "}
                  {shipDetails.max_atmosphering_speed}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">Crew:</span>{" "}
                  {shipDetails.crew}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">Passengers:</span>{" "}
                  {shipDetails.passengers}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">
                    Cargo Capacity:
                  </span>{" "}
                  {shipDetails.cargo_capacity}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">Consumables:</span>{" "}
                  {shipDetails.consumables}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">
                    Hyperdrive Rating:
                  </span>{" "}
                  {shipDetails.hyperdrive_rating}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">MGLT:</span>{" "}
                  {shipDetails.MGLT}
                </p>
                <p className="m-1">
                  <span className="font-semibold underline">
                    Starship Class:
                  </span>{" "}
                  {shipDetails.starship_class}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpaceShipDetails;
