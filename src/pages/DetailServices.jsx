import React, { useEffect, useState } from 'react'
import CtaSection from '../components/CtaSection'
import DetailServicesHero from '../components/DetailServiceHero'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Outlet, useLocation, } from 'react-router-dom';
import { serviceHeroData } from '../data/detailServiceHeroData'

const DetailServices = () => {

    const [titleText, setTitleText] = useState("");

    // We get pathname to have the different links corresponding at 
    // the service page link
    let { pathname } = useLocation();
    let links = pathname.split('/');

    // we find in an array if term is present in the array
    // and then return the array if it's the case
    const findTerm = (term) => {
        if (links.includes(term)) {
            return links;
        }
    }

    // we switch in the array and for each value corresponding at
    // the present page, we set the title 
    const setDetails = () => {
        switch (links) {
            case findTerm('web_development'):
                setTitleText(serviceHeroData['web_development'].title)
                break;
            case findTerm('design'):
                setTitleText(serviceHeroData['design'].title)
                break;
            case findTerm('it_consult'):
                setTitleText(serviceHeroData['it_consult'].title)
                break;
            case findTerm('app_development'):
                setTitleText(serviceHeroData['app_development'].title)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setDetails();
    })
    return (
        <>
            <Navbar />
            <DetailServicesHero title={titleText} linkStats/>
            <Outlet />
            <CtaSection />
            <Footer />
        </>
    )
}

export default DetailServices