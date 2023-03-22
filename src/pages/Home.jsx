import React from 'react';
import {Transition } from '../components/Transition';
import { Footer } from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Platform } from '../components/Platform';
import { Pricing } from '../components/Pricing';
import { Service } from '../components/Service';


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transition useCard />
      <Service />
      <Platform />
      <Pricing />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home