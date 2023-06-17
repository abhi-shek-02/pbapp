import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home'
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Component/ProfilePage';
const App = () => {
  return (
    <div>
      <React.StrictMode>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </React.StrictMode>
    </div>
  )
}
// JSR
export default App
