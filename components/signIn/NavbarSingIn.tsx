import Image from "next/image";
import Netflix from "../../public/assets/LandingPage/netflixlanding.png";

const NavbarSignIn = () => {
 
  return (
    <div className="px-44 pt-[24px] pb-6">
          <Image src={Netflix} alt="Netflix" />
        </div>
  );
};
export default NavbarSignIn;
