import React, { useEffect } from 'react';
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar';
import bgAbout from "../assets/bg_about.png"
import { Footer } from '../components/Footer';
import { Transition } from '../components/Transition';
import Accordeon from '../components/Accordeon';
import weAre from "../assets/and_then.png";
import ourGoal from "../assets/what_can_we.png";
import growth from "../assets/who_we_are.png";
import OurValue from '../components/OurValue';

const About = () => {

  useEffect(() => {
    document.title = "About Us";
  }, []);

  const accordionDetails = [
    {
      title : "Who we are",
      acordion1: {
        title: "men & women",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion2: {
        title: "technologist enthusiast",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion3: {
        title: "focus and motivated",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      img: weAre
    },
    {
      title : "Our Goal",
      acordion1: {
        title: "business growth",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion2: {
        title: "digitalization",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion3: {
        title: "capitalization",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      img: ourGoal
    },
    {
      title : "Build Together",
      acordion1: {
        title: "technology of tomorrow",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion2: {
        title: "society of tomorrow",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      acordion3: {
        title: "the future",
        content: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security"
      },
      img: growth
    },


  ]

  return (
    <>
      <Navbar />
      <Banner img={bgAbout} title="about_title" firstSentence="about_firstSentence" secondSentence="about_secondSentence"/>
      <Transition bgColor="bg-slate-900" textColor="text-white" />
      <OurValue />
      {accordionDetails && accordionDetails.map((item, index) => (
        <Accordeon
          key={index}
          title={item.title}
          img={item.img}
          acordion1={item.acordion1}
          acordion2={item.acordion2}
          acordion3={item.acordion3}
          order={index%2 !== 0 && "md:order-last"}

        />
      ))

      }
      
      <Footer />
    </>
  )
}

export default About