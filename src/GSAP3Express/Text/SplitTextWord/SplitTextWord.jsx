import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools, SplitText } from "gsap/all";
const SplitTextWord = () => {
  let animation;
  let split;
  useGSAP(() => {
    gsap.registerPlugin(SplitText, GSDevTools);
    gsap.set(".wrapper", { autoAlpha: 1 });
    animation = gsap.timeline();
    split = new SplitText("h1", { type: "words" });
    animation.from(split.words, {
      opacity: 0,
      stagger: 0.1,
      scale: 0.4,
      rotation: -40,
      repeat: 2,
      ease: "back(4)",
    });
    GSDevTools.create();
  }, []);
  return (
    <div className="wrapper">
      <h1>word by word animation with GSAP</h1>
    </div>
  );
};

export default SplitTextWord;
