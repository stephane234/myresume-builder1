import React from 'react';
import templates from './ResumeTemplates';

const ResumePreview = ({ templateId, formData }) => {
  const template = templates[`template${templateId}`];
  const styles = template.styles;

  // Function to truncate text
  const truncate = (text, limit = 60) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.name}>
          {truncate(formData.personal.fullName) || 'John Smith'}
        </h1>
        <div className={styles.contactInfo}>
          <div>{truncate(formData.personal.email) || 'john@email.com'}</div>
          <div>{truncate(formData.personal.phone) || '555-0123'}</div>
          <div>{truncate(formData.personal.location) || 'New York, NY'}</div>
        </div>
      </div>

      {/* Blue Separator */}
      <div className={styles.separator} />

      {/* Two Column Layout */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div>
          {/* Professional Summary  */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Professional Summary</h2>
            <p className={styles.summaryText}>
              {formData.personal.summary || 'Software developer with expertise in React and Node.js.'}
            </p>
          </div>

          {/* Experience  */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            {(formData.experience.length > 0 ? formData.experience: [{
              position: 'Senior Developer',
              company: 'Tech Corp',
              startDate: '2020',
              endDate: 'Present',
              description: 'Led development of core applications and implemented key features.'
            }]).map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <div className={styles.experienceTitle}>{exp.position}</div>
                    <div className={styles.experienceCompany}>{exp.company}</div>
                  </div>
                  <div className={styles.experienceDate}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education - simplified */}
          <div className={styles.leftSection}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.experienceItem}>
              <div className={styles.experienceTitle}>BS Computer Science</div>
              <div className={styles.experienceCompany}>Tech University • 2018</div>
            </div>
          </div>
        </div>

        {/* Right Column - simplified */}
        <div>
          <div className={styles.rightSection}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.skillsList}>
              <div>JavaScript/React</div>
              <div>Node.js/Python</div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <h2 className={styles.sectionTitle}>Awards</h2>
            <div className={styles.skillsList}>
              <div>Best Project - 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;