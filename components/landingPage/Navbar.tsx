import React from "react";
import Netflix from "../../public/assets/LandingPage/netflixlanding.png";
import Language from "../../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import Image from "next/image";
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();

const handleSignInClick = ()=>{
  router.push("/SignIn")
}

  return (
    <div className="flex justify-between px-44 pt-[24px]">
      <div>
        <Image src={Netflix} alt="Netflix" />
      </div>
      <div className="flex gap-[24px] ">
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
        <div className="bg-red h-[32px] rounded font-medium text-white p-1 px-4">
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
