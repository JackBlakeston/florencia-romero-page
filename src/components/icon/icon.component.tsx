import React from 'react';

import classes from './icon.module.scss';

import phone from '../../../public/icons/phone.png';
import mail from '../../../public/icons/mail.png';
import accessibility from '../../../public/icons/accessibility.png';
import audiovisual from '../../../public/icons/audiovisual.png';
import videogames from '../../../public/icons/videogames.png';
import gmail from '../../../public/icons/gmail.png';
import linkedin from '../../../public/icons/linkedin.png';
import software from '../../../public/icons/software.png';
import proz from '../../../public/icons/proz.png';
import revision from '../../../public/icons/revision.png';
import skype from '../../../public/icons/skype.png';
import text from '../../../public/icons/text.png';
import twitter from '../../../public/icons/twitter.png';
import skypeGreen from '../../../public/icons/skype-green.png';
import gmailGreen from '../../../public/icons/gmail-green.png';
import twitterGreen from '../../../public/icons/twitter-green.png';
import linkedinGreen from '../../../public/icons/linkedin-green.png';
import prozGreen from '../../../public/icons/proz-green.png';
import phoneDark from '../../../public/icons/phone-dark.png';
import mailDark from '../../../public/icons/mail-dark.png';

import { SERVICES } from '../../constants/enums';
import Image, { StaticImageData } from 'next/image';

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
  | 'twitter'
  | 'skypeGreen'
  | 'gmailGreen'
  | 'twitterGreen'
  | 'linkedinGreen'
  | 'prozGreen'
  | 'phoneDark'
  | 'mailDark';

type IconObjectType = {
  [key in IconNameType]: StaticImageData;
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
  skypeGreen,
  gmailGreen,
  twitterGreen,
  linkedinGreen,
  prozGreen,
  phoneDark,
  mailDark,
};

type IconProps = {
  name: IconNameType | SERVICES;
  className?: string;
};

const Icon = ({ name, className }: IconProps) => {
  const imgSource = iconObject[name as IconNameType];

  return <Image src={imgSource} className={`${classes.icon} ${classes[className as string]}`} alt={name} />;
};

export default Icon;
