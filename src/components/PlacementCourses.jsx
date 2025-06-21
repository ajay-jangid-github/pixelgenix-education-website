import React from 'react';

const courses = [
  {
    title: 'Full Stack Pro Developer',
    tag: 'New',
    subtitle: 'Job-assured full stack program',
    duration: '6 months',
    benefit: 'Get placed with ₹3-10 LPA salary',
    opportunity: '1.08 Lac+ job chances',
    rating: '',
  },
  {
    title: 'Advanced Data Science Bootcamp',
    tag: '4.5 ★',
    subtitle: 'Internship + placement included',
    duration: '6 months',
    benefit: '₹40,000 stipend guaranteed',
    opportunity: '45,500+ hiring partners',
    rating: '4.5',
  },
  {
    title: 'HR Management Mastery',
    tag: '4.3 ★',
    subtitle: 'Industry-backed HR program',
    duration: '3 months',
    benefit: '₹3-10 LPA placement offers',
    opportunity: '2.91 Lac+ job links',
  },
  {
    title: 'Digital Marketing Expert',
    tag: '4.4 ★',
    subtitle: 'Placement-assured marketing training',
    duration: '5 months',
    benefit: '₹3-10 LPA salary placement',
    opportunity: '6.25 Lac+ companies',
  },
  {
    title: 'Electric Vehicle Specialist',
    tag: 'New',
    subtitle: 'EV Internship Guarantee Program',
    duration: '7 months',
    benefit: '₹45,000 confirmed stipend',
    opportunity: '1 crore+ jobs by 2030',
  },
  {
    title: 'UI/UX Pro Designer',
    tag: 'New',
    subtitle: 'Internship-backed design course',
    duration: '5 months',
    benefit: '₹35,000 total stipend',
    opportunity: '10K+ job roles',
  },
  {
    title: 'Product Management Leader',
    tag: 'New',
    subtitle: 'Management + internship included',
    duration: '5 months',
    benefit: '₹35,000 total stipend',
    opportunity: '3.1K+ positions',
  },
  {
    title: 'Financial Modeling Analyst',
    tag: 'New',
    subtitle: 'Guaranteed internship finance course',
    duration: '4 months',
    benefit: '₹40,000 total stipend',
    opportunity: '7.4K+ companies',
  },
  {
    title: 'Logistics & SCM Specialist',
    tag: 'New',
    subtitle: 'Job-backed logistics program',
    duration: '2 months',
    benefit: '₹4.5 LPA package with MNCs',
    opportunity: 'Amazon, Swiggy, Zepto',
  },
  {
    title: 'Banking Sales Executive',
    tag: 'New',
    subtitle: 'Bank-job targeted program',
    duration: '2 months',
    benefit: 'Get hired by Axis, Kotak, IDFC',
    opportunity: '4.1K+ hiring banks',
  },
  {
    title: 'QA/Testing Engineer Bootcamp',
    tag: 'New',
    subtitle: 'Internship-based testing course',
    duration: '5 months',
    benefit: '₹30,000 assured stipend',
    opportunity: '5.3K+ tech companies',
  },
];

const PlacementCourses = () => {
  return (
    <section className="bg-[#f3f7ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-3">
            Career Launch Programs
          </h2>
          <p className="text-gray-600 text-lg">
            100% job-backed courses with refund if not placed. Start your journey to success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5"
            >
              <span className="text-sm text-white bg-green-600 px-3 py-1 rounded-full inline-block mb-2">
                {course.tag}
              </span>
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                {course.title}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{course.subtitle}</p>
              <p className="text-sm text-gray-500">{course.duration}</p>
              <p className="text-indigo-700 font-medium mt-2">{course.benefit}</p>
              <p className="text-gray-600 text-sm mb-4">{course.opportunity}</p>
              <button className="text-indigo-600 hover:underline font-semibold text-sm">
                Know More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementCourses;
