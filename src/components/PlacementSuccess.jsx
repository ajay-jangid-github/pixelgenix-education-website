import React, { useEffect, useState } from 'react';

const PlacementSuccess = () => {
  const [count, setCount] = useState(0);
  const finalCount = 500;

  // Simple counter animation
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= finalCount) {
        current = finalCount;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          {count}+
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
          Successful Placements — Read Their Inspiring Stories
        </p>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Discover how PixelGenixEduTech helped students transform their careers through practical training and real-world experience.
        </p>
        <a
          href="/placements"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 transition"
        >
          Explore Success Stories
        </a>
      </div>
    </section>
  );
};

export default PlacementSuccess;
