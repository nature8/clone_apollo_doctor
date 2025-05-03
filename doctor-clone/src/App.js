import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorsPage from './pages/DoctorsPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<DoctorsPage />} />

       
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
