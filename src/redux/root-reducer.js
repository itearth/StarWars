import {combineReducers} from '@reduxjs/toolkit';
import peopleReducer from './slices/star.slice';
import movieReducer from './slices/movie.slice';


const rootReducer = combineReducers({
  peopleState: peopleReducer,
  movieState: movieReducer
});

export default rootReducer;