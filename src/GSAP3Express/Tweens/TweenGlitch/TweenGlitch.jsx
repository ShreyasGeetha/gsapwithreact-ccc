import React, { useRef } from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TweenGlitch = () => {
  const tweenglitch = useRef();
  const bgref = useRef();
  const { contextSafe } = useGSAP();
  var tween;
  useGSAP(
    () => {
      const bg = bgref.current;
      tween = gsap.fromTo(
        bg,
        { scale: 0 },
        { scale: 1, ease: "circ", duration: 1 },
      );
    },
    { scope: tweenglitch },
  );

  const handleMouseEnter = contextSafe((e) => {
    console.log("coming?");
    tween.restart();
  });

  return (
    <div ref={tweenglitch}>
      <div className="circle button">
        <div
          className="circle bg"
          ref={bgref}
          onMouseEnter={(e) => handleMouseEnter(e)}
        ></div>
        <span>hover</span>
      </div>
    </div>
  );
};

export default TweenGlitch;
