import axios from 'axios';
import { beersAction } from './beers-slice';

export const fatchBeers = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      const data = await response.data;
      return data;
    };
    try {
      const beers = await getData();
      
      dispatch(beersAction.replaceBeers(beers));
    } catch (error) {
      console.error(error);
    }
  };
};
