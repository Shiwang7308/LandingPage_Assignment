import React from 'react'

import './App.css'

import AnnouncementBar from './assets/components/AnnouncementBar'
import Navbar from './assets/components/Navbar'
import HeroSection from './assets/components/HeroSection'
import LogoCloud from './assets/components/LogoCloud'
import Feature1 from './assets/components/Feature1'
import Feature2 from './assets/components/Feature2'
import Component1 from './assets/components/Component1'
import Testimonial from './assets/components/Testimonial'
import CallToAction from './assets/components/CallToAction'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <Feature1 />
      <Feature2 /> 
      <Component1 />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
