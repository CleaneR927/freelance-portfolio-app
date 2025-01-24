import styles from './footer.module.css';
import globals from '../../styles/global.module.css';

import SocialArray from '../../arrayData/SocialArray';
import { SocialItem } from '../../ui-kit/SocialItem/SocialItem';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={globals.container}>
        <div className={styles.footerWrapper}>
          <ul className={styles.social}>
            <SocialItem socialData={SocialArray} />
          </ul>
          <div className={styles.copyright}>
            <p>©2024 Frontend Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
