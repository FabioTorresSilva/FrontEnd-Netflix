import React from "react";
import Language from "../../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import Image from "next/image";

const FooterLanding = () => {
  return (
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
  );
};
export default FooterLanding;
