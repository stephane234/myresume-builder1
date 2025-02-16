import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import PersonalForm from './PersonalForm';
import ExperienceForm from './ExperienceForm';

const BuildResume = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    awards: []
  });

  // Load selected template on component mount
  useEffect(() => {
    const template = localStorage.getItem('selectedTemplate');
    if (!template) {
      navigate('/templates'); // Redirect to template selection if none selected
    } else {
      setSelectedTemplate(JSON.parse(template));
    }
  }, [navigate]);

  // If no template is selected, don't render the builder
  if (!selectedTemplate) {
    return null; // Or you could return a loading spinner here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="ml-2 text-gray-500">Select Template</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <span className="ml-2 text-blue-600 font-medium">Build</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <span className="ml-2 text-gray-500">Customize</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Left Side - Form */}
          <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Your Resume</h2>
            
            {/* Section Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveSection('personal')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'personal' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveSection('experience')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'experience' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveSection('education')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'education' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'skills' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'projects' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection('awards')}
                className={`px-4 py-2 rounded-lg ${
                  activeSection === 'awards' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Awards
              </button>
            </div>

            {/* Form Sections */}
            <div className="space-y-6">
              {activeSection === 'personal' && (
                <PersonalForm 
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {activeSection === 'experience' && (
                <ExperienceForm 
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {activeSection === 'education' && (
                <p>Education form will go here</p>
              )}
              {activeSection === 'skills' && (
                <p>Skills form will go here</p>
              )}
              {activeSection === 'projects' && (
                <p>Projects form will go here</p>
              )}
              {activeSection === 'awards' && (
                <p>Awards form will go here</p>
              )}
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
            <div className="border rounded-lg h-[800px] bg-white p-8">
              {/* Personal Information */}
              <div className="border-b-2 border-gray-300 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {formData.personal.fullName || 'Your Name'}
                </h1>
                <div className="text-gray-600 space-y-1">
                  {formData.personal.email && <div>{formData.personal.email}</div>}
                  {formData.personal.phone && <div>{formData.personal.phone}</div>}
                  {formData.personal.location && <div>{formData.personal.location}</div>}
                </div>
                {formData.personal.summary && (
                  <p className="mt-4 text-gray-700">{formData.personal.summary}</p>
                )}
              </div>

              {/* Experience Section */}
              {formData.experience.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
                  <div className="space-y-4">
                    {formData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-gray-200 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-800">{exp.position || 'Position'}</h3>
                            <div className="text-gray-600">{exp.company || 'Company'}</div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {exp.startDate && `${exp.startDate} - `}
                            {exp.current ? 'Present' : exp.endDate}
                          </div>
                        </div>
                        {exp.location && (
                          <div className="text-gray-600 text-sm">{exp.location}</div>
                        )}
                        {exp.description && (
                          <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other sections will be added as we implement them */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuildResume;