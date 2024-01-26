"use client";
import Image from "next/image";
import { leftImg, rightImg, centerImg } from "@/utils/data";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const Home1 = () => {
  function useArrayRef() {
    const projectsRef = useRef([]);
    projectsRef.current = [];
    return [projectsRef, (ref) => ref && projectsRef.current.push(ref)];
  }

  const [projectsRef, setProjectsRef] = useArrayRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    projectsRef.current.forEach((project) => {
      const wrapper = project.querySelector(".project-single-wrapper");
      const image = project.querySelector(".project-single-image");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          toggleActions: "restart none none reset",
        },
      });

      tl.to(wrapper, {
        ease: "power2",
        duration: 2,
        clipPath: "polygon(0 0,100% 0, 100% 100%,0 100%)",
      }).to(
        image,
        {
          duration: 2,
          scale: 1,
        },
        "<" // This indicates the animation should start at the same time as the previous one
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-12">
      {leftImg?.map((img, i) => (
        <div
          ref={setProjectsRef}
          key={i}
          className="flex justify-center project-single-wrapper"
        >
          <Image
            height={30}
            width={30}
            className="w-52 h-72 my-8 project-single-image"
            alt={img?.description}
            src={img?.img}
          />
        </div>
      ))}
    </div>
  );
};

export default Home1;
