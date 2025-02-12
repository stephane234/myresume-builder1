import React from 'react';

const TemplatePreview = ({ type }) => {
  switch (type) {
    case 'Professional':
      return (
        <div className="h-64 bg-white p-3 text-[8px]">
          {/* Header/Contact */}
          <div className="border-b-2 border-blue-600 pb-1 mb-1">
            <div className="text-base font-bold text-gray-800">John Smith</div>
            <div className="text-gray-600 text-[7px] flex justify-between">
              <span>john@email.com</span>
              <span>555-0123</span>
              <span>New York, NY</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-1">
            <div className="font-semibold text-blue-600">PROFESSIONAL SUMMARY</div>
            <div className="text-gray-600 line-clamp-2">
              Experienced software developer with expertise in web development and a passion for creating efficient solutions.
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-4 gap-1">
            {/* Main Content - Left Column */}
            <div className="col-span-3 pr-1">
              {/* Experience */}
              <div className="mb-1">
                <div className="font-semibold text-blue-600">EXPERIENCE</div>
                <div className="mb-1">
                  <div className="font-medium">Senior Developer</div>
                  <div className="text-gray-600">Tech Corp • 2020-Present</div>
                  <div className="text-gray-600 line-clamp-1">Led development of core applications</div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-1">
                <div className="font-semibold text-blue-600">EDUCATION</div>
                <div>
                  <div className="font-medium">BS Computer Science</div>
                  <div className="text-gray-600">Tech University • 2016-2020</div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-1">
                <div className="font-semibold text-blue-600">PROJECTS</div>
                <div>
                  <div className="font-medium">E-commerce Platform</div>
                  <div className="text-gray-600 line-clamp-1">Built full-stack application</div>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="col-span-1">
              {/* Skills */}
              <div className="bg-gray-50 p-1">
                <div className="font-semibold text-blue-600">SKILLS</div>
                <div className="text-gray-600">
                  JavaScript
                  React
                  Node.js
                  Python
                  SQL
                </div>
              </div>

              {/* Awards */}
              <div className="mt-1">
                <div className="font-semibold text-blue-600">AWARDS</div>
                <div className="text-gray-600">
                  Best Project 2023
                  Top Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default TemplatePreview;