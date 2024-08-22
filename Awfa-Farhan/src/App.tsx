// import Projects from './pages/Projects'; 
// import Journey from './pages/Journey'; 
// import Stats from './pages/Stats'; 
// import Blog from './pages/Blog'; 
// import Contact from './pages/Contact'; 

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import Experiences from './pages/Experiences'; 
import Construction from './pages/Construction'; 
import Menu from './components/Menu';  
import MenuWrapper from './components/MenuWrapper';  

const AppContent = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Construction />} />
        <Route path="/Journey" element={<Construction />} />
        <Route path="/Stats" element={<Construction />} />
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
