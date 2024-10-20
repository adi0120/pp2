import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NurseDashboard from './pages/NurseDashboard';

const App = () => (
  <Router>
    <Routes>
      
      <Route path="/" element={<NurseDashboard />} />
    
    </Routes>
  </Router>
);

export default App;
