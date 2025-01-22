import React from 'react';
import globals from '../../styles/global.module.css';

export const ContactItem = ({ title, children }) => {
  return (
    <li className={globals.contentListItem}>
      <h2 className={globals.minorTitle}>{title}</h2>
      <p>{children}</p>
    </li>
  );
};
