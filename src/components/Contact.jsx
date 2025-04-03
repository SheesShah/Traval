import React, { useState } from 'react';
import ziyarat from '../assets/ziyarat.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    country: '',
    phone: '',
    passengers: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/maneddod', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message Sent Successfully!');
      setFormData({ full_name: '', country: '', phone: '', passengers: '' });
    } else {
      setStatus('Something went wrong. Try again.');
    }
  };

  return (
    <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4 mt-[100px] mb-[100px] contact-section'>
      <div className='bg-white shadow rounded-lg p-6 w-full flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'>Get in Touch</h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='full_name' className='block text-[#00026e] font-medium'>Full Name</label>
              <input 
                type='text' 
                id='full_name' 
                name='full_name' 
                value={formData.full_name}
                onChange={handleChange}
                placeholder='Enter your full name' 
                className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00026e] focus:outline-none'
                required
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label htmlFor='country' className='block text-[#00026e] font-medium'>Country</label>
                <select 
                  id='country' 
                  name='country' 
                  value={formData.country}
                  onChange={handleChange}
                  className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00026e] focus:outline-none'
                  required
                >
                  <option value=''>Select Country</option>
                  <option value='pakistan'>Pakistan</option>
                  <option value='india'>India</option>
                  <option value='usa'>USA</option>
                  <option value='uk'>UK</option>
                </select>
              </div>
              <div>
                <label htmlFor='phone' className='block text-[#00026e] font-medium'>Phone Number</label>
                <input 
                  type='tel' 
                  id='phone' 
                  name='phone' 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Enter your phone number' 
                  className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00026e] focus:outline-none'
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor='passengers' className='block text-[#00026e] font-medium'>Number of Passengers</label>
              <input 
                type='number' 
                id='passengers' 
                name='passengers' 
                value={formData.passengers}
                onChange={handleChange}
                min='1' 
                placeholder='Enter number of passengers' 
                className='w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00026e] focus:outline-none'
                required
              />
            </div>

            <button 
              type='submit' 
              className='w-full bg-[#00026e] text-white py-3 rounded-lg hover:bg-[#0001a5] transition duration-300'
            >
              Submit
            </button>
          </form>
          {status && <p className="text-center mt-4 text-green-600">{status}</p>}
        </div>

        <div className='w-full md:w-1/2 flex items-center justify-center hidden md:block'>
          <img 
            src={ziyarat} 
            alt='Ziyarat' 
            className='w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg' 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
  