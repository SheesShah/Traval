import React from 'react';
import { FaUserFriends, FaSuitcaseRolling, FaSnowflake } from 'react-icons/fa';
import car1 from '../assets/car2.png';
import car2 from '../assets/car3.png';
import car3 from '../assets/car4.png';
import car4 from '../assets/car5.png';
import car5 from '../assets/car6.png';
import car6 from '../assets/car7.png';

const cars = [
  { id: 1, title: "SEDAN CAR CAMRY, SONATA", seats: 4, luggage: 3, image: car1 },
  { id: 2, title: "HUNDHAI H1", seats: 7, luggage: 7, image: car2 },
  { id: 3, title: "GMC YUKON XL", seats: 6, luggage: 7, image: car3 },
  { id: 4, title: "HIACE", seats: 10, luggage: 12, image: car4 },
  { id: 5, title: "INNOVA", seats: 7, luggage: 7, image: car5 },
  { id: 6, title: "BUS", seats: 50, luggage: 5, image: car6 },
];

const CarCard = ({ title, seats, luggage, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#" className="block overflow-hidden">
        <img
          src={image}
          className="rounded-t-lg w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00026e]">{title}</h5>
        </a>
        <ul className="space-y-2">
          <li className="flex items-center text-[#22292f] text-base font-normal leading-[20px]">
            <FaUserFriends className="text-[#00026e] mr-2" /> {seats} Person Seat Vehicle
          </li>
          <li className="flex items-center text-[#22292f] text-base font-normal leading-[20px]">
            <FaSuitcaseRolling className="text-[#00026e] mr-2" /> {luggage} Luggage
          </li>
          <li className="flex items-center text-[#22292f] text-base font-normal leading-[20px]">
            <FaSnowflake className="text-[#00026e] mr-2" /> AC Chilled Vehicle
          </li>
        </ul>
        <a
          href="#"
          className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#00026e] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Book Now
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const CarCollection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap justify-center gap-4">
      {cars.map(car => (
        <CarCard key={car.id} title={car.title} seats={car.seats} luggage={car.luggage} image={car.image} />
      ))}
    </div>
  );
};

export default CarCollection;
