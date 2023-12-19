import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

/**
 *
 * Uncomment each step as explain in course to go through the animation
 */

const DelayRepeat = () => {
  useGSAP(() => {
    // Step 1
    // gsap.to(".green1", { x: 400, y: 0 });
    // gsap.to(".green2", { x: 400, y: 0 });

    //Step 2
    // gsap.to(".green1", { x: 400, y: 0 });
    // gsap.to(".green2", { x: 400, y: 0, delay: 2 });

    // step 3
    // gsap.to(".green1", { x: 400, y: 0, repeat: 1 });
    // gsap.to(".green2", { x: 400, y: 0 });

    // Step 4 - the first image goes like a yoyo with a little bit of elastic in nature
    // gsap.to(".green1", { x: 400, y: 0, repeat: 1, yoyo: true });
    // gsap.to(".green2", { x: 400, y: 0 });

    // step 5 - going infinite, just like yoyo - the bouncy nature
    gsap.to(".green1", { x: 400, y: 0, repeat: -1, yoyo: true });
    gsap.to(".green2", { x: 400, y: 0 });
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

export default DelayRepeat;
