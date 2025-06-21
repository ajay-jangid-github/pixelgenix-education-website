import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700">About PixelGenixEduTech</h1>
      <p className="mt-4 text-gray-700">
        PixelGenixEduTech is a leading platform dedicated to bridging the gap between education and employment.
        We provide high-quality online courses, real-world internships, and placement-focused programs.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>Trusted by 10,000+ students</li>
          <li>Certified industry instructors</li>
          <li>Hands-on projects and mentorship</li>
          <li>100% placement assistance</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
