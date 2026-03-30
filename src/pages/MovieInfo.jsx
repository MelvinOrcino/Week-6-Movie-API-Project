import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import MovieLogo from '../assets/MovieLogo.avif'
import axios from 'axios'

const MovieInfo = () => {

  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  

  async function fetchSelectedMovie() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&i=${imdbID}`);
    console.log(data);
    setMovie(data);
  }


  useEffect(() => {
    if (imdbID) {
      fetchSelectedMovie();
    }
  }, [imdbID]);



  if (!movie) {
    return <div>Loading...</div>;
  }



  return (
    <>
    <div className="movies__main">
      <div className="movies__container">
        <div className="row">
          <div className="movie__selected--top">
            <div className="movie__link" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon="arrow-left" />
            </div>
            <div className='movie__link' onClick={() => navigate(-1)}>
              <h3 className="movie__selected--title-top">Searched Movies</h3>
            </div>
          </div>
        </div>
      </div>
    </div>


          {
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img src={movie.Poster} alt="" className='movie__selected--img'/>
            </figure>
            <div className="movie__selected--description">
              <h2 className="movie__selected--title"><i>{movie.Title}</i></h2>
              <div className="movie__info">
                <span className="movie__year">{movie.Year}</span>
                <span className="movie__rating">IMDB Rating: {movie.imdbRating}</span>
              </div>
              <div className="movie__summary">
                <div className="movie__summary--title">
                  Summary
                </div>
                <p className="movie__summary--para">
                  {movie.Plot}
                </p> 
              </div>
              <button className="btn watch__movie--btn" type="submit">
                Watch Movie
              </button>
            </div>
          </div>
          }

          

    </>

  )
}



export default MovieInfo;