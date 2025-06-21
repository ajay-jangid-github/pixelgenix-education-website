import React from 'react';

const Jobs = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Find Your Dream Job</h1>
      <p className="mt-4 text-gray-700">
        Browse top job opportunities across India with placement assurance and support from PixelGenixEduTech's career services.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Top Hiring Categories</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Full Stack Developer</li>
          <li>Sales & Marketing</li>
          <li>UI/UX Designer</li>
          <li>Data Analyst</li>
          <li>Customer Support Executive</li>
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
