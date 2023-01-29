import React from "react";
import ImageSection from "../image_section/ImageSection";
import InfoSection from "../info_section/InfoSection";
import Nav from "../nav/Nav";
import "./Header.css";
function Header() {
  return (
    <div id="home">
      <header>
        <InfoSection />
        <ImageSection />
        <Nav />
      </header>
    </div>
  );
}

export default Header;
