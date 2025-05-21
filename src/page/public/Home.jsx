import React from 'react'
import {Typography} from "@mui/material";
import Banner from './Banner';
import CourseCards from './CourseCard';
import Number from './Number';
import PopularShortTerms from './PopularShortTerms';
import OurClient from './OurClient';

const Home = () => {
  return (
    <>
      <Typography mt={10} variant='h4'></Typography>
      <Banner  />
      <CourseCards />
      <Number />
      <PopularShortTerms />
      <OurClient />
    </>
  )
}

export default Home
