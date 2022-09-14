import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/banner.jsx';
import reportWebVitals from './reportWebVitals';
import Home from './view/home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * @description Creation of a router
 * @returns Returns the path of the main page
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner/>
      <Routes>
        <Route path='/user/:userId' element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
