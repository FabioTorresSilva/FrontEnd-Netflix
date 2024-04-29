import Image from "next/image";
import Language from "../../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../../public/assets/LandingPage/LanguageDownButton-LandingPage.png";

const SignInFooter = () => {
    return(
    <div className="bg-black bg-opacity-60 pl-44 pr-52 py-16 mt-12 ">
    <div className="flex flex-col text-gray-400">
      <div>
        Questions? <span className="underline">Call 1-844-505.2993</span>
      </div>
      <div className="flex gap-10 w-full justify-between underline pt-4 text-sm">
        <div className="">
          <div className="pb-2">Faq</div>
          <div className="pb-2">Privacy</div>
        </div>
        <div>
          <div className="pb-2">Help Center</div>
          <div className="pb-2">Cookies Preferences</div>
        </div>
        <div>
          <div className="pb-2">Neflix Shop</div>
          <div className="pb-2">Corporate Information </div>
        </div>
        <div className="max-w-[257px]">
          <div className="pb-2">Terms of use</div>
          <div className="pb-2">
            Do Not Sell or Share My Personal Information
          </div>
        </div>
      </div>
      <div className="py-5">Ad Choices</div>
      <div className="flex justify-around border-gray-400 border rounded w-[131px] h-[32px] items-center mt-2">
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
  </div>)
};
export default SignInFooter;
