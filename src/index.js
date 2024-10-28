import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import OffreCreation from './pages/OffreCreation';
import OffreMaintenance from './pages/OffreMaintenance';
import OffreRefonte from './pages/OffreRefonte';
import Footer from './components/footer/Footer';
import './index.css';
import ScrollTo from './hook/ScrollTo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offreCreation" element={<OffreCreation />} />
        <Route path="/offreMaintenance" element={<OffreMaintenance />} />
        <Route path="/offreRefonte" element={<OffreRefonte />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals