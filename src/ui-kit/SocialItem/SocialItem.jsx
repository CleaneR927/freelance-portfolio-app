import React from 'react';
import styles from './socialItem.module.css';

export const SocialItem = ({ socialData }) => {
  return (
    <>
      {socialData.map((item) => (
        <li key={item.id} className={styles.socialItem}>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <img src={item.icon} alt={`${item.name} link`} />
          </a>
        </li>
      ))}
    </>
  );
};
