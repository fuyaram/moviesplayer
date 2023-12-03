import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import netflix from '../images/netflix-logo-text-emblem-31-removebg-preview.png'
const Header = () => {
    return (
       <>
             <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name id />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies/popular">Popular</Link></li>
            <li><Link to="/movies/top_rated">Top Rated</Link></li>
            <li><Link to="/movies/upcoming">Upcoming</Link></li>
            <li><Link to="/movies/upcoming">New Movies</Link></li>
            <li><Link to="/movies/upcoming">Trending</Link></li>
          </ul>
         <img className="header__icon" src={netflix} id="netflix" alt="IMDb Logo" />
        </div>
      </nav>
       
       </>
    )
}

export default Header