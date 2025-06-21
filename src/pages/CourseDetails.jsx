import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  'web-dev': { title: 'Web & App Development', description: 'Build full-stack web apps.', content: 'Detailed modules here' },
  py: { title: 'Python Programming', description: 'Learn Python from scratch.', content: 'Detailed modules here' },
  ml: { title: 'Machine Learning Basics', description: 'Intro to ML.', content: 'Detailed modules here' },
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = data[id];

  if (!course) return <div className="p-8">Course not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-6">{course.description}</p>
      <h2 className="font-semibold text-lg mb-2">Course Modules:</h2>
      <p>{course.content}</p>
    </div>
  );
};

export default CourseDetails;
