import React from 'react';
import { Link } from 'react-router-dom';

const trendingItems = [
  {
    id: 'web-dev',
    title: 'Web Development Bootcamp',
    category: 'Development',
    image: 'https://via.placeholder.com/300x200',
    type: 'Course',
  },
  {
    id: 'data-analyst-intern',
    title: 'Data Analyst Intern - Remote',
    category: 'Internship',
    image: 'https://via.placeholder.com/300x200',
    type: 'Internship',
  },
  {
    id: 'react-js',
    title: 'Frontend with React',
    category: 'Development',
    image: 'https://via.placeholder.com/300x200',
    type: 'Course',
  },
  {
    id: 'seo-intern',
    title: 'SEO Internship',
    category: 'Digital Marketing',
    image: 'https://via.placeholder.com/300x200',
    type: 'Internship',
  },
];

const TrendingNow = () => (
  <section className="bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🔥 Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingItems.map((item) => (
          <Link to={`/${item.type.toLowerCase()}s/${item.id}`} key={item.id}>
            <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.type} • {item.category}</p>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default TrendingNow;
