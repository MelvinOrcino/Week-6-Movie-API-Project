import Nav from './components/Nav';
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import SearchedMovies from './pages/SearchedMovies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/searchedmovies/:searchId' exact element={<SearchedMovies />}></Route>
          <Route path='/movie/:imdbID' element={<MovieInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
