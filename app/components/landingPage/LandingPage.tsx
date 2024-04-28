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

const LandingPage = () => {
  return (
    <>
      <div className="bg-landingPage bg-no-repeat bg-cover bg-center bg-fixed h-[800px] ">
        <Navbar />
        <Midlanding />
        <PopCorn />
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
        <div className="py-20 flex flex-col text-center items-center align-middle border-b-8 border-[#222121] ">
          <div className="text-4xl font-extrabold text-white flex justify-center items-center pb-8">
            Frequently Asked Questions
          </div>

          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>
          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>
          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>
          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>
          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>
          <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
            <div className="text-white text-xl">What is Netflix?</div>
            <Image src={plusQuestion} alt="plus" />
          </div>

          <div className="text-xl text-white pt-8 pb-4 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex gap-2">
            <input
              className="w-[368px] font-bold border border-gray-400 text-sm rounded p-2 px-4 text-white bg-transparent"
              placeholder="Email address"
            ></input>
            <button className="font-bold rounded text-white text-xl items-center p-2 pl-4 flex bg-red">
              Get Started{" "}
              <div className="items-center flex p-2 pl-3">
                <Image src={rightArrow} alt="arrow" />
              </div>
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="py-20 text-[#B3B3B3] flex justify-center text-sm">
          <div className="w-[1104px]  ">
            <div className="flex pb-4">
              Questions? Call <div className="underline">1-844-505-2993</div>
            </div>
            <div className="underline flex justify-between gap-10">
              <div className="w-[267px]">
                <div className="pb-2">FAQ</div>
                <div className="pb-2">Investor Relations</div>
                <div className="pb-2">Buy Gift Cards</div>
                <div className="pb-2">Cookie Preferences</div>
                <div className="pb-2">Legal Notices</div>
              </div>
              <div className="w-[267px]">
                <div className="pb-2">Help Center</div>
                <div className="pb-2">Jobs</div>
                <div className="pb-2">Ways to Watch</div>
                <div className="pb-2">Corporate Information</div>
                <div className="pb-2">Only on Netflix</div>
              </div>
              <div className="w-[267px]">
                <div className="pb-2">Account </div>
                <div className="pb-2">Netflix Shop</div>
                <div className="pb-2">Terms of use</div>
                <div className="pb-2">Contact us</div>
                <div className="pb-2">
                  Do not Sell or Share personal Information
                </div>
              </div>
              <div className="w-[267px]">
                <div className="pb-2">Media Center</div>
                <div className="pb-2">Redeem Gift Cards</div>
                <div className="pb-2">Privacy</div>
                <div className="pb-2">Speed Test</div>
                <div className="pb-2">Ad Choices</div>
              </div>
            </div>
            <div className="flex justify-around border-gray-400 border rounded w-[131px] h-[32px] items-center ">
              <div>
                <Image src={Language} alt="language" />
              </div>
              <select className="font-medium text-[12px] bg-transparent text-white select-none appearance-none">
                <option>English</option>
              </select>
              <div className="p-1">
                <Image src={DownLanguage} alt="downarrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
