import React, { useEffect, useState } from 'react'
import MoviePicture from '../assets/movies.svg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchId, setSearchId] = useState(id);
  


  function onSearch() {
    fetchMovies(searchId);
    console.log(searchId)
  }


  async function fetchMovies(id) {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=cb5f54d1&s=${'Title'}`);
    setMovies(data);
  }


  useEffect(() => {
    fetchMovies();
  }, []);





  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Endless movies, TV shows and stories to uncover.</h1>
            <h2>Find and watch your next favorite <span className="purple">Movie</span> here!</h2>
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
                <button onClick={() => onSearch()} className="btn browse_btn">Browse Movies</button>
            </div>
          </div>






          <figure>
            <img src={ MoviePicture } alt="" className='movie__img' />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Home
