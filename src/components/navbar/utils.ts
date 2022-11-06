import { IntlShape } from 'react-intl';
import { SECTIONS } from '../../constants/enums';
import { ViewportStatusType } from '../../types';

export const formatSectionName = (intl: IntlShape, section: SECTIONS) => {
  return intl
    .formatMessage({
      id: `app.sections.${section}`,
    })
    .toUpperCase();
};

export const getCurrentViewedSection = (viewportStatus: ViewportStatusType) => {
  const currentViewedSectionKeyValue = Object.entries(viewportStatus).find((sectionStatus) => {
    return sectionStatus[1] === true;
  });
  return currentViewedSectionKeyValue ? currentViewedSectionKeyValue[0] : SECTIONS.TITLE;
};
