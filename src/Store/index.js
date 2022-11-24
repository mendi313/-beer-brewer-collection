import { configureStore } from '@reduxjs/toolkit';
import beersSlice  from './beers-slice';

const store = configureStore({ reducer: {beers:beersSlice} });
export default store;
