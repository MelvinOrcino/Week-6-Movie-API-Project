import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SearchedMovies = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchId, setSearchId] = useState(id);


  function onSearch() {
    fetchMovies(searchId);
  }


  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&s=${'Title'}`);
    setMovies(data);
    setLoading(false);
  }


  useEffect(() => {
    onSearch();
  }, []);



  return (
    <>
    <div className="movies__body">
      <main id="movies__main">
        <section>
          <div className="container movies__container"> 
            <div className="row">
              <div className="browse__movies--title">
                <h2 className='section__title'>Browse Movies</h2>
                <div className="movie__search--container">
                  <input 
                    type="text" 
                    value={searchId} 
                    onChange={(event) => setSearchId(event.target.value)}
                    onKeyDown={(event) => {
                      if(event.key === "Enter") {
                        onSearch();
                      }
                    }} 
                    className='search__input'
                  />
                    <button className="btn browse_btn" onClick={() => onSearch()}>Search</button>
                </div>
              </div>
              <div className="search__results">
                  <h3>
                    Search Results for: "{searchId}"
                  </h3>
                  <div className="search__year">
                    <select name="" id="filter" onChange="sortMovies(event)"> 
                      <option value="" disabled selected>Sort</option>
                      <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
                      <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                    </select>
                </div>
              </div>


              { loading ? (

                  new Array(6).fill(0).map((_, index) => (
                    <div className="movie" key={index}>
                    <div className="movie__title">
                      <div className="movie__title--skeleton"></div>
                    </div>
                    <div className="movie__body">
                      <p className="movie__body--skeleton"></p>
                    </div>
                  </div>
                  ))

                ) : (

                  movies.slice(0,6).map((movie) => (
                    <div className="movies" key={movie.imdbID}>
                      <div className="movieCard">
                        <a href="" className="movie__img--wrapper">
                          <img src="https://m.media-amazon.com/images/I/81dae9nZFBS._AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" className='movie__img' />
                        </a>
                        <div className="movie__title">
                          <a href="/" className='movie__title--link'>
                            {movie.title}
                          </a>
                        </div>
                        <div className="movie__year">{movie.year}</div>
                        <div className="movie__genre">{movie.genre}</div>
                      </div>
                    </div>
                  ))
                )
              }

            </div>
          </div>
        </section>
      </main>
    </div>

    </>
  )
}

export default SearchedMovies