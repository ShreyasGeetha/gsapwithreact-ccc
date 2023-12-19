import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

/**
 *
 * Uncomment each step as explain in course to go through the animation
 */

const FromTo = () => {
  useGSAP(() => {
    // Step 1
    // gsap.from(".fred", { x: 400, y: 200, scale: 2, duration: 3 });
    //Step 2
    // gsap.fromTo(".fred", { x: 700, y: 400 }, { x: 400, y: 200, duration: 3 });
    // step 3 - trying with opacity, useful in website - making things appear from nowhere
    gsap.fromTo(
      ".fred",
      { x: 700, y: 400, opacity: 0 },
      { x: 400, y: 200, opacity: 1, duration: 1 },
    );
  }, []);
  return (
    <div>
      <img
        className="fred"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt="description"
        style={{ width: 150 }}
      />
    </div>
  );
};

export default FromTo;
