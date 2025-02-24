import React, { useState } from 'react';

const EducationForm = ({ formData, setFormData }) => {
  // Add state for validation errors
  const [dateErrors, setDateErrors] = useState({});
  
  // Get today's date in YYYY-MM format
  const today = new Date().toISOString().slice(0, 7);

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
      if (value > today) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-startDate`]: 'Start date cannot be in the future'
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
      const education = formData.education[index];
      if (value > today) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-endDate`]: 'End date cannot be in the future'
        }));
        return;
      } else if (value < education.startDate) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-endDate`]: 'End date must be after start date'
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

  // Update the date input fields in your JSX
  return (
    <div className="space-y-6">
      {formData.education.map((edu, index) => (
        <div key={edu.id} className="bg-gray-50 p-6 rounded-lg">
          {/* ... other fields remain the same ... */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ... school, degree, fieldOfStudy inputs ... */}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date *
                </label>
                <input
                  type="month"
                  max={today}
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
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
                  End Date
                </label>
                <input
                  type="month"
                  max={today}
                  min={edu.startDate}
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
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

            {/* ... rest of the form ... */}
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