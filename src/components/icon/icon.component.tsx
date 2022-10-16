import React from 'react';

import classes from './icon.module.scss';

import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/mail.png';
import accessibility from '../../assets/icons/accessibility.png';
import audiovisual from '../../assets/icons/audiovisual.png';
import videogames from '../../assets/icons/videogames.png';
import gmail from '../../assets/icons/gmail.png';
import linkedin from '../../assets/icons/linkedin.png';
import software from '../../assets/icons/software.png';
import proz from '../../assets/icons/proz.png';
import revision from '../../assets/icons/revision.png';
import skype from '../../assets/icons/skype.png';
import text from '../../assets/icons/text.png';
import twitter from '../../assets/icons/twitter.png';

import { SERVICES } from '../../constants/enums';

type IconNameType =
  | 'phone'
  | 'mail'
  | 'accessibility'
  | 'audiovisual'
  | 'videogames'
  | 'gmail'
  | 'linkedin'
  | 'software'
  | 'proz'
  | 'revision'
  | 'skype'
  | 'text'
  | 'twitter';

type IconObjectType = {
  [key in IconNameType]: string;
};

const iconObject: IconObjectType = {
  phone,
  mail,
  accessibility,
  audiovisual,
  videogames,
  gmail,
  linkedin,
  software,
  proz,
  revision,
  skype,
  text,
  twitter,
};

type IconProps = {
  name: IconNameType | SERVICES;
};

const Icon = ({ name }: IconProps) => {
  const imgSource = iconObject[name as IconNameType];

  return <img src={imgSource} className={classes.icon} alt={name} />;
};

export default Icon;
