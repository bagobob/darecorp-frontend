import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Navbar } from '../components/Navbar';
import bgContact from "../assets/img/bg_contact.png";
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
      <Banner img={bgContact} title="contact_title" firstSentence="contact_firstSentence" secondSentence="contact_secondSentence" />
      <ContactTransition />
      <ContactUs />
      {/* FAQs */}
      <Footer />
    </>
  )
}

export default Contact