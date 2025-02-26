import React, { useState } from 'react';

const EducationForm = ({ formData, setFormData }) => {
  // Add state for validation errors
  const [dateErrors, setDateErrors] = useState({});
  
  const handleAddEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          school: '',
          degree: '',
          fieldOfStudy: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: ''
        }
      ]
    }));
  };

  const handleEducationChange = (index, field, value) => {
    // Date validation
    if (field === 'startDate') {
      const currentYear = new Date().getFullYear();
      if (value && parseInt(value) > currentYear) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-startDate`]: 'Start year cannot be in the future'
        }));
        return;
      } else {
        setDateErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`${index}-startDate`];
          return newErrors;
        });
      }
    }

    if (field === 'endDate') {
      const currentYear = new Date().getFullYear();
      const education = formData.education[index];
      if (value && parseInt(value) > currentYear) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-endDate`]: 'End year cannot be in the future'
        }));
        return;
      } else if (value && education.startDate && parseInt(value) < parseInt(education.startDate)) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-endDate`]: 'End year must be after start year'
        }));
        return;
      } else {
        setDateErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`${index}-endDate`];
          return newErrors;
        });
      }
    }

    // Update form data if validation passes
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleRemoveEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
    // Clear any errors for the removed education
    setDateErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`${index}-startDate`];
      delete newErrors[`${index}-endDate`];
      return newErrors;
    });
  };

  return (
    <div className="space-y-6">
      {formData.education.map((edu, index) => (
        <div key={edu.id} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Education {index + 1}</h3>
            {formData.education.length > 1 && (
              <button
                onClick={() => handleRemoveEducation(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                School/University *
              </label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree *
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="BS, BA, MS, PhD, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Field of Study *
              </label>
              <input
                type="text"
                value={edu.fieldOfStudy}
                onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Computer Science, Business, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={edu.location}
                onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Year *
                </label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                  placeholder="2014"
                  className={`mt-1 block w-full rounded-md ${
                    dateErrors[`${index}-startDate`] 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {dateErrors[`${index}-startDate`] && (
                  <p className="mt-1 text-sm text-red-600">{dateErrors[`${index}-startDate`]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Year
                </label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  placeholder="2018"
                  disabled={edu.current}
                  className={`mt-1 block w-full rounded-md ${
                    dateErrors[`${index}-endDate`] 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {dateErrors[`${index}-endDate`] && (
                  <p className="mt-1 text-sm text-red-600">{dateErrors[`${index}-endDate`]}</p>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={edu.current}
                  onChange={(e) => handleEducationChange(index, 'current', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I currently study here
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddEducation}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;