import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GSDevTools, SplitText } from "gsap/all";
const SplitLine = () => {
  let animation;
  let split;
  useGSAP(() => {
    gsap.registerPlugin(SplitText, GSDevTools);
    gsap.set(".wrapper", { autoAlpha: 1 });
    animation = gsap.timeline();
    split = new SplitText("p", { type: "lines" });
    animation.from(split.lines, {
      opacity: 0,
      stagger: 0.2,
      rotateX: -90,
      rotateY: -90,
      transformOrigin: "50% 50% -100",
    });
    GSDevTools.create({ animation: animation });
  }, []);
  return (
    <div className="wrapper">
      <p>
        The Only Way To Do Great Work Is To Love What You Do. If You Haven’t
        Found It Yet, Keep Looking. Don’t Settle.
      </p>
    </div>
  );
};

export default SplitLine;
