'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Department = () => {
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [isOutsider, setIsOutsider] = useState(false);
  const [university, setUniversity] = useState('');
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

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

  const handleNext = () => {
    console.log({
      department,
      semester,
      isOutsider,
      university: isOutsider ? university : 'N/A'
    });
    router.push('/next-page'); // Replace with your actual next page route
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-6">
      <h2 className=" text-center my-20 md:mb15 sm:max-mb-10">Department Registration</h2>
      <div className="max-w-md mx-auto border-4 border-black bg-emerald-50 p-4 md:p-6">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="department">
            Department
          </label>
          <select
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 bg-inherit focus:bg-white text-gray-500 border-black border"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 " htmlFor="semester">
            Semester
          </label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full p-2 bg-inherit focus:bg-white text-gray-500 border-black border"
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
              checked={isOutsider}
              onChange={(e) => setIsOutsider(e.target.checked)}
              className="mr-2 appearance-none w-2 h-2 border border-black rounded-full bg-white checked:bg-black checked:border-transparent focus:outline-none"
            />
            <span className="">Are you an outsider?</span>
          </label>
        </div>

        {isOutsider && (
          <div className="mb-4">
            <label className="block mb-2 " htmlFor="university">
              University
            </label>
            <input
              type="text"
              id="university"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border bg-inherit border-black focus:outline-none focus:bg-white"
              placeholder="Search for university"
            />
            {universities.length > 0 && (
              <ul className="mt-2 ">
                {universities.map((uni) => (
                  <li
                    key={uni}
                    className="p-2 hover:bg-orange-50 cursor-pointer"
                    onClick={() => {
                      setUniversity(uni);
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

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            onClick={handleNext}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-center text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Department;