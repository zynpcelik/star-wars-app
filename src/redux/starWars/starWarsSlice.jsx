import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSpaceShips = createAsyncThunk(
  "spaceShips/getSpaceShips",
  async () => {
    const response = await axios("https://swapi.dev/api/starships/");
    return response.data;
  }
);

export const getNextPage = createAsyncThunk(
  "spaceShips/getNextPage",
  async (data) => {
    const response = await axios(data);
    return response.data;
  }
);

export const getDetailsPage = createAsyncThunk(
  "spaceShips/getDetailsPage",
  async (data) => {
    const response = await axios(data);
    return response.data;
  }
);

export const starWarsStore = createSlice({
  name: "spaceShips",
  initialState: {
    ships: [],
    filteredShips: [],
    isLoading: true,
    nextPageUrl: null,
    shipDetails: null,
    sortBy: null,
  },
  reducers: {
    setFiltered: (state, action) => {
      state.sortBy = action.payload;
      let filteredShips = state.ships.slice();
      switch (action.payload) {
        case "lowestRating":
          filteredShips.sort(
            (a, b) => a.hyperdrive_rating - b.hyperdrive_rating
          );
          state.ships = filteredShips;
          return;
        case "highestRating":
          filteredShips.sort(
            (a, b) => b.hyperdrive_rating - a.hyperdrive_rating
          );
          state.ships = filteredShips;
          return;
        case "noSorting":
          state.ships = JSON.parse(localStorage.getItem("spaceShips"));
          return;
        default:
          return;
      }
    },
    getFiltered: (state, action) => {
      let filteredShips = state.ships.slice();
      if (action.payload.passenger) {
        let value = parseInt(action.payload.passenger);
        filteredShips = filteredShips.filter((ship) => {
          return parseInt(ship.passengers) >= value;
        });
      }
      if (action.payload.crew) {
        filteredShips = filteredShips.filter((ship) => {
          return ship.crew >= action.payload.crew;
        });
      }
      if (action.payload.cargo) {
        filteredShips = filteredShips.filter((ship) => {
          return ship.cargo >= action.payload.cargo;
        });
      }
      if (action.payload.length) {
        filteredShips = filteredShips.filter((ship) => {
          return ship.length >= action.payload.length;
        });
      }
      state.filteredShips = filteredShips;
    },
  },
  extraReducers: {
    [fetchSpaceShips.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ships = action.payload.results;
      state.nextPageUrl = action.payload.next;
      localStorage.setItem(
        "spaceShips",
        JSON.stringify(action.payload.results)
      );
    },
    [getNextPage.fulfilled]: (state, action) => {
      state.ships.push(...action.payload.results);
      state.nextPageUrl = action.payload.next;
    },
    [getDetailsPage.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getDetailsPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shipDetails = action.payload;
    },
  },
});

export const { setFiltered, getFiltered } = starWarsStore.actions;
export default starWarsStore.reducer;
