import React from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaHome, 
  FaInfoCircle, 
  FaBus, 
  FaGift, 
  FaBlog,
  FaMapMarkerAlt,
  FaRoute
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#00026e] text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* About Us */}
        <div>
          <h2 className='text-xl font-bold mb-4 pb-2'>About Us</h2>
          <p className='text-sm leading-relaxed'>
            At Hujjaj Travels, we feel blessed to deliver premium quality rides throughout Saudi Arabia, 
            including Makkah, Madinah, Jeddah, Taif, Riyadh, Dammam, Tabuk and its surrounding areas.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className='text-xl font-bold mb-4 pb-2'>Menu</h2>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
              Home
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
              About
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
               Transport
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
             Packages
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
             Blogs
            </li>
          </ul>
        </div>

        {/* Popular Routes */}
        <div>
          <h2 className='text-xl font-bold mb-4 pb-2'>Popular Routes</h2>
          <ul className='space-y-3'>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
              Makkah to Madinah
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
              Jeddah Airport to Makkah
            </li>
            <li className='flex items-center gap-3 hover:text-blue-200 cursor-pointer transition-colors'>
               Ziyarat
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className='text-xl font-bold mb-4 pb-2'>Contact Info</h2>
          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <FaEnvelope className='text-white mt-1' />
              <a 
                href="mailto:info@hujjajtravels.com" 
                className='hover:text-blue-200 transition-colors'
              >
                info@hujjajtravels.com
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-white' />
              <a 
                href="tel:+966565310621" 
                className='hover:text-blue-200 transition-colors'
              >
                +966 56 531 0621
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='bg-[#00026e] py-4 border-t'>
        <div className='max-w-7xl mx-auto px-4 text-center text-sm'>
          <p>Copyright © {new Date().getFullYear()} Hujjaj Travels - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;