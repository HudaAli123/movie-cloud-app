import React, { useState } from 'react';
import Catalog from './components/MovieList';
import Details from './components/MovieDetails';
import './App.css';

export default function App() {
  const [active, setActive] = useState(null);
  return (
    <div className="container">
      <h1>Movie Catalog</h1>
      <div className="grid">
        <div className="left"><Catalog onMovieClick={setActive} /></div>
        <div className="right">{active ? <Details movie={active} /> : <p>Select a movie…</p>}</div>
      </div>
    </div>
  );
}
