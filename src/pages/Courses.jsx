import React, { useState } from 'react';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import CourseCard from '../components/CourseCard';
// sample courses data
const allCourses = [
  { id: 'web-dev', title: 'Web & App Development', category: 'Development', image: 'https://via.placeholder.com/300x200' },
  { id: 'py', title: 'Python Programming', category: 'Programming', image: 'https://via.placeholder.com/300x200' },
  { id: 'ml', title: 'Machine Learning Basics', category: 'Data Science', image: 'https://via.placeholder.com/300x200' },
];

const Courses = () => {
  const [list, setList] = useState(allCourses);
  const handleSearch = (query) => {
    setList(allCourses.filter(c => c.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <>
      <Hero />
      <SearchFilter onSearch={handleSearch} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {list.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </>
  );
};

export default Courses;
