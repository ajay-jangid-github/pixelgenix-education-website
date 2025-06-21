import React from 'react';
import { useParams } from 'react-router-dom';

const internshipData = {
  'remote-opportunities': {
    title: 'Remote Internship Opportunities',
    desc: 'Explore high-quality virtual internships you can do from anywhere.',
    points: [
      'Work from home convenience',
      'Flexible hours',
      'Diverse companies across India',
    ],
  },
  'popular-profiles': {
    title: 'Popular Internship Profiles',
    desc: 'Top internship roles in demand by companies in 2025.',
    points: [
      'Web Development',
      'Digital Marketing',
      'HR, Finance, Design, and more',
    ],
  },
  'top-internship-categories': {
    title: 'Top Internship Categories',
    desc: 'Internships grouped by the most pursued domains.',
    points: [
      'Tech & Development',
      'Media & Journalism',
      'Engineering & Design',
    ],
  },
  'pgc-career-launch-program': {
    title: 'PGC Career Launch Program',
    desc: 'Our flagship internship placement-assured course.',
    points: [
      'Guaranteed certificate + real work experience',
      'Get hired with stipend',
    ],
  },
  'certification-included-internships': {
    title: 'Certified Internships',
    desc: 'Internships bundled with skill certification.',
    points: [
      'Add credibility to your resume',
      'Certificate of Completion from PixelGenixEduTech',
    ],
  },
};

const InternshipDetails = () => {
  const { slug } = useParams();
  const data = internshipData[slug];

  if (!data) {
    return (
      <div className="p-8 text-red-600">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p>The internship category you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700">{data.title}</h1>
      <p className="mt-4 text-gray-700">{data.desc}</p>

      <ul className="mt-6 list-disc list-inside text-gray-800 space-y-2">
        {data.points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipDetails;
