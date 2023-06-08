import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFiltered, getFiltered } from "../redux/starWars/starWarsSlice";
import "../App.css";

function Filter() {
  const dispatch = useDispatch("");
  const [passenger, setPassenger] = useState("");
  const [crew, setCrew] = useState("");
  const [length, setLength] = useState("");
  const [cargo, setCargo] = useState("");

  useEffect(() => {
    handleFilter();
  }, [passenger, crew, length, cargo]);

  const Sorting = (e) => {
    let sortBy = e.target.value;
    dispatch(setFiltered(sortBy));
  };

  const handleFilter = () => {
    let filter = {};
    if (passenger !== "") {
      filter.passenger = passenger;
    }
    if (crew !== "") {
      filter.crew = crew;
    }
    if (cargo !== "") {
      filter.cargo = cargo;
    }
    if (length !== "") {
      filter.length = length;
    }
    dispatch(getFiltered(filter));
  };

  const crewOptions = [
    { label: "All", value: "" },
    { label: "1+", value: "1" },
    { label: "10+", value: "10" },
    { label: "100+", value: "100" },
    { label: "500+", value: "500" },
    { label: "1000+", value: "1000" },
    { label: "100.000+", value: "100000" },
    { label: "250.000+", value: "250000" },
  ];

  const passengerOptions = [
    { label: "All", value: "" },
    { label: "10+", value: "10" },
    { label: "50+", value: "50" },
    { label: "100+", value: "100" },
    { label: "500+", value: "500" },
    { label: "1000+", value: "1000" },
    { label: "10.000+", value: "10000" },
    { label: "50.000+", value: "50000" },
  ];

  const cargoOptions = [
    { label: "All", value: "" },
    { label: "1K+", value: "1000" },
    { label: "50K+", value: "50000" },
    { label: "100K+", value: "100000" },
    { label: "500K+", value: "500000" },
    { label: "1M+", value: "1000000" },
    { label: "10M+", value: "10000000" },
  ];

  const LengthOptions = [
    { label: "All", value: "" },
    { label: "1+", value: "1" },
    { label: "10+", value: "10" },
    { label: "100+", value: "100" },
    { label: "500+", value: "500" },
    { label: "1000+", value: "1000" },
  ];

  return (
    <div className="flex justify-center ">
      <div className="flex flex-row justify-between bg-yellow-500 px-4 py-5 rounded-lg">
        <div className="flex flex-col justify-center mx-3">
          <div className="flex flex-col bg-black opacity-90 px-3 py-2 rounded-lg shadow-md shadow-white">
            <p className="italic">"Do. Or do not. There is no try."</p>
            <h5 className="flex justify-end">-YODA</h5>
          </div>
          <form className="flex flex-col text-center mt-2">
            <label htmlFor="sort" className="text-xs font-semibold">
              Sort By Rating
            </label>
            <select
              id="sort"
              className="px-2 py-1 mt-1 rounded-md text-slate-600 text-xs "
            >
              <option value="noSorting" onClick={Sorting}>
                No Sorting
              </option>
              <option value="lowestRating" onClick={Sorting}>
                Lowest Rating
              </option>
              <option value="highestRating" onClick={Sorting}>
                Highest Rating
              </option>
            </select>
          </form>
        </div>
        <div className="flex flex-row mx-3">
          <div className="mr-4">
            <form className="flex flex-col text-center">
              <label htmlFor="passengers" className="text-xs font-semibold">
                Passengers Filter
              </label>
              <select
                id="passengers"
                className="px-2 py-1 mt-1 rounded-md text-slate-600 text-xs "
                onChange={(e) => setPassenger(e.target.value)}
              >
                {passengerOptions.map((passenger, i) => {
                  return (
                    <option key={i} value={passenger.value}>
                      {passenger.label}
                    </option>
                  );
                })}
              </select>
            </form>
            <form className="flex flex-col text-center mt-6">
              <label htmlFor="crew" className="text-xs font-semibold">
                Crew Filter
              </label>
              <select
                id="crew"
                className="px-2 py-1 mt-1 rounded-md text-slate-600 text-xs "
                onChange={(e) => setCrew(e.target.value)}
              >
                {crewOptions.map((crew, i) => {
                  return (
                    <option key={i} value={crew.value}>
                      {crew.label}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <div>
            <form className="flex flex-col text-center">
              <label htmlFor="cargo" className="text-xs font-semibold">
                Cargo Filter
              </label>
              <select
                id="cargo"
                className="px-2 py-1 mt-1 rounded-md text-slate-600 text-xs "
                onChange={(e) => setCargo(e.target.value)}
              >
                {cargoOptions.map((cargo, i) => {
                  return (
                    <option key={i} value={cargo.value}>
                      {cargo.label}
                    </option>
                  );
                })}
              </select>
            </form>
            <form className="flex flex-col text-center mt-6">
              <label htmlFor="length" className="text-xs font-semibold">
                Length Filter
              </label>
              <select
                id="length"
                className="px-2 py-1 mt-1 rounded-md text-slate-600 text-xs "
                onChange={(e) => setLength(e.target.value)}
              >
                {LengthOptions.map((length, i) => {
                  return (
                    <option key={i} value={length.value}>
                      {length.label}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
