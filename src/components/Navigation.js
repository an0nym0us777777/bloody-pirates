import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Bloody Pirates</h1>
      <ul>
        <li>
          <NavLink to="/my-pirates">My Pirates</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/marketplace">Marketplace</NavLink>
        </li>
        <li>
          <NavLink to="/blackjack">Blackjack</NavLink>
        </li>
        <li>
          <NavLink to="/treasure-hunt">Treasure Hunt</NavLink>
        </li>
        <li>
          <NavLink to="/chest-unlocker">Chest Unlocker</NavLink>
        </li>
        <li>
          <NavLink to="/jeweler">Jeweler</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
