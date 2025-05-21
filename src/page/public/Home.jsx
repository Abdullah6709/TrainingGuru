import React from 'react'
import {Typography} from "@mui/material";
import Banner from './Banner';
import CourseCards from './CourseCard';
import Number from './Number';
import PopularShortTerms from './PopularShortTerms';
import OurClient from './OurClient';
import Placement from './Placement';

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
