"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Home2 = () => {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cursor = useRef(null);
  let h1 = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += mouseY - posY / 10;
        tl.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });
    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    // tl2.from(h1.children, {
    //   skewY: 8,
    //   y: 100,
    //   duration: 0.3,
    //   opacity: 0,
    //   stagger: {
    //     each: 0.4,
    //     from: "end",
    //   },
    // });
    // tl2.from(
    //   cursor,
    //   {
    //     duration: 1.5,
    //     delay: 1,
    //     opacity: 0,
    //   },
    //   "-=1"
    // );
  }, []);
  return (
    <div className="h-96 w-screen overflow-hidden bg-[#121212]">
      <div
        // ref={(el) => (h1 = el)}
        className="content2"
      >
        <h1 className="text-3xl font-bold py-2">Tanvir Ahmed</h1>
        <h1 className="text-3xl font-bold py-2">Mern Stack developer</h1>
        <h1 className="text-3xl font-bold py-2">GSAP Animation</h1>
      </div>
      <div ref={(el) => (cursor = el)} className="cursor-follow"></div>
    </div>
  );
};

export default Home2;
