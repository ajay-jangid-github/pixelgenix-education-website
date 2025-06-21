import React from 'react';

const filters = [
  'Big Brands',
  'Work from Home',
  'Part-time',
  'MBA',
  'Engineering',
  'Media',
  'Design',
  'Data Science',
  'Actively Hiring',
  'UI/UX Design',
];

const internships = [
  {
    id: 1,
    title: 'UI/UX Design',
    company: 'Thomas Cook',
    location: 'Mumbai',
    stipend: '₹ 3,000 - 5,000 /month',
    duration: '3 Months',
  },
  {
    id: 2,
    title: 'Content And Production',
    company: 'Times Internet',
    location: 'Delhi, Noida',
    stipend: '₹ 10,000 /month',
    duration: '6 Months',
  },
  {
    id: 3,
    title: 'Human Resources (HR)',
    company: 'Krystal Integrated Services Limited',
    location: 'Mumbai',
    stipend: '₹ 5,000 - 10,000 /month',
    duration: '2 Months',
  },
  {
    id: 4,
    title: 'Human Resources (HR)',
    company: 'DBS Bank',
    location: 'Chennai',
    stipend: '₹ 5,000 - 10,000 /month',
    duration: '3 Months',
  },
  {
    id: 5,
    title: 'Business Development (Sales)',
    company: 'Fern Hotels & Resorts',
    location: 'Mumbai',
    stipend: '₹ 25,000 - 35,000 /month',
    duration: '6 Months',
  },
];

const InternshipDiscovery = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">
          Explore Latest Internships
        </h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter, i) => (
            <span
              key={i}
              className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-100"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Internship Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {internships.map((intern) => (
            <div
              key={intern.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-green-600 text-sm font-semibold mb-1">Actively hiring</p>
              <h3 className="text-lg font-bold text-gray-900">{intern.title}</h3>
              <p className="text-sm text-gray-700">{intern.company}</p>
              <p className="text-sm text-gray-500">{intern.location}</p>
              <div className="mt-2 text-sm">
                <p className="text-indigo-700 font-semibold">{intern.stipend}</p>
                <p className="text-gray-600">{intern.duration}</p>
                <p className="text-gray-600">Internship</p>
              </div>
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

export default InternshipDiscovery;
