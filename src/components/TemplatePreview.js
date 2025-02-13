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
              Software developer with expertise in React, Node.js, and full-stack development. Passionate about creating efficient and scalable solutions.
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
                <div>
                  <div className="font-medium">Full Stack Developer</div>
                  <div className="text-gray-600">Web Solutions Inc • 2018-2020</div>
                  <div className="text-gray-600 line-clamp-1">Developed and maintained client projects</div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-1">
                <div className="font-semibold text-blue-600">EDUCATION</div>
                <div>
                  <div className="font-medium">BS Computer Science</div>
                  <div className="text-gray-600">Tech University • 2014-2018</div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-1">
                <div className="font-semibold text-blue-600">PROJECTS</div>
                <div>
                  <div className="font-medium">E-commerce Platform</div>
                  <div className="text-gray-600 line-clamp-1">Built scalable platform with React & Node.js</div>
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
                  Git
                  AWS
                </div>
              </div>

              {/* Awards */}
              <div className="mt-1">
                <div className="font-semibold text-blue-600">AWARDS</div>
                <div className="text-gray-600">
                  Best Project 2023
                  Innovation Award
                  Tech Leader
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'Creative':
      return (
        <div className="h-64 bg-gradient-to-r from-purple-50 to-white p-3 text-[8px]">
          <div className="flex h-full">
            {/* Left Sidebar */}
            <div className="w-1/3 bg-purple-600 text-white p-2 rounded-l">
              <div>
                <div className="text-base font-bold mb-2">JANE DOE</div>
                <div className="text-[7px] mb-2">UX DESIGNER</div>
                
                {/* Contact */}
                <div className="mb-2 text-[7px]">
                  jane@email.com
                  <br />
                  555-0123
                  <br />
                  New York
                </div>

                {/* Skills */}
                <div className="mb-2">
                  <div className="font-bold mb-1">SKILLS</div>
                  <div className="text-[7px]">
                    <div className="bg-purple-500 rounded px-1 mb-1">UI/UX Design</div>
                    <div className="bg-purple-500 rounded px-1 mb-1">Figma</div>
                    <div className="bg-purple-500 rounded px-1 mb-1">Adobe Suite</div>
                    <div className="bg-purple-500 rounded px-1 mb-1">Prototyping</div>
                    <div className="bg-purple-500 rounded px-1">User Research</div>
                  </div>
                </div>

                {/* Awards */}
                <div className="mb-2">
                  <div className="font-bold mb-1">AWARDS</div>
                  <div className="text-[7px]">
                    Design Excellence 2023
                    <br />
                    UX Award Winner
                    <br />
                    Best Portfolio 2022
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-2">
              {/* Summary */}
              <div className="mb-2">
                <div className="font-bold text-purple-600">SUMMARY</div>
                <div className="text-gray-600 line-clamp-2">
                  Creative UX/UI designer with 5+ years of experience crafting digital experiences. Passionate about creating user-centered designs that combine aesthetics with functionality.
                </div>
              </div>

              {/* Experience */}
              <div className="mb-2">
                <div className="font-bold text-purple-600">EXPERIENCE</div>
                <div className="mb-1">
                  <div className="font-medium">Senior UX Designer</div>
                  <div className="text-gray-600">Design Studio • 2020-Present</div>
                  <div className="text-gray-600 line-clamp-1">Led design team for major client projects</div>
                </div>
                <div>
                  <div className="font-medium">UI Designer</div>
                  <div className="text-gray-600">Tech Corp • 2018-2020</div>
                  <div className="text-gray-600 line-clamp-1">Designed mobile app interfaces</div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-2">
                <div className="font-bold text-purple-600">EDUCATION</div>
                <div>
                  <div className="font-medium">BFA in Digital Design</div>
                  <div className="text-gray-600">Art Institute • 2014-2018</div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="font-bold text-purple-600">PROJECTS</div>
                <div className="mb-1">
                  <div className="font-medium">E-commerce Redesign</div>
                  <div className="text-gray-600 line-clamp-1">Increased conversion by 40%</div>
                </div>
                <div>
                  <div className="font-medium">Mobile App Design</div>
                  <div className="text-gray-600 line-clamp-1">Award-winning fitness app</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'Executive':
      return (
        <div className="h-64 bg-gray-50 p-3 text-[8px]">
          {/* Header */}
          <div className="text-center border-b-2 border-gray-300 pb-1 mb-1">
            <div className="text-base font-serif font-bold text-gray-900">Michael Johnson</div>
            <div className="text-gray-600 font-serif">Chief Financial Officer</div>
            <div className="text-[7px] text-gray-500 mt-1">
              <span className="mx-1">michael@email.com</span>•
              <span className="mx-1">555-0123</span>•
              <span className="mx-1">New York, NY</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-2">
            <div className="font-serif font-bold border-b border-gray-300 mb-1">
              Executive Summary
            </div>
            <div className="text-gray-600 line-clamp-2">
              Strategic financial executive with 15+ years of experience in global markets and corporate finance. Proven track record in leading multinational teams and driving business growth.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Experience */}
            <div className="col-span-1">
              <div className="font-serif font-bold border-b border-gray-300 mb-1">
                Experience
              </div>
              <div className="mb-1">
                <div className="font-medium">CFO</div>
                <div className="text-gray-600">Global Corp</div>
                <div className="text-gray-600">2018-Present</div>
              </div>
              <div>
                <div className="font-medium">VP Finance</div>
                <div className="text-gray-600">Tech Inc</div>
                <div className="text-gray-600">2015-2018</div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="col-span-1">
              {/* Education */}
              <div className="mb-2">
                <div className="font-serif font-bold border-b border-gray-300 mb-1">
                  Education
                </div>
                <div className="mb-1">
                  <div className="font-medium">MBA</div>
                  <div className="text-gray-600">Harvard</div>
                  <div className="text-gray-600">2010</div>
                </div>
                <div>
                  <div className="font-medium">BSc Finance</div>
                  <div className="text-gray-600">Yale</div>
                  <div className="text-gray-600">2005</div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="font-serif font-bold border-b border-gray-300 mb-1">
                  Key Projects
                </div>
                <div className="text-gray-600">
                  M&A Integration
                  <br />
                  Digital Transformation
                  <br />
                  Global Expansion
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1">
              {/* Skills & Expertise */}
              <div className="mb-2">
                <div className="font-serif font-bold border-b border-gray-300 mb-1">
                  Expertise
                </div>
                <div className="text-gray-600">
                  Strategic Planning
                  <br />
                  M&A
                  <br />
                  Risk Management
                  <br />
                  Team Leadership
                </div>
              </div>

              {/* Awards */}
              <div>
                <div className="font-serif font-bold border-b border-gray-300 mb-1">
                  Awards
                </div>
                <div className="text-gray-600">
                  CFO of the Year 2023
                  <br />
                  Leadership Excellence
                  <br />
                  Innovation Award
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