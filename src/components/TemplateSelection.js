import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import TemplatePreview from './TemplatePreview';

const TemplateSelection = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'Clean and modern design perfect for any industry. Features a two-column layout with clear section organization.'
    },
    {
      id: 2,
      name: 'Creative',
      description: 'Modern and unique design ideal for creative professionals. Includes a bold sidebar and dynamic layout.'
    },
    {
      id: 3,
      name: 'Executive',
      description: 'Traditional and elegant design perfect for senior positions. Features a formal layout with balanced sections.'
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
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="ml-2 text-blue-600 font-medium">Select Template</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="ml-2 text-gray-500">Build</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="ml-2 text-gray-500">Customize</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Select Your Template
          </h2>
          <p className="text-gray-600 mb-8">
            Choose from our professionally designed templates to start your resume
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