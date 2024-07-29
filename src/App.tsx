import React from 'react';
import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom'

import { InfoForm } from './pages/InfoForm';
import { UserQRCode } from './pages/UserQRCode'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<InfoForm />} />
          <Route path="/info" element={<UserQRCode />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
