import Image from "next/image";
import Language from "../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import NavbarSignIn from "@/components/signIn/NavbarSingIn";
import SignInCard from "@/components/signIn/SingInCard";
import SignInFooter from "@/components/signIn/SignInFooter";

export default function Home() {
  return (
    <>
      <div className="bg-signIn  bg-cover ">
        <NavbarSignIn />
        <SignInCard/>
        <SignInFooter/>

      </div>
    </>
  );
}
