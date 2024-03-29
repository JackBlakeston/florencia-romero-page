import React, { forwardRef } from 'react';

import { useIntl } from 'react-intl';

import classes from './services-section.module.scss';

import ServiceInfo from './service-info/service-info.component';

import { SERVICES } from '../../../constants/enums';

const ServicesSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const intl = useIntl();

  const renderServices = () => {
    const serviceNames = Object.values(SERVICES);
    return serviceNames.map((service, index) => <ServiceInfo service={service} key={index} />);
  };

  const title = intl.formatMessage({
    id: 'app.sections.services',
  });

  return (
    <div ref={ref} className={classes.mainContainer}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <div className={classes.sectionBodyContainer}>{renderServices()}</div>
    </div>
  );
});

export default ServicesSection;
