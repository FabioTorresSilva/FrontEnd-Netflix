import Image from "next/image";
import Language from "../public/assets/LandingPage/Language-LandingPage.png";
import DownLanguage from "../public/assets/LandingPage/LanguageDownButton-LandingPage.png";
import NavbarSignIn from "@/components/signIn/NavbarSingIn";
import SignInCard from "@/components/signIn/SingInCard";
import SignInFooter from "@/components/signIn/SignInFooter";

export default function Home() {
  const users = [
    {
      name: "Jennifer",
      photo: "/assets/Users/redAvatar.png",
    },
    {
      name: "Bill",
      photo: "/assets/Users/blueAvatar.png",
    },
    {
      name: "Alise",
      photo: "/assets/Users/PurpleAvatar.png",
    },
    {
      name: "James",
      photo: "/assets/Users/YellowAvatar.png",
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#141414] flex justify-center items-center">
      <div className=" text-center">
        <div className="mb-8 text-3xl font-medium">Who's watching</div>
        <div className="flex justify-center items-center text-[#808080]">
          {users.map((user, index) => (
            <button className="mr-5" key={index}>
              <Image
                src={user.photo}
                alt={user.name}
                width={144}
                height={100}
              />
              <div  className="pt-2">{user.name}</div>
            </button>
          ))}
          <button className="">
            <Image
              src="/assets/Users/PlusAvatar.png"
              alt="Plus"
              width={144}
              height={100}
            />
            <div className="pt-2">Profile</div>
          </button>
        </div>
        <div className="flex justify-center  ">
          <button className="mt-14 border p-1 px-5 text-[#808080] border-[#808080]">Manage profiles</button>
        </div>
      </div>
    </div>
  );
}
