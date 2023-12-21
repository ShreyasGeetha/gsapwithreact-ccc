import React, { useRef } from "react";
import "../index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HoverMultipleElements = () => {
  const { contextSafe } = useGSAP();
  const container = useRef();
  var timeline;
  const timelines = [];
  gsap.defaults({ duration: 0.3 });
  useGSAP(() => {
    document.querySelectorAll(".item").forEach((item, index) => {
      timeline = gsap
        .timeline({ paused: true })
        .to(item.querySelector(".text"), {
          color: "white",
          scale: 1.1,
          transformOrigin: "left center",
          x: 10,
        })
        .to(
          item.querySelector(".dot"),
          { backgroundColor: "orange", scale: 1.25 },
          "<",
        );
      timelines.push(timeline);
    });
    console.log(timelines, "timelines");
  }, [{ scope: container }]);

  const handleMouseEnter = contextSafe((index) => {
    // console.log("hello", timelines[index]);
    timelines[index].play();
  });

  const handleMouseLeave = contextSafe((index) => {
    timelines[index].reverse();
  });
  return (
    <div ref={container}>
      <div
        className="item"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave(0)}
      >
        <div className="dot"></div>
        <div className="text">home</div>
      </div>
      <div
        className="item"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
      >
        <div className="dot"></div>
        <div className="text">About</div>
      </div>
      <div
        className="item"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
      >
        <div className="dot"></div>
        <div className="text">Portfolio</div>
      </div>
      <div
        className="item"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave(3)}
      >
        <div className="dot"></div>
        <div className="text">Contact us</div>
      </div>
    </div>
  );
};

export default HoverMultipleElements;
