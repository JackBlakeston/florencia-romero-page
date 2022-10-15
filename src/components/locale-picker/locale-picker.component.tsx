import React, { useContext } from "react";

import { LocaleContext } from "../../context/locale-context";

const LocalePicker = () => {
  const { setLocale } = useContext(LocaleContext);

  const handleEnglishClick = () => {
    setLocale("en");
  }

  const handleSpanishClick = () => {
    setLocale("es");
  }

  return (
    <div>
      <span onClick={handleEnglishClick}>
        EN
      </span>
      <span onClick={handleSpanishClick}>
        ES
      </span>
    </div>
  )
}

export default LocalePicker;