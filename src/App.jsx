import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home'
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';


function App() {
    return (
        <ThemeProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/resume" element={<ResumePage />} /> */}
                </Routes>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App