import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

import HomePage from './pages/Home';
import EducationPage from './pages/Education';
import SkillsPage from './pages/Skills';
import ProjectsPage from "./pages/Projects";
import ExperiencePage from './pages/Experience';
import ResumePage from './pages/Resume';


function App() {
    return (
        <div className='h-screen w-screen overflow-x-hidden no-'>
            <ThemeProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/resume" element={<ResumePage />} />
                    </Routes>
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App