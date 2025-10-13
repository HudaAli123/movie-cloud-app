import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function MovieList({ onMovieClick }) {
  const [items, setItems] = useState([]);
  const base = process.env.REACT_APP_MOVIE_API_URL;
  useEffect(() => {
    let cancelled = false;
    axios.get(`${base}/movies`).then(res => !cancelled && setItems(res.data.movies)).catch(() => setItems([]));
    return () => { cancelled = true; };
  }, [base]);
  return (
    <ul>
      {items.map(m => (
        <li key={m.id}>
          <button onClick={() => onMovieClick(m)}>{m.title}</button>
        </li>
      ))}
    </ul>
  );
}
MovieList.propTypes = { onMovieClick: PropTypes.func.isRequired };
