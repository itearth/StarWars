import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/component/pages/LoginPage/login';
import People from '../src/component/pages/PeoplePage/people';
import Movie from '../src/component/pages/MoviePage/Movie';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/people" element={<People />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
    </Router>
  );
};

export default App;
