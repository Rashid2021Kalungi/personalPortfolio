import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Rkman.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+256 869560969</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>rkman@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humberger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
