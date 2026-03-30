import React, { useEffect, useState } from 'react'
import MoviePicture from '../assets/movies.svg'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Home = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchId, setSearchId] = useState("");

  const navigate = useNavigate();
  


  function onSearch() {
    fetchMovies(searchId);
    console.log(searchId)
  }


  async function fetchMovies(id) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&s=${id}`);
    console.log(data);
    setMovies(data.Search);
  }


  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Endless movies, TV shows and stories to uncover.</h1>
            <h2>Find and watch your next favorite{" "} <span className="purple">Movie</span> here</h2>
            <div className="movie__search--container">
              <input 
                type="text" 
                value={searchId} 
                onChange={(event) => setSearchId(event.target.value)} 
                onKeyDown={(event) => {
                  if(event.key === "Enter") {
                    navigate(`/searchedmovies/${searchId}`)
                  }
                }} 
                className='search__input' 
              />
                  <button onClick={() => navigate(`/searchedmovies/${searchId}`)} type="submit" className="btn browse_btn">Browse Movies</button>
            </div>
          </div>

          <figure>
            <img src={ MoviePicture } alt="" className='movie__img' />
          </figure>


          <div>
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard {...movie} key={movie.imdbID} />
            ))}
          </div>

        </div>
      </header>
    </section>
  );
};

export default Home;
