import React from "react";

import classes from "./icon.module.scss";

import phone from "../../assets/icons/phone.png";
import mail from "../../assets/icons/mail.png";
import accessibility from "../../assets/icons/accessibility.png";
import audiovisual from "../../assets/icons/audiovisual.png";
import games from "../../assets/icons/games.png";
import gmail from "../../assets/icons/gmail.png";
import linkedin from "../../assets/icons/linkedin.png";
import localization from "../../assets/icons/localization.png";
import proz from "../../assets/icons/proz.png";
import revision from "../../assets/icons/revision.png";
import skype from "../../assets/icons/skype.png";
import translation from "../../assets/icons/translation.png";
import twitter from "../../assets/icons/twitter.png";

type IconNameType = "phone" | "mail" | "accessibility" | "audiovisual" | "games" | "gmail" | "linkedin" | "localization" | "proz" | "revision" | "skype" | "translation" | "twitter";

type IconObjectType = {
  [key in IconNameType]: string;
}

const iconObject: IconObjectType = {
  phone,
  mail,
  accessibility,
  audiovisual,
  games,
  gmail,
  linkedin,
  localization,
  proz,
  revision,
  skype,
  translation,
  twitter,
}

type IconProps = {
  name: IconNameType,
}

const Icon = ({ name }: IconProps) => {
  const imgSource = iconObject[name]

  return (
    <img src={imgSource} className={classes.icon} alt={name} />
  )
}

export default Icon;