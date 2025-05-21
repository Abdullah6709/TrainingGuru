import React from 'react'
import AppBar from '../../components/AppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../page/Footer'

const PublicRoutes = () => {
  return (
    <>
      <AppBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PublicRoutes
