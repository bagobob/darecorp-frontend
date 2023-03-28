import React from 'react'
import DevisComponent from '../components/DevisComponent'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import DetailServicesHero from '../components/DetailServiceHero'

const Devis = () => {
  return (
    <>
        <Navbar />
        <DetailServicesHero title="Obtenir Un Devis" />
        <DevisComponent />
        <Footer />
    </>
  
  )
}

export default Devis