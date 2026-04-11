import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SearchedMovies = () => {

  const { searchId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchInput, setSearchInput] = useState(searchId || "");
  const navigate = useNavigate();





  
  const [sortOption, setSortOption] = useState("");

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOption === "OLDEST_TO_NEWEST") {
      return Number(a.Year) - Number(b.Year);
    }
    if (sortOption === "NEWEST_TO_OLDEST") {
      return Number(b.Year) - Number(a.Year);
    }
    return 0;
  });


  async function fetchMovies(id) {
    setLoading(true);
    setMovies([]);
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&s=${id}`);
    setMovies(data.Search || []);
    setLoading(false);
  }


  useEffect(() => {
    if (searchId) {
      fetchMovies(searchId);
    }
  }, [searchId]);


 



  return (
    <>
    <div className="movies__body">
      <main id="movies__main">
        <section>
          <div className="container movies__container"> 
            <div className="row">
              <div className="movies__container--top">
                <div className="browse__movies--title">
                  <h2 className='section__title'>Browse Movies</h2>
                  <div className="movie__search--container">
                    <input 
                      type="text" 
                      value={searchInput} 
                      onChange={(event) => setSearchInput(event.target.value)}
                      onKeyDown={(event) => {
                        if(event.key === "Enter") {
                          navigate(`/searchedmovies/${searchInput}`);
                        }
                      }} 
                      className='search__input'
                    />
                      <button className="btn browse_btn" onClick={() => navigate(`/searchedmovies/${searchInput}`)}>Search</button>
                  </div>
                </div>
                <div className="search__results">
                    <h3>
                      Search Results for: "{searchId}"
                    </h3>
                    <div className="search__year">
                      <select name="" id="filter" value={sortOption} onChange={(event) => setSortOption(event.target.value)}> 
                        <option value="" disabled selected>Sort</option>
                        <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
                        <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
                      </select>
                  </div>
                </div>
              </div>

              <div className="movies__wrapper">
                { loading ? (

                    new Array(6).fill(0).map((_, index) => (
                      <div className="movies" key={index}>
                        <div className="movieCard">
                          <div className="movie__img--skeleton"></div>
                          <div className="movie__title--skeleton"></div>
                          <div className="movie__year--skeleton"></div>
                        </div>
                      </div>
                    ))

                  ) : (

                    sortedMovies.slice(0,6).map((movie) => (
                      <div className="movies" key={movie.imdbID}>
                        <div className="movieCard">
                          <Link to={`/movie/${movie.imdbID}`}>
                          <figure className="movie__img--wrapper">
                            <img src={movie.Poster} alt="" className='movie__img' />
                          </figure>
                          </Link>
                          <div className="movie__title">
                            <a href="/" className='movie__title--link'>
                              {movie.Title}
                            </a>
                          </div>
                          <div className="movie__year">{movie.Year}</div>
                        </div>
                      </div>
                    ))
                  )
                }
              </div>



            </div>
          </div>
        </section>
      </main>
    </div>

    </>
  )
}

export default SearchedMovies