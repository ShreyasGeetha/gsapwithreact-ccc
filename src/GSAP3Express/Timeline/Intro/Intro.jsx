import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Intro = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from("#demo", { autoAlpha: 0 })
      .from("#title", { scale: 0, opacity: 0, ease: "back" })
      .from("#freds img", { y: 165, stagger: 0.1, duration: 0.8, ease: "back" })
      .from("#time", { xPercent: 100, duration: 0.2, ease: "back" });
  }, []);
  return (
    <div id="demo">
      <img
        id="title"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/meet-the-freds.png"
        alt=""
      />
      <div id="freds">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
          alt=""
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-purple.svg"
          alt=""
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-blue.svg"
          alt=""
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-pink.svg"
          alt=""
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-orange.svg"
          alt=""
        />
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred-red.svg"
          alt=""
        />
      </div>
      <img
        id="time"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/time.png"
        alt=""
      />
    </div>
  );
};

export default Intro;
