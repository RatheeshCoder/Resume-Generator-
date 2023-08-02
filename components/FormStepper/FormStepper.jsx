import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, TextField, InputAdornment } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './FormStepper.css';

const steps = ['Personal Information', 'Education Information', 'Additional Information'];

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    place: '',
    phoneNumber: '',
    address: '',
    school: [''],
    college: [''],
    degree: [''],
    qualification: [''],
    experience: [''],
    skills: [''],
    certificates: [''],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleFieldChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleAddField = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: [...prevFormData[fieldName], ''],
    }));
  };

  const exportFormData = () => {
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="step-content">
            {/* Personal Information fields */}
            <TextField
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleFieldChange('firstName', e.target.value)}
              fullWidth
            />
            <TextField
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleFieldChange('lastName', e.target.value)}
              fullWidth
            />
            <TextField
              label="Place"
              value={formData.place}
              onChange={(e) => handleFieldChange('place', e.target.value)}
              fullWidth
            />
            <TextField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
              fullWidth
            />
            <TextField
              label="Address"
              value={formData.address}
              onChange={(e) => handleFieldChange('address', e.target.value)}
              fullWidth
            />
          </div>
        );
      case 1:
        return (
          <div className="step-content">
            {/* Education Information fields */}
            {formData.school.map((school, index) => (
              <TextField
                key={`school-${index}`}
                label="School"
                value={school}
                onChange={(e) => handleFieldChange('school', [...formData.school.slice(0, index), e.target.value, ...formData.school.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.school.length - 1 && school !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('school')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            {formData.college.map((college, index) => (
              <TextField
                key={`college-${index}`}
                label="College"
                value={college}
                onChange={(e) => handleFieldChange('college', [...formData.college.slice(0, index), e.target.value, ...formData.college.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.college.length - 1 && college !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('college')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            {formData.degree.map((degree, index) => (
              <TextField
                key={`degree-${index}`}
                label="Degree"
                value={degree}
                onChange={(e) => handleFieldChange('degree', [...formData.degree.slice(0, index), e.target.value, ...formData.degree.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.degree.length - 1 && degree !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('degree')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            {formData.qualification.map((qualification, index) => (
              <TextField
                key={`qualification-${index}`}
                label="Qualification"
                value={qualification}
                onChange={(e) => handleFieldChange('qualification', [...formData.qualification.slice(0, index), e.target.value, ...formData.qualification.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.qualification.length - 1 && qualification !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('qualification')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            {/* Additional Information fields */}
            {formData.experience.map((experience, index) => (
              <TextField
                key={`experience-${index}`}
                label="Experience"
                value={experience}
                onChange={(e) => handleFieldChange('experience', [...formData.experience.slice(0, index), e.target.value, ...formData.experience.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.experience.length - 1 && experience !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('experience')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            {formData.skills.map((skills, index) => (
              <TextField
                key={`skills-${index}`}
                label="Skills"
                value={skills}
                onChange={(e) => handleFieldChange('skills', [...formData.skills.slice(0, index), e.target.value, ...formData.skills.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.skills.length - 1 && skills !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('skills')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            {formData.certificates.map((certificates, index) => (
              <TextField
                key={`certificates-${index}`}
                label="Certificates"
                value={certificates}
                onChange={(e) => handleFieldChange('certificates', [...formData.certificates.slice(0, index), e.target.value, ...formData.certificates.slice(index + 1)])}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {index === formData.certificates.length - 1 && certificates !== '' && (
                        <AddCircleIcon onClick={() => handleAddField('certificates')} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="form-stepper-container">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="form-content">
        {activeStep === steps.length ? (
          <div className="form-summary">
            <h2>Finish</h2>
            <pre>Reload and View Resume</pre>
            <Button variant="contained" color="primary" onClick={exportFormData}>
              Finish
            </Button>
          </div>
        ) : (
          <>
            {getStepContent(activeStep)}
            <div className="form-buttons">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FormStepper;
