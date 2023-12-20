import React from "react";
import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Control = () => {
  const { contextSafe } = useGSAP();

  var tween;

  useGSAP(() => {
    tween = gsap.to(".green", {
      duration: 3,
      x: 600,
      ease: "linear",
      paused: true,
    });
  }, []);

  // always remember to put events/interaction under contextSafe(), else animation will not be cleaned up
  const playFred = contextSafe(() => {
    tween.play();
  });

  const pauseFred = contextSafe(() => {
    tween.pause();
  });

  const reverseFred = contextSafe(() => {
    tween.reverse();
  });

  const restartFred = contextSafe(() => {
    tween.restart();
  });

  return (
    <>
      <img
        className="fred green"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg"
        alt=""
        width="150"
      ></img>
      <div className="nav">
        <button onClick={playFred} className="play">
          play
        </button>
        <button onClick={pauseFred} className="pause">
          pause
        </button>
        <button onClick={reverseFred} className="reverse">
          reverse
        </button>
        <button onClick={restartFred} className="restart">
          restart
        </button>
      </div>
    </>
  );
};

export default Control;
