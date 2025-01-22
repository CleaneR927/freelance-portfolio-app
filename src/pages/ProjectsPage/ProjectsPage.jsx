import globals from '../../styles/global.module.css';
import { CardItem } from '../../ui-kit/CardItem/CardItem.jsx';
import ProjectsArray from '../../arrayData/ProjectsArray.js';

export function ProjectsPage() {
  return (
    <main className={globals.section}>
      <div className={globals.container}>
        <h2 className={globals.mainTitle}>Projects</h2>
        <ul className={globals.projects}>
          {ProjectsArray.map((project) => (
            <CardItem key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </main>
  );
}
