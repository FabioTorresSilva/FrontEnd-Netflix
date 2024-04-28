import React from "react";
import rightArrow from "../../../public/assets/LandingPage/rightArrowLanding.png";
import plusQuestion from "../../../public/assets/plusQuestion.png";
import Image from "next/image";

const FrequentlyAsked = () => {
  return (
    
    <div className="py-20 flex flex-col text-center items-center align-middle border-b-8 border-[#222121] ">
    <div className="text-4xl font-extrabold text-white flex justify-center items-center pb-8">
      Frequently Asked Questions
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">What is Netflix?</div>
      <Image src={plusQuestion} alt="plus" />
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">How much does netflix cost?</div>
      <Image src={plusQuestion} alt="plus" />
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">Where can I watch?</div>
      <Image src={plusQuestion} alt="plus" />
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">How do I cancel?</div>
      <Image src={plusQuestion} alt="plus" />
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">What can I watch on Netflix?</div>
      <Image src={plusQuestion} alt="plus" />
    </div>
    <div className="bg-[#2A2A2A] flex text-center items-center align-middle w-[1104px] justify-between p-5 px-5 mb-3">
      <div className="text-white text-xl">Is Netflix good for kids?</div>
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
  );
};
export default FrequentlyAsked;
