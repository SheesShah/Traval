import React from 'react';
import car from '../assets/car1.png';

const About = () => {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4 mt-[200px] about-section">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-[#000265] text-[1.714286rem] font-semibold leading-[30px]">
          Welcome to Hujjaj Travels
        </h1>
        <p className="text-[#22292f] text-base font-normal leading-[20px] mt-[20px]">
          At Hujjaj Travels, we feel blessed to deliver premium quality rides throughout Saudi Arabia, including Makkah, the holiest city, Madinah, Jeddah, Taif, Riyadh, Dammam, Tabuq, and its surrounding areas. Whether you need a reliable Taxi Makkah service or require transportation in any other city, we take pride in our unique blend of experienced drivers and well-maintained vehicles that will meet all of your transportation needs safely and on time. Our dedicated and experienced drivers stand ready to assist you in your holy journey, ensuring a comfortable and peaceful travel experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img src={car} alt="car1" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default About;
