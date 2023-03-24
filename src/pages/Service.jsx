import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Navbar } from '../components/Navbar';
import bgService from "../assets/bg_service.png";
import { Footer } from '../components/Footer';
import { Transition } from '../components/Transition';
import Card from '../components/Card';
import webDevImg from "../assets/web_dev.png";
import design from "../assets/design.png";
import itConsulting from "../assets/it_consulting.png";
import appDevelopment from "../assets/app_development.png";


const Service = () => {

  useEffect(() => {
    document.title = "Our Services";
  }, []);

  const cardDetails = [
    {
      title : "web_dev",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: webDevImg
    },
    {
      title : "design",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: design
    },
    {
      title : "it_consult",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: itConsulting
    },
    {
      titleKey : "app_dev",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: appDevelopment
    },

  ]

  return (
    <>
      <Navbar />
      <Banner img={bgService} title="service_title" firstSentence="service_firstSentence" secondSentence="service_secondSentence"/>
      <Transition bgColor="bg-slate-900" textColor="text-white" />
      {cardDetails && cardDetails.map((item, index) => (
        <Card 
          key={index}
          title={item.title}
          firstText={item.firstText}
          secondText={item.secondText}
          img={item.img}
          order={index%2 !== 0 && "md:order-last"}
      />
      ))
      }
      
      <Footer />
    </>
  )
}

export default Service