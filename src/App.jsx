import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './pages/MainPage/MainPage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import ScrollToTop from './utils/scrollToTop';
import './styles/reset.css';
import styles from './styles/app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className={styles.section}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

