import React, { useState } from 'react';

const ExperienceForm = ({ formData, setFormData }) => {
  // Add state for validation errors
  const [dateErrors, setDateErrors] = useState({});
  
  // Get today's date in YYYY-MM format
  const today = new Date().toISOString().slice(0, 7);

  const handleAddExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: '',
          position: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: ''
        }
      ]
    }));
  };

  const handleExperienceChange = (index, field, value) => {
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
      const experience = formData.experience[index];
      if (value > today) {
        setDateErrors(prev => ({
          ...prev,
          [`${index}-endDate`]: 'End date cannot be in the future'
        }));
        return;
      } else if (value < experience.startDate) {
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

    setFormData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleRemoveExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
    // Clear any errors for the removed experience
    setDateErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[`${index}-startDate`];
      delete newErrors[`${index}-endDate`];
      return newErrors;
    });
  };

  return (
    <div className="space-y-6">
      {formData.experience.map((exp, index) => (
        <div key={exp.id} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Experience {index + 1}</h3>
            {formData.experience.length > 1 && (
              <button
                onClick={() => handleRemoveExperience(index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company and Position fields remain the same */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company *
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position *
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date *
                </label>
                <input
                  type="month"
                  max={today}
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
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
                  min={exp.startDate}
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  disabled={exp.current}
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
                  checked={exp.current}
                  onChange={(e) => handleExperienceChange(index, 'current', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I currently work here
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddExperience}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;