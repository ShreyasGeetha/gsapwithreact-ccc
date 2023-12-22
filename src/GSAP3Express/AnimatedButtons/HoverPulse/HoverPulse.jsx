import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HoverPulse = () => {
  const { contextSafe } = useGSAP();
  let animation;
  useGSAP(() => {
    animation = gsap.to(".cta", {
      scale: 1,
      repeat: -1,
      yoyo: true,
      paused: true,
    });
  }, []);

  const handleMouseEnter = contextSafe(() => {
    animation.restart();
  });
  const handleMouseLeave = contextSafe(() => {
    animation.pause();
    gsap.to(".cta", { scale: 0.8 });
  });

  return (
    <div className="banner">
      <h2>
        YOUR DREAM <div>VACATION</div>
      </h2>
      <button
        className="cta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Book Now
      </button>
    </div>
  );
};

export default HoverPulse;
