import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const BasicTween = () => {
  useGSAP(() => {
    gsap.to(".fred", { x: 400, y: 200, scale: 2, rotate: 360, duration: 3 });
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

export default BasicTween;
