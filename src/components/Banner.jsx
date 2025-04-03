import React from 'react'
import  banner_background from "../assets/banner_bg.jpg";
import Header from './Header';
import SelectCard from './SelectCard';
const Banner = () => {
  return (
    <>
   <div className='banner-bg-main-pic'>
    <Header/>
    <SelectCard/>
    </div>
    </>
  )
}

export default Banner
