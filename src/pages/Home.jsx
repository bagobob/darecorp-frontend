import React from 'react';
import {Transition } from '../components/Transition';
import { Footer } from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Platform } from '../components/Platform';
import { Service } from '../components/Service';


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transition useCard />
      {/* 
      The Unique Selling Proposition
      The Hero Section
      The Benefits of our website
      Social Proof
      A Call To Action
        Features
        How It Works
        Testimonials
        Team Section
        FAQs
        Resources Section
      */}
      <Service />
      <Platform />
      
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home