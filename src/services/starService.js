import axios from 'axios';
import { peopleActions } from '../redux/slices/star.slice';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_BASE_URL = 'https://swapi.dev/api';


export const fetchPeople = () => async (dispatch) => {
  try {
    dispatch(peopleActions.setLoading(true));
    const response = await axios.get(`${API_BASE_URL}/people`);
   
    if (response.status === 200) {
      dispatch(peopleActions.setPeople(response.data.results)); // Use response.data.results
      dispatch(peopleActions.setLoading(false));
      return response.data.results; // Return the results array
    }
  } catch (error) {
    console.error('Error fetching people:', error);
    dispatch(peopleActions.setLoading(false));
    throw error;
  }
};


// export const fetchPeople = () => async (dispatch) => {
//   try {
//     dispatch(peopleActions.setLoading(true));
//     const response = await axios.get(`${API_BASE_URL}/people`);
   
//     if (response.status === 200) {
//       dispatch(peopleActions.setPeople(response.data));
//       dispatch(peopleActions.setLoading(false));
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     dispatch(peopleActions.setLoading(false));
//     throw error;
//   }
// };


























// import axios from 'axios';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// export async function fetchPosts() {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/posts`);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// }

// export async function createPost(postData) {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/posts`, postData);
//     if (response.status === 201) {
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Error creating post:', error);
//     throw error;
//   }
// }