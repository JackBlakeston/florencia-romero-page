import React, { forwardRef } from 'react';

import classes from './services-section.module.scss';

import { SERVICES } from '../../../constants/enums';
import ServiceInfo from './service-info/service-info.component';

const ServicesSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const renderServices = () => {
    const serviceNames = Object.values(SERVICES);
    return serviceNames.map((service, index) => <ServiceInfo service={service} key={index} />);
  };

  return (
    <div ref={ref} className={classes.mainContainer}>
      <div>SERVICIOS</div>
      <div className={classes.servicesContainer}>{renderServices()}</div>
    </div>
  );
});

export default ServicesSection;
