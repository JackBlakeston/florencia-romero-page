import React from "react";

import { useIntl } from "react-intl";

const TitleSection = () => {
  const intl = useIntl();

  return (
    <div>
      {
        intl.formatMessage({
          id: "app.message"
        })
      }
    </div>
  )
}

export default TitleSection;