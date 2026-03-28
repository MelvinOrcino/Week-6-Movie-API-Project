import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MovieLogo from '../assets/MovieLogo.avif'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
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
          <button className="btn__menu">
            <FontAwesomeIcon icon='bars' />
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Nav