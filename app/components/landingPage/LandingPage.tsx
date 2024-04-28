import React from "react";
import Navbar from "./Navbar";
import Midlanding from "./MidLanding";
import fourthScreen from "../../../public/assets/fourthScreen.png";
import secondscreen from "../../../public/assets/secondscreen.png";
import thirdscreen from "../../../public/assets/thirdscreen.png";
import firstscreen from "../../../public/assets/firstscreen.png";
import plusQuestion from "../../../public/assets/plusQuestion.png";
import ImageLeft from "./ImageLeft";
import PopCorn from "./PopCorn";
import ImageRight from "./ImageRight";
import Image from "next/image";
import Language from "../../../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../../../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import rightArrow from "../../../public/assets/LandingPage/rightArrowLanding.png";
import FrequentlyAsked from "./FrequentlyAsked";
import FooterLanding from "./FooterLanding";

const LandingPage = () => {
  return (

      <div className="bg-landingPage bg-cover bg-fixed h-[700px] ">
        <Navbar />
        <Midlanding />
        <PopCorn/>
        <ImageRight
          text={
            "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          }
          title={"Enjoy on your TV"}
          image={fourthScreen}
        />
        <ImageLeft
          text={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          title={"Watch everywhere"}
          image={firstscreen}
        />
        <ImageRight
          text={
            "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
          }
          title={"Create profiles for kids"}
          image={secondscreen}
        />
        <ImageLeft
          text={"Watch on a plane, train, or submarine..."}
          title={"Download your shows to watch offline"}
          image={thirdscreen}
        />
        <FrequentlyAsked/>
        <FooterLanding/>
      </div>
  );
};

export default LandingPage;
