import { createSlice } from '@reduxjs/toolkit';
//import axios from 'axios';

const movieState = {
  movie: null,
  loading: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: movieState,
  reducers: {
   
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});


export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
