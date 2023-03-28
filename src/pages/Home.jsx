import React from 'react';
import {Transition } from '../components/Transition';
import { Footer } from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Service } from '../components/Service';
import HowItWork from '../components/HowItWork';
import AskDevis from '../components/AskDevis';


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Transition useCard />
      <Service />
      <HowItWork />
      <AskDevis />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home