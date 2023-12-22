import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BasicTween from "./GSAP3Express/Tweens/BasicTween";
import FromTo from "./GSAP3Express/Tweens/FromTo";
import DelayRepeat from "./GSAP3Express/Tweens/DelayRepeat";
import Ease from "./GSAP3Express/Tweens/Ease";
import Stagger from "./GSAP3Express/Tweens/Stagger/Stagger";
import Control from "./GSAP3Express/Tweens/Control/Control";
import TransformOrigin from "./GSAP3Express/Tweens/TransformOrigin/TransformOrigin";
import TweenGlitch from "./GSAP3Express/Tweens/TweenGlitch/TweenGlitch";
import Intro from "./GSAP3Express/Timeline/Intro/Intro";
import HoverEffect from "./GSAP3Express/AnimatedButtons/HoverEffects/HoverEffect";
import HoverMultipleElements from "./GSAP3Express/AnimatedButtons/HoverMultipleElements/HoverMultipleElements";
import HoverPulse from "./GSAP3Express/AnimatedButtons/HoverPulse/HoverPulse";
import FinalProject from "./GSAP3Express/FinalProject/FinalProject";

function App() {
  return (
    <div>
      {/* <BasicTween /> */}
      {/* <FromTo /> */}
      {/* <DelayRepeat /> */}
      {/* <Ease /> */}
      {/* <Stagger /> */}
      {/* <Control /> */}
      {/* <TransformOrigin /> */}
      {/* <TweenGlitch /> */}
      {/* <Intro /> */}
      {/* <HoverEffect /> */}
      {/* <HoverMultipleElements /> */}
      {/* <HoverPulse /> */}
      <FinalProject />
    </div>
  );
}

export default App;
