// src/redux/store.js
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import  rootReducer from './root-reducer';


const composedEnhancer = composeWithDevTools();

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware], // Apply Redux Thunk middleware
});

export default store;
