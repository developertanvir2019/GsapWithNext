"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const Home3 = () => {
  const triggerRef = useRef([]);
  const lettersRef = useRef([]); // Move lettersRef here

  const useArrayRef = () => {
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  };

  const [lettersRefArray, setLetterRef] = useArrayRef(); // Use the array returned by useArrayRef

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing";

  useEffect(() => {
    const reveal = gsap.to(lettersRefArray, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 80%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);
  return (
    <div className="home3">
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, i) => (
            <span ref={setLetterRef} key={i} className="reveal-text">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;
