import React from 'react';

const Internships = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-700">Internship Opportunities</h1>
      <p className="mt-4 text-gray-700">
        Find the perfect internship to kickstart your career. Remote and in-office roles available across top categories.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Popular Fields</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Software Development</li>
          <li>Digital Marketing</li>
          <li>Human Resource</li>
          <li>Content Writing</li>
          <li>Business Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Internships;
