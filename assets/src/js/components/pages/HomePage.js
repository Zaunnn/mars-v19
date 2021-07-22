import React, { useState } from "react";
import { Navbar } from "../navbar/index";
import { HeroSection } from "../HeroSection/index";
import { InfoSection as Info } from "../Sect/index";
import { HomeObjOne, HomeObjTwo, HomeObjThree } from "../Sect/Data";
import { InfoSection } from "../InfoSection/index";
import { StartSection } from "../StartSection";
import {
  SectionOneProps,
  SectionTwoProps,
  SectionThreeProps,
} from "../StartSection/Props";
import FooterSection from "../FooterSection";
import { StorySection } from "../StorySection";
import { SectionOne, SectionTwo } from "../StorySection/Props";
import { Sidebar } from "../Sidebar";
export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };
  console.log(isOpen);
  return (
    <div>
      <Navbar isOpen={isOpen} handleClick={handleClick} />
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <HeroSection />
      <InfoSection />
      <StorySection {...SectionOne} />
      <StartSection {...SectionOneProps} />
      <StartSection {...SectionTwoProps} />
      <StartSection {...SectionThreeProps} />
      <StorySection {...SectionTwo} />
      <FooterSection />
    </div>
  );
};
