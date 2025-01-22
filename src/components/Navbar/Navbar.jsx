import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import additionalStyles from '../../styles/global.module.css';
import { NavItem } from '../../ui-kit/NavItem/NavItem';
import { SwitchThemeButton } from '../../ui-kit/SwitchThemeButton/SwitchThemeButton';

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={additionalStyles.container}>
        <div className={styles.navRow}>
          <NavLink to="/" className={styles.logo}>
            <strong>Frontender</strong> portfolio
          </NavLink>
          <ul className={styles.navList}>
            <NavItem link="/" title="Home" />
            <NavItem link="/projects" title="Projects" />
            <NavItem link="/contacts" title="Contacts" />
          </ul>
          <SwitchThemeButton />
        </div>
      </div>
    </nav>
  );
}
