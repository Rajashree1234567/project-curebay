
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from './Navigation.module.css';
import { CartContext } from "../App";
import logo from "../assets/mediconnectLogo.png.webp";

export const NAvigations = () => {

  const { cart } = useContext(CartContext);

  return (
    <nav className={styled.navbar}>
      <div className={styled.logoContainer}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styled.navLink} ${styled.active}` : styled.navLink}>
          <img src={logo} alt="MediConnect Logo"  style={{width: '50px'}} />
        </NavLink>
      </div>
      <div>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styled.navLink} ${styled.active}` : styled.navLink}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? `${styled.navLink} ${styled.active}` : styled.navLink}>
            About
          </NavLink>
          <NavLink to="/career" className={({ isActive }) => isActive ? `${styled.navLink} ${styled.active}` : styled.navLink}>
            Career
          </NavLink>
      </div>
      <div className={styled.cartIcon}>
          <NavLink to="/cart">🛒</NavLink>
          {cart.length > 0 && <span className={styled.cartCount}>{cart.length}</span>}
      </div>
  </nav>
  )
}
