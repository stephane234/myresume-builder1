import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import TemplateSelection from './components/TemplateSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/templates" element={<TemplateSelection />} />
      </Routes>
    </Router>
  );
}

export default App;