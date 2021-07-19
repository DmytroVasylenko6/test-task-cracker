import { React } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';



export default function Navigation() {


  return (
    <nav className={s.navContainer}>
      <ul className={s.navList}>
      <li className={s.navItem}>
      <NavLink
        exact
        to="/"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        HOME
        </NavLink>
      </li>
      
       <li className={s.navItem}>
      <NavLink
        to="/about-us"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        ABOUT US
      </NavLink>
      </li>
      
      <li className={s.navItem}>
      <NavLink
        to="/contact-us"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        CONTACTS
      </NavLink>
      </li>

      <li className={s.navItem}>
      <NavLink
        to="/checkout"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        CHECKOUT
      </NavLink>
      </li>
      <li className={s.navItem}>
      <NavLink
        to="/account"
        activeClassName={s.activeNavLink}
        className={s.navLink}
      >
        ACCOUNT
        </NavLink>
        </li>
      </ul>

    </nav>
  );
};

