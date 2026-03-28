import React from 'react';

const MovieCard = ({ Poster, Title, Type, Year, imdbID }) => {
  return (
    <div>
      <h2>{Title}</h2>

      <figure>
        <img src={Poster} alt="" />
      </figure>

      <p>
        Type: {Type}, Year: {Year}
      </p>

      <p>
        {imdbID} 
      </p>

    </div>
  );
};

export default MovieCard;
