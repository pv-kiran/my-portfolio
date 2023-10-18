import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

function Intro() {
  return (
    <div id="intro_section">
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi there!</h1>
          <h1>
            I am <b>Kiran PV</b>
          </h1>
          <Typed />
        </div>

        <Tilt>
          <Lottie className="illustration" animationData={Coder} loop={true} />
        </Tilt>
      </div>
    </div>
  );
}

export default Intro;
