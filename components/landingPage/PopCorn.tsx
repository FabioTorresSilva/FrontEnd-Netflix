import Image from "next/image";
import blueRight from "../../public/assets/LandingPage/blueRight.png";
import popCorn from "../../public/assets/LandingPage/PopCorn.png";

const PopCorn = () => {
  return (
    <div className=" items-center  flex justify-center   pt-[100px] drop-shadow-3xl  shadow-3xl">
      <div className="bg-radial-gradient  w-[1292px] h-[144px] ">
        <div className="flex py-5 items-center  justify-center gap-8">
          <div className="">
            <Image src={popCorn} alt="popcorn bucket" />
          </div>
          <div className="">
            <div className="text-white font-bold  text-xl">
              The Netflix you love for just $6.99.
            </div>
            <div className="text-white ">Get the Standard with ads plan.</div>
            <button className=" text-blue-500 text-lg underline font-bold flex">
              Learn More{" "}
              <div className="items-center flex justify-center  pl-3">
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
    </div>
  );
};

export default PopCorn;
