import { createSlice } from '@reduxjs/toolkit';

const beersSlice = createSlice({
  name: 'beers',
  initialState: {
    beers: [],
    favorits: [],
  },
  reducers: {
    replaceBeers(state, action) {
      state.beers = action.payload;
    },
    addIdToFavorits(state, action) {
      let favorits = state.favorits;
      let idFound = favorits.find((id) => id === action.payload.id);
      if (!idFound) {
        favorits.push(action.payload);
        state.favorits = favorits;
      }
    },
    removeIdToFavorits(state, action) {
      let favorits = state.favorits;
      favorits = favorits.filter((id) => id !== action.payload);
      state.favorits = favorits;
    },
    removeAllFromFavorits(state) {
      state.favorits = []
    }
  },
});

export const beersAction = beersSlice.actions;

export default beersSlice.reducer;
