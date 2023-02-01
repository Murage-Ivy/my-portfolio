import React from "react";
import ImageSection from "../image_section/ImageSection";
import InfoSection from "../info_section/InfoSection";
import "./Header.css";
function Header() {
  return (
    <div id="home">
      <header id="home">
        <InfoSection />
        <ImageSection />
      </header>
    </div>
  );
}

export default Header;
