import React from 'react'

const Movie = () => {
  return (
    <div className="movies">
        <div className="movieCard">
        <a href="" className="movie__img--wrapper">
          <img src="https://m.media-amazon.com/images/I/81dae9nZFBS._AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" className='movie__img' />
        </a>
        <div className="movie__title">
          <a href="/" className='movie__title--link'>
            The Black Panther
          </a>
        </div>
        <div className="movie__year">2009</div>
        <div className="movie__genre">Action</div>
        </div>
    </div>
  )
}

export default Movie;