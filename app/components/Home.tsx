"use client";
import Image from "next/image";
import { leftImg, rightImg, centerImg } from "@/utils/data";

const Home1 = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mx-12" data-scroll-container>
      <div className="flex justify-center">
        <div className="transform origin-top-left transition-transform duration-300 ease-in-out">
          {leftImg?.map((img, i) => (
            <Image
              key={i}
              height={30}
              width={30}
              className="w-52 h-72 my-8 grid-item-media"
              alt={img?.description}
              src={img?.img}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          {centerImg?.map((img, i) => (
            <Image
              key={i}
              height={30}
              width={30}
              className="w-52 h-72 my-8 grid-item-media"
              alt={img?.description}
              src={img?.img}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          {rightImg?.map((img, i) => (
            <Image
              key={i}
              height={30}
              width={30}
              className="w-52 h-72 my-8 grid-item-media"
              alt={img?.description}
              src={img?.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home1;
