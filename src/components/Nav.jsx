import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MovieLogo from '../assets/MovieLogo.avif'
import { Link } from 'react-router-dom'





const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={menuOpen ? "menu--open" : ""}>
      <div className="nav__container">


      <div className="menu__backdrop">
        <button 
          className="btn__menu btn__menu--close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <ul className="menu__links">
          <li className="menu__list">
            <Link 
              to="/" 
              className="menu__link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="menu__list">
            <Link 
              to="/searchedmovies" 
              className="menu__link"
              onClick={() => setMenuOpen(false)}
            >
              Search Movies
            </Link>
          </li>

          <li className="menu__list">
            <Link 
              to="" 
              className="menu__link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>




        <div className="nav__left">
          <Link to="/" className='nav__logo'>
            <img src={MovieLogo} alt="" className='logo' />
          </Link>
          <h3 className='nav__logo--title'>Cinema.Co</h3>
        </div>
        <ul className='nav__links'>
          <li className='nav__list'>
            <Link to="/" className='nav__link'>
              Home
            </Link>
          </li>
          <li className='nav__list'>
            <Link to="/searchedmovies" className='nav__link'>
              Search Movies
            </Link>
          </li>
          <li className='nav__list'>
            <Link to="" className='nav__link nav__link--primary'>
              Contact
            </Link>
          </li>
        </ul>

        <button className="btn__menu" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon='bars' />
          </button>



      </div>
    </nav>
  )
}

export default Nav