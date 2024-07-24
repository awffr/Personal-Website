import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home'; 
import Experiences from '../src/pages/Experiences'; 
import Projects from '../src/pages/Projects'; 
import Journey from '../src/pages/Journey'; 
import Stats from '../src/pages/Stats'; 
import Blog from '../src/pages/Blog'; 
import Contact from '../src/pages/Contact'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
