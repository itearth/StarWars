import { createSlice } from '@reduxjs/toolkit';
//import axios from 'axios';

const peopleState = {
  people: null,
  loading: false,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState: peopleState,
  reducers: {
   
    setPeople: (state, action) => {
      state.people = action.payload;
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});


export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;
