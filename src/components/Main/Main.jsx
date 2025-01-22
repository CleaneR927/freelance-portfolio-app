import globals from '../../styles/global.module.css';

export function Main() {
  return (
    <main className={globals.section}>
      <div className={globals.container}>
        <div className={globals.contentList}>
          <h2 className={globals.minorTitle}>Frontend Skills</h2>
          <p className={globals.contentListItem}>
            HTML, CSS, JavaScript, TypeScript, ReactJS, Redux, NPM, Yarn,
            BootStrap, MaterialUI, TailwindCSS, StyledComponents, Git, Jest,
            Cypress
          </p>
        </div>
      </div>
    </main>
  );
}
