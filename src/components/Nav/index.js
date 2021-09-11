import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const NavBar = () => {
  return (
      <div className="id">
        <div className="idContent">
          <img className="profilPicture" src="/photolinkedin.png" alt="profile-picture" />
          <h3>Mathieu Figari</h3>
          <div className="navigation">
            <ul>
              <li>
          <NavLink activeClassName="LinkActive" exact to="/">
          <i className="fas fa-home"></i> 
          <span>Accueil</span>
          </NavLink>
              </li>
              <li>
          <NavLink activeClassName="LinkActive" to="/competences">
          <i className="fab fa-buffer"></i>
          <span>Compétences</span>
          </NavLink>
            </li>
            <li>
          <NavLink activeClassName="LinkActive" to="/portefolio">
          <i className="fab fa-buffer"></i>
          <span>Portefolio</span>
          </NavLink>
            </li>
            <li>
          <NavLink activeClassName="LinkActive" to="/contact">
          <i className="fab fa-buffer"></i>
          <span>Contact</span>
          </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
