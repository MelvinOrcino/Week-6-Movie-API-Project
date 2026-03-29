import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieLogo from '../assets/MovieLogo.avif'
import axios from 'axios'

const MovieInfo = () => {

  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  

  async function fetchSelectedMovie() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&s=${id}&page=1`);
    setMovies(data.Search);
  }


  useEffect(() => {
    fetchSelectedMovie();
  }, []);





  return (
    <>
    <div className="movies__main">
      <div className="movies__container">
        <div className="row">
          <div className="movie__selected--top">
            <Link to='/searchedmovies' className="movie__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to='/searchedmovies' className='movie__link'>
              <h3 className="movie__selected--title-top">Searched Movies</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>


          {
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img src={MovieLogo} alt="" className='movie__selected--img'/>
            </figure>
            <div className="movie__selected--description">
              <h2 className="movie__selected--title"><i>Fast and Furious</i></h2>
              <div className="movie__info">
                <span className="movie__year">2009</span>
                <span className="movie__genre">Action/Drama</span>
                <span className="movie__rating">IMDB Rating: 85%</span>
              </div>
              <div className="movie__summary">
                <div className="movie__summary--title">
                  Summary
                </div>
                <p className="movie__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti, quasi asperiores sit laboriosam obcaecati 
                  reprehenderit officiis magnam cumque quos animi ullam voluptatem aliquam consequuntur similique, repudiandae quisquam eligendi ipsum!
                </p> 
                <p className="movie__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti, quasi asperiores sit laboriosam obcaecati 
                  reprehenderit officiis magnam cumque quos animi ullam voluptatem aliquam consequuntur similique, repudiandae quisquam eligendi ipsum!
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