'use client'

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Department = ({ onNext, onPrevious, data, isLastStep }) => {
  const [formData, setFormData] = useState(data || {
    department: '',
    semester: '',
    isOutsider: false,
    university: '',
  });
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    'Mathematics', 'Law', 'Physical Education', 'Information Technology', 
    'Biotechnology', 'Religious Studies', 'Communication & Journalism', 
    'Commerce', 'Tourism Studies Education', 'Other'
  ];

  const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

  useEffect(() => {
    if (searchTerm) {
      const timeoutId = setTimeout(() => {
        const mockUniversities = [
          'Harvard University', 'Stanford University', 'MIT', 
          'University of Cambridge', 'University of Oxford'
        ].filter(uni => uni.toLowerCase().includes(searchTerm.toLowerCase()));
        setUniversities(mockUniversities);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setUniversities([]);
    }
  }, [searchTerm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-emerald-50 p-4 md:p-8">
      <h2 className="text-center my-[4.89rem] md:mb-14 sm:max-mb-11">Department Registration</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto border-4 border-black bg-orange-50 p-4 md:p-6">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="department">
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-2 bg-emerald-50 text-gray-500 border-black border"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="semester">
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full p-2 bg-emerald-50 text-gray-500 border-black border"
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isOutsider"
              checked={formData.isOutsider}
              onChange={handleChange}
              className="mr-2 appearance-none w-2 h-2 border border-black rounded-full bg-emerald-50 checked:bg-black checked:border-transparent focus:outline-none"
            />
            <span className="">Are you an outsider?</span>
          </label>
        </div>

        {formData.isOutsider && (
          <div className="mb-4">
            <label className="block mb-2" htmlFor="university">
              University
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleChange(e);
              }}
              className="w-full p-2 border border-black focus:outline-none bg-emerald-50"
              placeholder="Search for university"
            />
            {universities.length > 0 && (
              <ul className="mt-2">
                {universities.map((uni) => (
                  <li
                    key={uni}
                    className="p-2 bg-emerald-50 cursor-pointer"
                    onClick={() => {
                      setFormData(prevData => ({ ...prevData, university: uni }));
                      setSearchTerm(uni);
                      setUniversities([]);
                    }}
                  >
                    {uni}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-3 flex justify-between gap-2">
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center justify-center w-full bg-primary cursor-pointer py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group"
          >
            <Icon 
              icon="mdi:arrow-left"
              className="transition-colors duration-300 text-black group-hover:text-white text-lg"
              width="14"
              height="14"
            />
            <span className="text-[10px] sm:text-sm pl-1 sm:pl-3">Previous</span>
          </button>
          <button
            type="submit"
            className="flex items-center justify-center w-full bg-primary cursor-pointer py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group"
          >
            <span className="text-[10px] sm:text-sm pr-1 sm:pr-3">
              {isLastStep ? 'Register' : 'Next'}
            </span>
            <Icon 
              icon="mdi:arrow-right"
              className="transition-colors duration-300 text-black group-hover:text-white text-lg"
              width="14"
              height="14"
            />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Department;