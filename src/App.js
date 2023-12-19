import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BasicTween from "./GSAP3Express/Tweens/BasicTween";
import FromTo from "./GSAP3Express/Tweens/FromTo";

function App() {
  return (
    <div>
      {/* <BasicTween /> */}
      <FromTo />
    </div>
  );
}

export default App;
