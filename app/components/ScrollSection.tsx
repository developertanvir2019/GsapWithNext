"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section w-screen bg-blue-500 py-6 flex justify-center items-center text-4xl font-bold">
            <h3>Tanvir</h3>
          </div>
          <div className="scroll-section w-screen bg-yellow-200 py-6 flex justify-center items-center text-4xl font-bold">
            <h3>Ahmed</h3>
          </div>
          <div className="scroll-section w-screen bg-red-500 py-6 flex justify-center items-center text-4xl font-bold">
            <h3>Full Stack</h3>
          </div>
          <div className="scroll-section w-screen bg-green-400 py-6 flex justify-center items-center text-4xl font-bold">
            <h3>Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
