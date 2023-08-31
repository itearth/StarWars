import axios from 'axios';
import { movieActions } from '../redux/slices/movie.slice';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_BASE_URL = 'https://swapi.dev/api';


export const fetchMovie = (page) => async (dispatch) => {
  try {
    console.log('test2');
    dispatch(movieActions.setLoading(true));
    // const response = await axios.get(`${API_BASE_URL}/people`);
    const response = await axios.get(`${API_BASE_URL}/films/?page=${page}`);
   
    if (response.status === 200) {
      dispatch(movieActions.setMovie(response.data));// Use response.data.results
      dispatch(movieActions.setLoading(false));
      //return response.data; // Return the results array
      console.log(response.data);
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    dispatch(movieActions.setLoading(false));
    throw error;
  }
};

