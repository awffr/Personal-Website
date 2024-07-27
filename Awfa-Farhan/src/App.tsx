import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Welcome from './pages/Welcome'; 
import About from './pages/About'; 
import Experiences from './pages/Experiences'; 
import Projects from './pages/Projects'; 
import Journey from './pages/Journey'; 
import Stats from './pages/Stats'; 
import Blog from './pages/Blog'; 
import Contact from './pages/Contact'; 
import Menu from './components/Menu';  
import MenuWrapper from './components/MenuWrapper';  

const AppContent = () => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {!isWelcomePage && (
        <MenuWrapper>
          <Menu />  
        </MenuWrapper>
      )}
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
