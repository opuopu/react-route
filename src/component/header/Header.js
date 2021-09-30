import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
             <nav>
          <ul>
            <li>
              <NavLink  activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="selected" to="/friends">friends</NavLink>
            </li>
            <li>
              <NavLink  activeClassName="selected" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        </div>
    );
};

export default Header;