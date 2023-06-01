
import  './NavBar.css'
import React from 'react'
import logo from '../images/logo.png'


const NavBar = () => {
  return (
    <div className='nav'>
        <div className="logo_container"><img src={logo} alt='logo' className='logo'></img></div>
        <div className="side_nav">
            <div className="top_nav">
                <a href="">acceuil</a>
                <a href="">agence</a>
                <a href="">demenageur</a>
                <a href="">rendez-vous</a>
            </div>
            <div className="lower_nav">
                <a href="">nos offres</a>
                <a href="">trouver mon agence</a>
                <a href="">nos partenaire</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar