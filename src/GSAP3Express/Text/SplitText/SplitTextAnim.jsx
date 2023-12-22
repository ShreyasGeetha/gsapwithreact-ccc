import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
const SplitTextAnim = () => {
  let animation;
  let split;
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.set(".wrapper", { autoAlpha: 1 });
    animation = gsap.timeline();
    split = new SplitText("h1", { type: "chars" });
    animation.from(split.chars, {
      opacity: 0,
      stagger: 0.05,
      y: 30,
      ease: "back(4)",
    });
  }, []);
  return (
    <div className="wrapper">
      <h1>Letter by letter animation with GSAP</h1>
    </div>
  );
};

export default SplitTextAnim;
