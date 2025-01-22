import styles from './notFoundPage.module.css';
import React from 'react';
import { ReactComponent as NotFoundImage } from '../../accets/not-found.svg';

export function NotFoundPage() {
  return (
    <div className={styles.container}>
      <NotFoundImage className={styles.image} alt="Not found" />
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page not found</p>
    </div>
  );
}
