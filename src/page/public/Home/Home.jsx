import React from 'react'
import {Typography} from "@mui/material";
import Banner from '../Home/Banner';
import CourseCards from '../Home/CourseCard';
import Number from '../Home/Number';
import PopularShortTerms from '../Home/PopularShortTerms';
import OurClient from '../Home/OurClient';
import Placement from '../Home/Placement';


const Home = () => {
  return (
    <>
      
      <Banner  />
      <CourseCards />
      <Number />
      <PopularShortTerms />
      <OurClient />
      <Placement/>
    </>
  )
}

export default Home
