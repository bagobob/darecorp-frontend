import React, { useEffect } from 'react';
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar';
import bgAbout from "../assets/bg_about.png"
import { Platform } from '../components/Platform';
import { Footer } from '../components/Footer';
import { Transition } from '../components/Transition';
import Accordeon from '../components/Accordeon';

const About = () => {

  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <Navbar />
      <Banner img={bgAbout} title="About Us" firstSentence="Lead the technological transformation that excites" secondSentence="we believe in the power of technology"/>
      <Transition bgColor="bg-slate-900" textColor="text-white" />
      <Platform />
      <Accordeon />
      <Footer />
    </>
  )
}

export default About