import { NavLink } from 'react-router-dom';
import styles from './cardItem.module.css';

export function CardItem({ project }) {
  return (
    <NavLink to={`/projects/${project.id}`}>
      <li className={styles.project}>
        <img
          src={project.image}
          alt="Project img"
          className={styles.projectImg}
        />
        <h3 className={styles.projectTitle}>{project.title}</h3>
      </li>
    </NavLink>
  );
}
