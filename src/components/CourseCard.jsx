import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <Link to={`/courses/${course.id}`}>
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition m-2">
      <img src={course.image} alt={course.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="mt-1 text-gray-600">{course.category}</p>
      </div>
    </div>
  </Link>
);

export default CourseCard;
