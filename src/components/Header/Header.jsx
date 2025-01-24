import styles from './header.module.css';
import smoke from '../../accets/smoke-background.mp4';

export function Header() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../accets/Portfolio.pdf';
    link.download = 'Frontend-developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={styles.header}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={smoke} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>
          <strong>
            Hi, my name is <em>Max</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={styles.headerText}>
          <p>with passion for learning and creating.</p>
        </div>
        <button onClick={handleDownload} className={styles.button}>
          Download CV
        </button>
      </div>
    </header>
  );
}
