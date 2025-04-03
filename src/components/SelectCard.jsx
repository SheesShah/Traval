import React from 'react';
import { FaMapMarkerAlt, FaUser, FaCar } from 'react-icons/fa'; // Icons Import

const SelectCard = () => {
  return (
    <div className='relative w-full'>
      <div className='absolute w-full flex justify-center'>
        <div className="max-w-screen-xl mx-auto p-6 py-10 bg-white rounded-2xl shadow-lg mt-[265px] w-[80%] select-card">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Book Now</h2>

          {/* Row Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* First Select Box with Location Icon (Right Side) */}
            <div className="flex-1 relative">
              <select className="mt-1 block w-full p-2 pr-10 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-0 appearance-none">
                <option value="">From</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00026e]" />
            </div>

            {/* Second Select Box with Location Icon (Right Side) */}
            <div className="flex-1 relative">
              <select className="mt-1 block w-full p-2 pr-10 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-0 appearance-none">
                <option value="">To</option>
                <option value="optionA">Option A</option>
                <option value="optionB">Option B</option>
              </select>
              <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00026e]" />
            </div>

            {/* Passenger Input with Icon (Right Side) */}
            <div className="flex-1 relative">
              <input type="text" placeholder="Enter a passenger" className="mt-1 block w-full p-2 pr-10 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-0" />
              <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00026e]" />
            </div>

            {/* Car Input with Icon (Right Side) */}
            <div className="flex-1 relative">
              <select className="mt-1 block w-full p-2 pr-10 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-0 appearance-none">
                <option value="">Car</option>
                <option value="optionA">SEDAN CAR CAMRY, SONATA</option>
                <option value="optionB">HUNDHAI H1</option>
                <option value="optionB">GMC YUKON XL</option>
                <option value="optionB">HIACE</option>
                <option value="optionB">INNOVA</option> 
                <option value="optionB">BUS</option> 
              </select>
              <FaCar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00026e]" />
            </div>

            {/* Date Picker */}
            <div className="flex-1">
              <input type="date" className="mt-1 block w-full p-2 border-none bg-gray-100 rounded-md focus:outline-none focus:ring-0" />
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center relative mt-4">
            <button
              type="button"
              className="font-medium text-white bg-[#00026e] hover:bg-[#00026e] hover:text-white focus:ring-4 focus:ring-[#00026e] rounded-lg text-[18px] px-15 py-3.5 absolute top-[10px]">
              Submit
            </button>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
