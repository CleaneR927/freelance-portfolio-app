import styles from './buttonGitHub.module.css';
import gitHub from '../../accets/icons/gitHub-black.svg';

export function ButtonGitHub({ link }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={styles.buttonOutline}
    >
      <img src={gitHub} alt="GitHub link" />
      GitHub repo
    </a>
  );
}
