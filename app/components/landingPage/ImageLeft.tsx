import Image from "next/image";

const ImageLeft = ({ text, title, image }: any) => {
  return (
    <div className="text-white border-b-8 border-[#222121] pt-20 flex pb-20 justify-center ">
      <Image src={image} alt="film" />
      <div className="w-[560px] flex flex-col  justify-center">
        <div className="">
          <div className="flex text-4xl font-bold ">{title}</div>
          <div className="flex pt-2">
            <div className="flex  text-2xl">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;
