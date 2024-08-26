import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home'; 
import Experiences from './pages/Experiences'; 
import Construction from './pages/Construction'; 
import Stats from './pages/Stats'; 
import Projects from './pages/Projects/Projects'; 
import ProjectDetail from './pages/Projects/Keythicc/ProjectDetail';

import Menu from './components/Menu';  
import MenuWrapper from './components/MenuWrapper';  

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:projectName" element={<ProjectDetail />} />
        <Route path="/Journey" element={<Construction />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Blog" element={<Construction />} />
        <Route path="/Contact" element={<Construction />} />
        <Route path="/Construction" element={<Construction />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/Construction" replace />} />
      </Routes>
      <MenuWrapper>
        <Menu />  
      </MenuWrapper>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
