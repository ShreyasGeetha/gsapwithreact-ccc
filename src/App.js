import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BasicTween from "./GSAP3Express/Tweens/BasicTween";
import FromTo from "./GSAP3Express/Tweens/FromTo";
import DelayRepeat from "./GSAP3Express/Tweens/DelayRepeat";
import Ease from "./GSAP3Express/Tweens/Ease";
import Stagger from "./GSAP3Express/Tweens/Stagger/Stagger";

function App() {
  return (
    <div>
      {/* <BasicTween /> */}
      {/* <FromTo /> */}
      {/* <DelayRepeat /> */}
      {/* <Ease /> */}
      <Stagger />
    </div>
  );
}

export default App;
