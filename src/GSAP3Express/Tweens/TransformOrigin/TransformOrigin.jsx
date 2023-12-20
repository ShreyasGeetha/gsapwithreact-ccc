import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TransformOrigin = () => {
  var tween;
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    tween = gsap.to(".truck", {
      rotation: -40,
      repeat: 1,
      duration: 1,
      yoyo: true,
      transformOrigin: "65px 165px",
    });
  }, []);

  const getXY = contextSafe((event) => {
    // Get the x and y coordinates from the click event
    const rect = event.target.getBoundingClientRect();

    // Calculate the X and Y coordinates relative to the element
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Print the relative coordinates
    console.log(`Relative X: ${x}, Relative Y: ${y}`);
  });
  return (
    <div>
      <div className="h2">Click Anywhere to Play</div>

      <div className="demo">
        <img
          className="truck"
          onClick={getXY}
          src="https://assets.codepen.io/32887/truck-final.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TransformOrigin;
