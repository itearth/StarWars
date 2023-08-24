import {combineReducers} from '@reduxjs/toolkit';
import peopleReducer from './slices/star.slice';


const rootReducer = combineReducers({
  peopleState: peopleReducer
});

export default rootReducer;