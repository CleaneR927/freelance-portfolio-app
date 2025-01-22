import { useParams } from 'react-router-dom';
import { ButtonGitHub } from '../../ui-kit/buttonGitHub/ButtonGitHub';
import mockData from '../../arrayData/ProjectsArray';
import styles from './projectPage.module.css';
import globals from '../../styles/global.module.css';

export function ProjectPage() {
  const { id } = useParams();
  const projectItem = mockData.find((item) => item.id === Number(id));

  return (
    <main className={globals.section}>
      <div className={globals.container}>
        <div className={styles.projectDetails}>
          <h1 className={globals.mainTitle}>{projectItem.title}</h1>
          <a target="_blank" rel="noopener noreferrer" href={projectItem.link}>
            <img
              src={projectItem.image}
              alt="Project Image"
              className={styles.projectDetailsCover}
            />
          </a>
          <div className={styles.projectDetailsDesc}>
            <p>{`Skills: ${projectItem.skills}`}</p>
          </div>

          {projectItem.gitHub && <ButtonGitHub link={projectItem.gitHub} />}
        </div>
      </div>
    </main>
  );
}
