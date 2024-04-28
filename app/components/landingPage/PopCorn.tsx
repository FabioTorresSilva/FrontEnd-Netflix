import Image from "next/image";
import Netflix from "../../../public/assets/LandingPage/netflixlanding.png";
import Language from "../../../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../../../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import rightArrow from "../../../public/assets/LandingPage/rightArrowLanding.png";
import Gradient from "../../../public/assets/LandingPage/Gradient.png";
import blueRight from "../../../public/assets/LandingPage/blueRight.png";
import popCorn from "../../../public/assets/LandingPage/PopCorn.png";

const PopCorn = () => {
  return (
    <div className="bg-Gradient bg-no-repeat w-full h-[260px] pb-4 bg-cover items-center pt-[160px] drop-shadow-3xl shadow-3xl flex justify-center">
      <div className="flex justify-center h-[204px]  w-[1104px1] pt-4 gap-8">
        <div>
          <Image src={popCorn} alt="popcorn bucket" />
        </div>
        <div>
          <div className="text-white font-bold text-xl">
            The Netflix you love for just $6.99.
          </div>
          <div className="text-white">Get the Standard with ads plan.</div>
          <button className="text-blue-500 text-lg underline font-bold flex items-center">
            Learn More{" "}
            <div className="pl-3">
              <Image
                src={blueRight}
                className="text-center flex items-center"
                alt="blue arrow"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopCorn;
