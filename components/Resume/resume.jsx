import React, { useEffect, useState } from 'react';
import './Resume.css'; 

const Resume = () => {
  const [importedFormData, setImportedFormData] = useState(null);

  useEffect(() => {

    const jsonData = localStorage.getItem('formData');

    
    const formDataObject = JSON.parse(jsonData);

    
    setImportedFormData(formDataObject);
  }, []);

  return (
    <div className="resume-container">
      {importedFormData && (
        <>
          {/* Personal Information and Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Personal Information</h3>
            <p>First Name: {importedFormData.firstName}</p>
            <p>Last Name: {importedFormData.lastName}</p>
            <p>Place: {importedFormData.place}</p>
            <p>Phone Number: {importedFormData.phoneNumber}</p>
            <p>Address: {importedFormData.address}</p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <ul className="resume-list">
              {importedFormData.school.map((school, index) => (
                <li key={index}>{school}</li>
              ))}
              {importedFormData.college.map((college, index) => (
                <li key={index}>{college}</li>
              ))}
              {importedFormData.degree.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
              {importedFormData.qualification.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>

          {/* Experience, Skills, and Certificates */}
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            <ul className="resume-list">
              {importedFormData.experience.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Skills</h3>
            <ul className="resume-list">
              {importedFormData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Certificates</h3>
            <ul className="resume-list">
              {importedFormData.certificates.map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Resume;

