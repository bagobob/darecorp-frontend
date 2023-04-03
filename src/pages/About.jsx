import React, { useEffect } from 'react';
import Banner from '../components/Banner'
import { Navbar } from '../components/Navbar';
import bgAbout from "../assets/img/bg_about.png"
import { Footer } from '../components/Footer';
import { Transition } from '../components/Transition';
import Accordeon from '../components/Accordeon';
import OurValue from '../components/OurValue';
import CtaSection from '../components/CtaSection';
import { accordionDetails } from '../data/accordionData';
import { useTranslation } from 'react-i18next';

const About = () => {

  useEffect(() => {
    document.title = "About Us";
  }, []);

  const { t } = useTranslation();
  
  return (
    <>
      <Navbar />
      <Banner img={bgAbout} title="about_title" firstSentence="about_firstSentence" secondSentence="about_secondSentence"/>
      <Transition bgColor="bg-slate-900" textColor="text-white" transition_content="transition_text_about" transition_title={'transition_title_other'} />
      <OurValue />
      {accordionDetails && accordionDetails.map((item, index) => (
        <Accordeon
          key={index}
          title={t(item.title)}
          img={item.img}
          acordion1={item.acordion1}
          acordion2={item.acordion2}
          acordion3={item.acordion3}
          order={index%2 !== 0 && "md:order-last"}

        />
      ))
      }
      <CtaSection />
      <Footer />
    </>
  )
}

export default About