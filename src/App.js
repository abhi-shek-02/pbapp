import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <React.StrictMode>
          <Home />
      </React.StrictMode>
    </div>
  )
}

export default App
