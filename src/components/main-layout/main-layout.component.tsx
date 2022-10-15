import React from "react";

import MainPage from "../main-page/main-page.component";
import Navbar from "../navbar/navbar.component";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  )
}

export default MainLayout;