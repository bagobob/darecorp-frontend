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
      img: webDevImg,
      id: "web"
    },
    {
      title : "design",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: design,
      id: "design"
    },
    {
      title : "it_consult",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: itConsulting,
      id: "it"
    },
    {
      title : "app_dev",
      firstText: "firstText_0",
      secondText: "secondText_0",
      img: appDevelopment,
      id: "app"
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
          id={item.id}
      />
      ))
      }
      {/* Développement web : conception d'applications web, conception de page web, conception de page vitrine, 
          Design : Conception de design system, conception de design UI/UX, conception de maquette UX/UI
          Conseils IT:  Marketing Digital et stratégie digitale, analyse du système informatique de l'entreprise,
          Développement d'applications :  application mobiles android/ios, application ERP
       */}
      
      <Footer />
    </>
  )
}

export default Service