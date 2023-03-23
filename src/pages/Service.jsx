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
      title : "Web Development",
      firstText: "Performance, agility, and resilience are key to your transformation challenge if you are to enhance your ability to compete and create new markets. ",
      secondText: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security, Darecorp can help you to create more value throughout your entire organisation.",
      img: webDevImg
    },
    {
      title : "Design",
      firstText: "Performance, agility, and resilience are key to your transformation challenge if you are to enhance your ability to compete and create new markets. ",
      secondText: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security, Darecorp can help you to create more value throughout your entire organisation.",
      img: design
    },
    {
      title : "IT Consulting",
      firstText: "Performance, agility, and resilience are key to your transformation challenge if you are to enhance your ability to compete and create new markets. ",
      secondText: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security, Darecorp can help you to create more value throughout your entire organisation.",
      img: itConsulting
    },
    {
      title : "App Development",
      firstText: "Performance, agility, and resilience are key to your transformation challenge if you are to enhance your ability to compete and create new markets. ",
      secondText: "With a business and process-oriented range of services, from enterprise architecture and agility through to cyber security, Darecorp can help you to create more value throughout your entire organisation.",
      img: appDevelopment
    },

  ]

  return (
    <>
      <Navbar />
      <Banner img={bgService} title="Our Services" firstSentence="We provide services to build your digital presence" secondSentence="check out our services"/>
      <Transition bgColor="bg-slate-900" textColor="text-white" />
      {cardDetails && cardDetails.map((item, index) => (
        <Card key={index}
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