import React from "react";
import rightArrow from "../../../public/assets/LandingPage/rightArrowLanding.png";
import Image from "next/image";

const Midlanding = () => {
  return (
    <div className="items-center align-middle justify-center flex-col flex text-white gap-[22px] pt-[240px]">
        <div className="text-5xl text-white font-extrabold ">
          Unlimited movies, TV shows, and more
        </div>
        <div className="text-xl">Watch anywhere.Cancel anytime.</div>
        <div className="text-l">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="flex gap-2">
          <input
            className="w-[368px] font-bold border border-gray-400 text-sm rounded p-2 px-4 text-white bg-transparent"
            placeholder="Email address"
          ></input>
          <button className="font-bold rounded text-xl items-center p-2 pl-4 flex bg-red">
            Get Started{" "}
            <div className="items-center flex p-2 pl-3">
              <Image src={rightArrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
  );
};
export default Midlanding;
