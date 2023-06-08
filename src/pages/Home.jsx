import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import SpaceShips from "../components/SpaceShips";
import { fetchSpaceShips } from "../redux/starWars/starWarsSlice";
import Loading from "../assets/loading.gif";

function Home() {
  const isLoading = useSelector((state) => state.spaceShips.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceShips());
  }, [dispatch]);

  return (
    <div className="flex justify-center flex-col">
      <Header />
      {isLoading && (
        <div className="flex justify-center">
          <img src={Loading} alt="star_wars_logo" className="w-2/5" />
        </div>
      )}
      {!isLoading && <SpaceShips />}
    </div>
  );
}

export default Home;
