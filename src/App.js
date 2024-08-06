// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Laws from './pages/Laws';
import Navbar from './components/NavBar';
// import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Laws />
    </>
  );
}

export default App;
