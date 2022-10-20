import React, { useRef } from 'react';

import classes from './main-layout.module.scss';

import Navbar from '../navbar/navbar.component';
import AboutMeSection from '../page-sections/about-me-section/about-me-section.component';
import ContactSection from '../page-sections/contact-section/contact-section.component';
import PortfolioSection from '../page-sections/portfolio-section/portfolio-section.component';
import ServicesSection from '../page-sections/services-section/services-section.component';
import TitleSection from '../page-sections/title-section/title-section.component';
import Footer from '../footer/footer.component';

import { SECTIONS } from '../../constants/enums';

const MainLayout = () => {
  const titleSectionRef = useRef<null | HTMLDivElement>(null);
  const servicesSectionRef = useRef<null | HTMLDivElement>(null);
  const portfolioSectionRef = useRef<null | HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<null | HTMLDivElement>(null);
  const contactSectionRef = useRef<null | HTMLDivElement>(null);

  const sectionRefs = {
    titleSectionRef,
    servicesSectionRef,
    portfolioSectionRef,
    aboutMeSectionRef,
    contactSectionRef,
  };

  const goToSection = (section: SECTIONS) => {
    const sectionRefName = `${section}SectionRef`;
    const thisSectionRef = sectionRefs[sectionRefName as keyof typeof sectionRefs];
    thisSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar goToSection={goToSection} />
      <div className={classes.mainPageContainer}>
        <TitleSection ref={titleSectionRef} />
        <ServicesSection ref={servicesSectionRef} />
        <PortfolioSection ref={portfolioSectionRef} />
        <AboutMeSection ref={aboutMeSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
