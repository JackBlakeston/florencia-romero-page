import React from 'react';

import { useIntl } from 'react-intl';

import classes from './service-info.module.scss';

import { SERVICES } from '../../../../constants/enums';
import Icon from '../../../icon/icon.component';

type ServiceInfoProps = {
  service: SERVICES;
};

const ServiceInfo = ({ service }: ServiceInfoProps) => {
  const intl = useIntl();

  const title = intl.formatMessage({
    id: `app.sections.services.${service}.title`,
  });

  const body = intl.formatMessage({
    id: `app.sections.services.${service}.body`,
  });

  return (
    <div className={classes.mainContainer}>
      <Icon name={service} />
      <span className={classes.title}>{title}</span>
      <span className={classes.bodyText}>{body}</span>
    </div>
  );
};

export default ServiceInfo;
