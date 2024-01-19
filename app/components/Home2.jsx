"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Home2 = () => {
  let tl = gsap.timeline();
  let cursor = useRef();
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
  }, []);
  return (
    <div className="home2 relative h-screen w-screen">
      <h1 className="text-3xl font-bold py-2">Tanvir Ahmed</h1>
      <h1 className="text-3xl font-bold py-2">Mern Stack developer</h1>
      <h1 className="text-3xl font-bold py-2">GSAP Animation</h1>
      <div
        ref={(el) => (cursor = el)}
        className="cursor-follow absolute h-20 w-20 top-0 left-0"
      ></div>
    </div>
  );
};

export default Home2;
