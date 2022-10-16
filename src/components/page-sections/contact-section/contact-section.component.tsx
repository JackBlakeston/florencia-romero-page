import React, { forwardRef } from "react";

const ContactSection = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (<div style={{ height: "50rem", backgroundColor: "green" }} ref={ref}></div>)
})

export default ContactSection;