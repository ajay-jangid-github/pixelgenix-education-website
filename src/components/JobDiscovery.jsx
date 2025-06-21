import React from 'react';

const filters = [
  'Fresher Jobs',
  'Big Brands',
  'Work from Home',
  'Part-time',
  'MBA',
  'Engineering',
  'Media',
  'Design',
  'Data Science',
  'Actively Hiring',
  'Young Leader (Management Trainee)',
];

const jobs = [
  {
    id: 1,
    title: 'Young Leader (Management Trainee)',
    company: 'Hungama Digital Media',
    location: 'Mumbai',
    salary: '₹ 3,40,000 - 3,50,000 /year',
  },
  {
    id: 2,
    title: 'Customer Service Associate',
    company: 'Paisabazaar',
    location: 'Delhi, Haryana',
    salary: '₹ 3,02,000 - 4,10,000 /year',
  },
  {
    id: 3,
    title: 'E-commerce Sales Executive',
    company: '603 The CoWorking Space India',
    location: 'Mumbai, Bandra',
    salary: '₹ 2,40,000 - 2,65,000 /year',
  },
  {
    id: 4,
    title: 'Corporate Sales Executive',
    company: 'Paisabazaar',
    location: 'Gurgaon',
    salary: '₹ 2,00,000 - 3,00,000 /year',
  },
];

const JobDiscovery = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
          What are you looking for today?
        </h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter, i) => (
            <span
              key={i}
              className="bg-white border border-indigo-200 text-indigo-700 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-100"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-green-600 text-sm font-semibold mb-1">Actively hiring</p>
              <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="text-indigo-700 font-semibold mt-2">{job.salary}</p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobDiscovery;
