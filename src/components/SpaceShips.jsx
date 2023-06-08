import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import {
  getNextPage,
  getDetailsPage,
  setFiltered,
  getFiltered,
} from "../redux/starWars/starWarsSlice";

function SpaceShips() {
  const filteredShips = useSelector((state) => state.spaceShips.filteredShips);
  const isLoading = useSelector((state) => state.spaceShips.isLoading);
  const nextPageUrl = useSelector((state) => state.spaceShips.nextPageUrl);
  const sortBy = useSelector((state) => state.spaceShips.sortBy);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFiltered(sortBy));
  }, [nextPageUrl, dispatch]);

  const handleClick = () => {
    dispatch(getNextPage(nextPageUrl));
  };

  const handleDetails = (url) => {
    dispatch(getDetailsPage(url));
  };

  return (
    <div className="flex justify-center flex-col mt-5 ">
      <Filter />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 bg-slate-700 opacity-90 rounded-xl text-xs p-5 w-4/5 max-w-7xl">
          {!isLoading &&
            filteredShips.map((ship, i) => {
              return (
                <div
                  className="flex flex-col justify-center p-5 m-2 border-2 bg-black rounded-xl border-yellow-400 cursor-pointer hover:scale-105
                shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
                  key={i}
                >
                  <div className="m-3 flex justify-center rounded-3xl border-b-4 border-t-0 border-yellow-400">
                    <img
                      src="https://fmss-final-case-mustafa-sahin.vercel.app/images/black-CR90_corvette.jpg"
                      alt="ship.name"
                      className="w-28 rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-center">
                      Rating: ({ship.hyperdrive_rating})
                    </p>
                    <div className="flex flex-col text-center">
                      <h4>{ship.name}</h4>
                      <h4>{ship.model}</h4>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row justify-between">
                        <div>Crew:</div>
                        <div>{ship.crew}</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Passengers:</div>
                        <div>{ship.passengers}</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Length:</div>
                        <div>{ship.length}</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Cargo Capacity:</div>
                        <div>{ship.cargo_capacity}</div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/spaceshipdetails"
                    className="flex justify-center"
                    onClick={() => handleDetails(ship.url)}
                  >
                    <button className="text-yellow-400 hover:underline font-semibold m-2">
                      Click Detail
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <button onClick={handleClick}>Load More</button>
    </div>
  );
}

export default SpaceShips;
