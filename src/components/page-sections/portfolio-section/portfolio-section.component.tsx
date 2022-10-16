import React, { forwardRef } from "react";

const PortfolioSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (<div ref={ref}></div>)
})

export default PortfolioSection;