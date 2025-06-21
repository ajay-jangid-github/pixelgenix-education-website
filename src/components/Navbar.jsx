// import React from 'react';
// import { FaChevronDown } from 'react-icons/fa';
// import { Link } from 'react-router-dom'; // ✅ Step added

// const menuItems = [
//   { name: 'Home', path: '/' },
//   {
//     name: 'Courses',
//     dropdown: [
//       'Web & App Development',
//       'Python Programming',
//       'Digital Marketing Essentials',
//       'Machine Learning Basics',
//       'Advanced Excel Pro',
//       'AutoCAD for Beginners',
//       'Fundamentals of C/C++',
//       'View All Courses →',
//       'Placement Courses',
//       '- Full Stack Dev Bootcamp',
//       '- UI/UX Design Program',
//       '- Product Management Mastery',
//       '- HR Management Course',
//     ],
//   },
//   {
//     name: 'Internships',
//     dropdown: [
//       'Remote Opportunities',
//       'Popular Profiles',
//       'Top Internship Categories',
//       'Explore Internship Fields',
//       'PGC: Career Launch Program',
//       'Certification Included Internships',
//     ],
//   },
//   {
//     name: 'Jobs',
//     dropdown: [
//       'Top Hiring Locations',
//       'Popular Job Categories',
//       'Explore New Job Fields',
//       'Career Guarantee Jobs',
//       'By Job Category',
//       'By Region',
//       'By Role',
//       'By Skillset',
//     ],
//   },
//   { name: 'About Us', path: '/about' },
//   { name: 'Contact', path: '/contact' },
// ];

// const Navbar = () => {
//   return (
//     <nav className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white sticky top-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="text-2xl font-extrabold">
//             PixelGenix<span className="text-yellow-400">EduTech</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {menuItems.map((item, index) =>
//               item.dropdown ? (
//                 <div key={index} className="relative group">
//                   <div className="flex items-center gap-1 hover:text-yellow-300 transition font-medium cursor-pointer">
//                     {item.name}
//                     <FaChevronDown className="text-sm mt-0.5" />
//                   </div>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
//                     <div className="py-2">
//                       {item.dropdown.map((option, i) => {
//                         const isHeading = option.startsWith('-');
//                         const isViewAll = option.includes('→');
//                         return (
//                           <Link
//                             key={i}
//                             to={`/courses/${option
//                               .replace(/[^a-zA-Z ]/g, '')
//                               .replace(/\s+/g, '-')
//                               .toLowerCase()}`}
//                             className={`block px-4 py-2 text-sm transition ${
//                               isHeading
//                                 ? 'font-semibold text-indigo-600 border-t border-gray-200 mt-1 pt-2'
//                                 : isViewAll
//                                 ? 'text-blue-500 font-medium'
//                                 : 'hover:bg-gray-100 hover:text-blue-600'
//                             }`}
//                           >
//                             {option.replace('-', '').trim()}
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className="hover:text-yellow-300 transition font-medium"
//                 >
//                   {item.name}
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Courses',
    path: '/courses',
    dropdown: [
      'Web & App Development',
      'Python Programming',
      'Digital Marketing Essentials',
      'Machine Learning Basics',
      'Advanced Excel Pro',
      'AutoCAD for Beginners',
      'Fundamentals of C/C++',
      'Placement Courses',
    ],
  },
  {
    name: 'Internships',
    path: '/internships',
    dropdown: [
      'Remote Opportunities',
      'Popular Profiles',
      'Top Internship Categories',
      'PGC: Career Launch Program',
      'Certification Included Internships',
    ],
  },
  {
    name: 'Jobs',
    path: '/jobs',
    dropdown: [
      'Top Hiring Locations',
      'Popular Job Categories',
      'Explore New Job Fields',
      'Career Guarantee Jobs',
    ],
  },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-extrabold">
            PixelGenix<span className="text-yellow-400">EduTech</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {/* add on later */}
            {/* <Link to="/add" className="text-white hover:underline">Add New</Link> */}
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className="flex items-center gap-1 hover:text-yellow-300 transition font-medium"
                >
                  {item.name}
                  {item.dropdown && <FaChevronDown className="text-sm mt-0.5" />}
                </Link>

                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((option, i) => (
                        <Link
                          key={i}
                          to={`${item.path}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 transition"
                        >
                          {option}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
