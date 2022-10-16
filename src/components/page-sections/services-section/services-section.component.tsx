import React from "react";
import { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (<div style={{ height: "50rem", backgroundColor: "lightsteelblue" }} ref={ref}></div>)
})

export default ServicesSection;