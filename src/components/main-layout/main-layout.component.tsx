import React, { useRef } from 'react';

import classes from './main-layout.module.scss';

import Navbar from '../navbar/navbar.component';
import AboutMeSection from '../page-sections/about-me-section/about-me-section.component';
import ContactSection from '../page-sections/contact-section/contact-section.component';
import PortfolioSection from '../page-sections/portfolio-section/portfolio-section.component';
import ServicesSection from '../page-sections/services-section/services-section.component';
import TitleSection from '../page-sections/title-section/title-section.component';
import Footer from '../footer/footer.component';
import GoTopButton from '../go-top-button/go-top-button.component';

import useIsInViewport from '../../hooks/useIsInViewport';

import { SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';
import { HEADER_OFFSET } from '../../constants/constants';

const MainLayout = () => {
  const titleSectionRef = useRef<null | HTMLDivElement>(null);
  const servicesSectionRef = useRef<null | HTMLDivElement>(null);
  const portfolioSectionRef = useRef<null | HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<null | HTMLDivElement>(null);
  const contactSectionRef = useRef<null | HTMLDivElement>(null);

  const isTitleSectionInViewport = useIsInViewport(titleSectionRef);
  const isServicesSectionInViewport = useIsInViewport(servicesSectionRef);
  const isPortfolioSectionInViewport = useIsInViewport(portfolioSectionRef);
  const isAboutMeSectionInViewport = useIsInViewport(aboutMeSectionRef);
  const isContactSectionInViewport = useIsInViewport(contactSectionRef);

  let viewportStatus: ViewportStatusType = {
    [SECTIONS.TITLE]: isTitleSectionInViewport,
    [SECTIONS.SERVICES]: isServicesSectionInViewport,
    [SECTIONS.PORTFOLIO]: isPortfolioSectionInViewport,
    [SECTIONS.ABOUT_ME]: isAboutMeSectionInViewport,
    [SECTIONS.CONTACT]: isContactSectionInViewport,
  };

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
    const targetSection = thisSectionRef?.current;
    if (targetSection) {
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Navbar goToSection={goToSection} viewportStatus={viewportStatus} />
      <div className={classes.mainPageContainer}>
        <TitleSection ref={titleSectionRef} />
        <ServicesSection ref={servicesSectionRef} />
        <PortfolioSection ref={portfolioSectionRef} />
        <AboutMeSection ref={aboutMeSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </div>
      <Footer />
      <GoTopButton goToSection={goToSection} isVisible={!isTitleSectionInViewport} />
    </>
  );
};

export default MainLayout;
