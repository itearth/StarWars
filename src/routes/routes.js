// routes.js

import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../src/component/pages/LoginPage/login';
import People from '../../src/component/pages/PeoplePage/people';
import Movie from '../../src/component/pages/MoviePage/Movie';

const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/movie',
    element: <Movie />,
  },
];

export default routes;
