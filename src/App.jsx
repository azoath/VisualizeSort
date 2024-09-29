import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Bubble from './components/Bubble/bubble';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Insertion from './components/Insertion/insertion';
import Merge from './components/Merge/merge';
import CustomNavbar from './components/Navbar';
import Quick from './components/Quick/quick';
import Selection from './components/Selection/selection';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Body />
          <Features />
        </>} />
        <Route path="/insertion-sort" element={<Insertion />} />
        <Route path="/bubble-sort" element={<Bubble />} />
        <Route path="/quick-sort" element={<Quick />} />
        <Route path="/merge-sort" element={<Merge />} />
        <Route path="/selection-sort" element={<Selection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
