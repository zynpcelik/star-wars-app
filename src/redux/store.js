import { configureStore } from "@reduxjs/toolkit";
import starWarsReducer from "./starWars/starWarsSlice";

export const store = configureStore({
  reducer: {
    spaceShips: starWarsReducer,
  },
});
