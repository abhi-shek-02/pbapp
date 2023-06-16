import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home'
const App = () => {
  return (
    <div>
      <React.StrictMode>
        {/* <BrowserRouter> */}
          <Home />
        {/* </BrowserRouter>, */}
      </React.StrictMode>
    </div>
  )
}

export default App
