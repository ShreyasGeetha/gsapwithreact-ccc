import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HoverEffect = () => {
  const { contextSafe } = useGSAP();
  var timeline;
  gsap.defaults({ duration: 0.3 });
  useGSAP(() => {
    //Step 1
    // gsap.to(".text", { color: "white" });
    // step 2
    // timeline = gsap.to(".text", { color: "white", paused: true });
    //Step 3 - we do not want the first animation to be paused but the timeline to be, hence pause parameter has been shifted to timeline
    timeline = gsap
      .timeline({ paused: true })
      .to(".text", { color: "white", x: 10 })
      .to(".dot", { backgroundColor: "orange", scale: 1.25 }, "<");
  }, []);

  const handleMouseEnter = contextSafe(() => {
    timeline.play();
  });

  const handleMouseLeave = contextSafe(() => {
    timeline.reverse();
  });
  return (
    <>
      <div
        className="item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="dot"></div>
        <div className="text">home</div>
      </div>
    </>
  );
};

export default HoverEffect;
