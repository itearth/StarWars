import axios from 'axios';
import { peopleActions } from '../redux/slices/star.slice';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_BASE_URL = 'https://swapi.dev/api';


export const fetchPeople = (page) => async (dispatch) => {
  try {
    dispatch(peopleActions.setLoading(true));
    // const response = await axios.get(`${API_BASE_URL}/people`);
    const response = await axios.get(`${API_BASE_URL}/people/?page=${page}`);
   
    if (response.status === 200) {
      dispatch(peopleActions.setPeople(response.data));// Use response.data.results
      dispatch(peopleActions.setLoading(false));
      return response.data; // Return the results array
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    dispatch(peopleActions.setLoading(false));
    throw error;
  }
};

