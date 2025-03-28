import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";

import "../customcss/landingpage.css";
import Services from "./services";
import Aboutus from "./aboutus";
import ContactUs from "./contactus";
import Header from "./header";
import Carousel1 from "./carousel1";
import Gallery from "./mainpage";

function Mainpage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setShowLogin(true)} />
      <Carousel1 />
      <Services />
      <Gallery />
      <Aboutus />
      <ContactUs />
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Mainpage;



































































































