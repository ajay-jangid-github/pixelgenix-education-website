import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleSearch = () => onSearch(query);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 my-8 px-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="border rounded-md px-4 py-2 w-full md:w-1/2"
      />
      <button onClick={handleSearch} className="bg-indigo-600 text-white px-6 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
