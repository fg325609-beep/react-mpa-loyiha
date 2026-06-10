import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Companents/Header/Header.jsx';
import Footer from './Companents/Footer/Footer.jsx';
import HomePages from './Pages/HomePages/HomePages.jsx'; 
import ServicesPages from './Pages/ServicesPages/ServicesPages.jsx';
import CompanyPages from './Pages/CompanyPages/CompanyPages.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/services" element={<ServicesPages />} />
        <Route path="/company" element={<CompanyPages />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
