import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1b1f32] text-white pt-14 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
        {/* Logo + About */}
        <div className="col-span-2 sm:col-span-1">
          <h2 className="text-xl font-bold text-[#00d1ff] mb-3">PixelGenixEduTech</h2>
          <p className="text-gray-400 mb-2">
            Bridging students and companies through learning and opportunity.
          </p>
          <p className="text-gray-500 text-xs mt-4">© 2025 PixelGenixEduTech Pvt. Ltd.</p>
        </div>

        {/* Internships by Location */}
        <div>
          <h4 className="font-semibold text-[#00d1ff] mb-2">Internships by Places</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="#">Delhi</Link></li>
            <li><Link to="#">Bangalore</Link></li>
            <li><Link to="#">Hyderabad</Link></li>
            <li><Link to="#">Mumbai</Link></li>
            <li><Link to="#">Virtual Internship</Link></li>
          </ul>
        </div>

        {/* Internships by Stream */}
        <div>
          <h4 className="font-semibold text-[#00d1ff] mb-2">Internships by Stream</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="#">Computer Science</Link></li>
            <li><Link to="#">Marketing</Link></li>
            <li><Link to="#">Finance</Link></li>
            <li><Link to="#">Civil</Link></li>
            <li><Link to="#">Electronics</Link></li>
          </ul>
        </div>

        {/* Jobs by Stream */}
        <div>
          <h4 className="font-semibold text-[#00d1ff] mb-2">Jobs by Category</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="#">Web Development</Link></li>
            <li><Link to="#">Content Writing</Link></li>
            <li><Link to="#">Graphic Design</Link></li>
            <li><Link to="#">Data Science</Link></li>
            <li><Link to="#">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <h4 className="font-semibold text-[#00d1ff] mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#">Resume Maker</Link></li>
            <li><Link to="#">Post a Job</Link></li>
            <li><Link to="#">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        Crafted with 💙 by Team PixelGenixEduTech | Jaipur, India
      </div>
    </footer>
  );
};

export default Footer;
