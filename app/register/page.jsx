'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Details from './details';
import Clubs from './clubs';
import Department from './department';

const pageVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const pageTransition = {
  type: 'spring',
  ease: 'anticipate',
  duration: 0.5,
};

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    details: {},
    clubs: { selectedOptions: [] },
    department: {},
  });

  const steps = [
    { component: Details, label: 'Details' },
    { component: Clubs, label: 'Clubs' },
    { component: Department, label: 'Department' },
  ];

// In Register component - updated submitToGoogleForms function
const submitToGoogleForms = async (formData) => {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdXjJVOCM3_L4VGjZjTjJ-VWpQlBVNz_wbrpQBJyBQncGMvmA/formResponse';

  const formDataPayload = new URLSearchParams();
  formDataPayload.append('entry.967637098', formData.details.username || '');
  formDataPayload.append('entry.1433594370', formData.details.email || '');
  formDataPayload.append('entry.1296026349', `+91${formData.details.phone}` || ''); // Add country code
  formDataPayload.append('entry.983766883', formData.details.additionalInfo || '');

  // Clubs (ensure exact names)
  const clubs = formData.clubs.selectedOptions || [];
  clubs.forEach(club => {
    formDataPayload.append('entry.955802884', club);
  });

  // Department (ensure exact names)
  formDataPayload.append('entry.1851313930', formData.department.degree || '');
  formDataPayload.append('entry.740827294', formData.department.semester || '');
  formDataPayload.append('entry.1189555344', formData.department.department || '');
  formDataPayload.append('entry.1990498', formData.department.isOutsider ? 'Yes' : 'No');
  formDataPayload.append('entry.830232441', formData.details.reasonToJoin || '');
  if (formData.department.isOutsider) {
    formDataPayload.append('entry.830232441', formData.department.university || '');
  }

  try {
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataPayload.toString(),
      mode: 'no-cors',
    });

    // Google Forms doesn't return a response body, so assume success
    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Submission error:', error);
    alert('Error submitting form. Please try again.');
  }
};
  const handleNext = (stepData) => {
    const updatedData = {
      ...formData,
      [steps[currentStep].label.toLowerCase()]: stepData,
    };

    setFormData(updatedData);

    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form on the last step
      submitToGoogleForms(updatedData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  // Get the current step component
  const CurrentStep = steps[currentStep].component;

  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={pageTransition}
        >
          <CurrentStep
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData[steps[currentStep].label.toLowerCase()]}
            isFirstStep={currentStep === 0}
            isLastStep={currentStep === steps.length - 1}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}