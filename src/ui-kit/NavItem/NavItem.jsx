import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navItem.module.css';

export const NavItem = ({ link, title }) => {
  return (
    <li className={styles.navListItem}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? styles.navListLinkActive : styles.navListLink
        }
      >
        {title}
      </NavLink>
    </li>
  );
};
