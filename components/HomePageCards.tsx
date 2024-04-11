import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  desp: string;
  className: string;
  handleClick: () => void;
}

const HomePageCards = ({
  img,
  title,
  desp,
  handleClick,
  className,
}: HomeCardProps) => {
  return (
    <div
      className={`${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-2xl cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center size-12 rounded-lg bg-gray-200 bg-opacity-40">
        <Image src={img} width={27} height={27} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{desp}</p>
      </div>
    </div>
  );
};

export default HomePageCards;
