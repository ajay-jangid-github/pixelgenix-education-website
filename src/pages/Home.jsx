import React from 'react';
import Hero from '../components/Hero';
import Courses from './Courses';
import Internships from './Internships';
import UpdateCourse from './UpdateCourse';
import Testimonials from '../components/Testimonials';
import TrendingNow from '../components/TrendingNow';
import PlacementSuccess from '../components/PlacementSuccess';
import JobDiscovery from '../components/JobDiscovery';
import InternshipDiscovery from '../components/InternshipDiscovery';
import PlacementCourses from '../components/PlacementCourses';

const Home = () => {
  return (
   <>
    {/* <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to PixelGenixEduTech</h1>
      <p className="mt-4 text-gray-700">This is the Home page content.</p>
    </div> */}
    <Hero />
    {/* <Courses /> */}
    {/* <UpdateCourse /> */}
    {/* <TrendingNow /> */}
    <Testimonials />
    <PlacementSuccess />
    <JobDiscovery />
    <InternshipDiscovery />
    <PlacementCourses />
    

   </>
  );
};

export default Home;
