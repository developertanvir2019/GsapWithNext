"use client";
import Image from "next/image";
import { leftImg, rightImg, centerImg } from "@/utils/data";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll";
import imagesLoaded from "imagesloaded";

const preLoadImage = (selector) => {
  const elements = document.querySelectorAll(selector);
  const promises = Array.from(elements).map((element) => {
    return new Promise((resolve) => {
      imagesLoaded(element, { background: true }, resolve);
    });
  });
  return promises;
};

const Home1 = () => {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  const scroll = useRef({
    cache: 0,
    current: 0,
  });

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true,
    });

    scrollElement.on("scroll", (obj) => {
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;
      leftRef.current.style.transform = `skewY(${distance}deg)`;
    });

    Promise.all(preLoadImage(".grid-item-media")).then(() => {
      scrollElement.update();
    });
  }, []);

  return (
    <div
      className="grid grid-cols-3 gap-5 mx-12"
      data-scroll-container
      ref={ref}
    >
      <div className="flex justify-center">
        <div
          ref={leftRef}
          className="transform origin-top-left transition-transform duration-300 ease-in-out"
        >
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
        <div ref={centerRef}>
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
        <div ref={rightRef}>
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
