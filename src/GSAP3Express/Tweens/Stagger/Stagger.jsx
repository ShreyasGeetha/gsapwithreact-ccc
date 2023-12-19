import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Stagger = () => {
  useGSAP(() => {
    // remember by default duration is 0.5s
    // gsap.to(".freds img", { y: -100 });

    //each image will change its position exactly after 0.2s
    // gsap.to(".freds img", { y: -100, stagger: 0.2 });
    // gsap.to(".freds img", {
    //   y: -100,
    //   stagger: {
    //     each: 0.2,
    //   },
    // });

    // The below says, the entire animation has to happen within 0.2s seconds
    // gsap.to(".freds img", {
    //   y: -100,
    //   stagger: {
    //     amount: 0.2,
    //   },
    // });

    // here the from parameter mentions, where the animation should start
    gsap.to(".freds img", {
      y: -100,
      stagger: {
        each: 0.2,
        from: "center", // try with start and end, replacing center
      },
    });
  });

  return (
    <div className="demo">
      <div className="freds">
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
    </div>
  );
};

export default Stagger;
