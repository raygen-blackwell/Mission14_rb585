// Raygen Blackwell
// React Movie Application
// App.tsx contains all of the routing functionality
// Nav.tsx is how the navigation is displayed
// Layout.tsx contains the basic layout for the body and nav as well as the function that inculde the 'props' to change each tab title
// Podcasts.tsx contains the minimal display to link to the ouside website
// Movies.tsx has a table that displays the json movie data
// Home.tsx is the landing page that incorporates 'state' by having fun with the picture when it is hovered over
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PodList from './pages/Podcasts';
// import Movie from './types/MovieList';
import Home from './pages/Home';
import Layout from './pages/Layout';
import MovieList from './types/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Movies" element={<MovieList />} />
          <Route path="/Podcasts" element={<PodList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
