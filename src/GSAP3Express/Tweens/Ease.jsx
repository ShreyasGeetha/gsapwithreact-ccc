import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

/**
 *
 * Uncomment each step as explain in course to go through the animation
 */

const Ease = () => {
  useGSAP(() => {
    // Step 1
    // gsap.to(".green1", { x: 600, duration: 3 });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    //Step 2 - default is bounce.out
    // gsap.to(".green1", { x: 600, duration: 3, ease: "bounce" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // step 3
    // gsap.to(".green1", { x: 600, duration: 3, ease: "bounce.in" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // Step 4 - same as step 2, just mentioning it explicitly
    // gsap.to(".green1", { x: 600, duration: 3, ease: "bounce.out" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // step 5
    // gsap.to(".green1", { x: 600, duration: 3, ease: "bounce.inOut" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // step 6 - stretched like a rubber band
    // gsap.to(".green1", { x: 600, duration: 3, ease: "back" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // step 7 - stretched like a rubber band but further
    // gsap.to(".green1", { x: 600, duration: 3, ease: "back(6)" });
    // gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
    // step 8
    gsap.to(".green1", { x: 600, duration: 3, ease: "elastic" });
    gsap.to(".green2", { x: 600, duration: 3, ease: "linear" });
  }, []);
  return (
    <div>
      <img
        className="green1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt="description"
        style={{ width: 150 }}
      />
      <img
        className="green2"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt="description"
        style={{ width: 150 }}
      />
    </div>
  );
};

export default Ease;
