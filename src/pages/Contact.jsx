import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Navbar } from '../components/Navbar';
import bgContact from "../assets/bg_contact.png";
import { Footer } from '../components/Footer';
import ContactTransition from '../components/ContactTransition';
import ContactUs from '../components/ContactUs';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <Navbar />
      <Banner img={bgContact} title="Contact Us" firstSentence="Drop us a line and we will we get in touch" secondSentence="We are available for your demands." />
      <ContactTransition />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Contact