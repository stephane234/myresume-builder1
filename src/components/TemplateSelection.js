import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import TemplatePreview from './TemplatePreview';  // Add this import

const TemplateSelection = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'Clean and modern design for all industries',
    }
  ];

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      localStorage.setItem('selectedTemplate', JSON.stringify(
        templates.find(t => t.id === selectedTemplate)
      ));
      navigate('/build');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Select Your Template
          </h2>
          <p className="text-gray-600 mb-8">
            Choose a professional template to start building your resume
          </p>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateSelect(template.id)}
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedTemplate === template.id 
                    ? 'ring-2 ring-blue-500 shadow-xl' 
                    : 'hover:shadow-xl'
                }`}
              >
                <TemplatePreview type={template.name} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-gray-600 mt-1">{template.description}</p>
                </div>
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Continue Button */}
          {selectedTemplate && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleContinue}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Continue with Selected Template
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TemplateSelection;