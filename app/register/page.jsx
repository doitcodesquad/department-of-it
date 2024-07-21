'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Details from "./details";
import Clubs from "./clubs";
import Department from "./department";

const pageVariants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    };
  },
  in: {
    x: 0,
    opacity: 1
  },
  out: (direction) => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    };
  }
};

const pageTransition = {
  type: 'spring',
  ease: 'anticipate',
  duration: 0.5
};

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState({
    details: {},
    clubs: { selectedOptions: [] },
    department: {}
  });

  const steps = [
    { component: Details, label: "Details" },
    { component: Clubs, label: "Clubs" },
    { component: Department, label: "Department" }
  ];

  const handleNext = (stepData) => {
    setFormData(prevData => ({
      ...prevData,
      [steps[currentStep].label.toLowerCase()]: stepData
    }));
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

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
          <CurrentStepComponent 
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