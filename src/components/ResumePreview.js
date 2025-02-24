import React from 'react';
import templates from './ResumeTemplates';

const ResumePreview = ({ templateId, formData }) => {
  const template = templates[`template${templateId}`];
  const styles = template.styles;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.name}>
          {formData.personal.fullName || 'John Smith'}
        </h1>
        <div className={styles.contactInfo}>
          <div>{formData.personal.email || 'john@email.com'}</div>
          <div>{formData.personal.phone || '555-0123'}</div>
          <div>{formData.personal.location || 'New York, NY'}</div>
        </div>
      </div>

      {/* Blue Separator */}
      <div className={styles.separator} />

      {/* Two Column Layout */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div>
          {/* Professional Summary */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Professional Summary</h2>
            <p className={styles.summaryText}>
              {formData.personal.summary || 'Software developer with expertise in React, Node.js, and full-stack development. Passionate about creating efficient and scalable solutions.'}
            </p>
          </div>

          {/* Experience */}
          {/* Experience */}
<div className={styles.leftSection}>
  <h2 className={styles.sectionTitle}>Experience</h2>
  {(formData.experience.length > 0 ? formData.experience : [{
    position: 'Senior Developer',
    company: 'Tech Corp',
    location: 'Portland, OR',
    startDate: '2020',
    endDate: 'Present',
    description: 'Led development of core applications and implemented key features.'
  }]).map((exp, index) => (
    <div key={index} className={styles.experienceItem}>
      <div className={styles.experienceHeader}>
        <div>
          <div className={styles.experienceTitle}>{exp.position}</div>
          <div className={styles.experienceCompany}>
            {exp.company}{exp.location && `, ${exp.location}`}
          </div>
        </div>
        <div className={styles.experienceDate}>
          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
        </div>
      </div>
      {exp.description && (
        <p className={styles.experienceDescription}>
          {exp.description}
        </p>
      )}
    </div>
  ))}
</div>

          {/* Education */}
          {/* Education */}
{/* Education Section */}
<div className={styles.leftSection}>
  <h2 className={styles.sectionTitle}>Education</h2>
  {(formData.education.length > 0 ? formData.education : [{
    school: 'Tech University',
    degree: 'BS',
    fieldOfStudy: 'Computer Science',
    location: 'Portland, OR',
    startDate: '2014',
    endDate: '2018',
    description: 'Relevant coursework in Software Engineering and Data Structures.'
  }]).map((edu, index) => (
    <div key={index} className={styles.educationItem}>
      <div className={styles.educationHeader}>
        <div>
          <div className={styles.educationTitle}>
            {edu.degree} {edu.fieldOfStudy}
          </div>
          <div className={styles.educationInstitution}>
            {edu.school}{edu.location && `, ${edu.location}`}
          </div>
        </div>
        <div className={styles.educationDate}>
          {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
        </div>
      </div>
      {edu.description && (
        <p className={styles.educationDescription}>
          {edu.description}
        </p>
      )}
    </div>
  ))}
</div>
        </div>

        {/* Right Column */}
        <div>
          <div className={styles.rightSection}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skillsList}>
              <div>JavaScript/React</div>
              <div>Node.js/Python</div>
              <div>Git/AWS</div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <h2 className={styles.sectionTitle}>Awards</h2>
            <div className={styles.skillsList}>
              <div>Best Project - 2023</div>
              <div>Innovation Award Tech Leader</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;