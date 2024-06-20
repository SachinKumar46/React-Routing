import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Home/>
      <Routes>
      <Route path="/main" element={<Main />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
