import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./landingpage.css";
import Services from "./services";
import Aboutus from "./aboutus";
import ContactUs from "./contactus";
import Header from "./header";
import Carousel1 from "./carousel";
import Gallery from "./mainpage";


function Mainpage() {
  return (
    <>
      <Header />
      <Carousel1 />
      <Services />
      <Gallery /> 
      <Aboutus />
      <ContactUs />
    </>
  );
}

export default Mainpage;
