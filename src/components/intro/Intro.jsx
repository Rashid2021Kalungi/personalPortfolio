import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Kalungi Rashid</h1>
          <h3>
            Freelance <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
