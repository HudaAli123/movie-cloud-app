import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function MovieDetails({ movie }) {
  const [payload, setPayload] = useState(null);
  const base = process.env.REACT_APP_MOVIE_API_URL;
  useEffect(() => {
    let cancelled = false;
    axios
      .get(`${base}/movies/${movie.id}`)
      .then((res) => !cancelled && setPayload(res.data))
      .catch(() => setPayload(null));
    return () => {
      cancelled = true;
    };
  }, [base, movie]);
  if (!payload) return <p>Loading…</p>;
  return (
    <div>
      <h2>{payload.movie.title}</h2>
      <p>{payload.movie.description}</p>
    </div>
  );
}
MovieDetails.propTypes = {
  movie: PropTypes.shape({ id: PropTypes.string.isRequired, title: PropTypes.string.isRequired }).isRequired,
};
