import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import TemplateSelection from './components/TemplateSelection';
import BuildResume from './components/BuildResume';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';

const AppContent = () => {
  const location = useLocation();
  const showProgress = !['/'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {showProgress && (
        <div className="max-w-4xl mx-auto pt-8 px-4">
        
        </div>
      )}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/templates" element={<TemplateSelection />} />
        <Route path="/build" element={<BuildResume />} />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/experience" element={<ExperienceForm />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;