import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import React from "react";
import "./index.css";

const TypeWriter = () => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    // gsap.to("p", {
    //   text: "Hello this is typewriter effect",
    //   duration: 5,
    //   ease: "back",
    // });

    //step 2
    // gsap.to("p", {
    //   text: "Hello this is typewriter effect",
    //   duration: 2,
    //   ease: "power1.in",
    // });

    //step 3
    // gsap.to("p", {
    //   text: "Hello this is typewriter effect",
    //   duration: 2,
    //   ease: "power1.in",
    // });

    //step 4
    // gsap.to("p", {
    //   text: "Hello this is typewriter effect",
    //   duration: 2,
    //   ease: "power1.in",
    //   repeat: 1,
    //   yoyo: true,
    // });

    //step 5
    gsap.to("p", {
      text: { value: "Hello this is typewriter effect", delimiter: "" },
      duration: 2,
      ease: "power1.in",
    });
  }, []);
  return (
    <div className="wrapper">
      {/* Step 3 
      <p>I am the initial text</p> */}
      <p>This is a paragraph</p>
    </div>
  );
};

export default TypeWriter;
