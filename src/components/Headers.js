import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div id="header">
      <div className="headerElement">
        <nav id="leftNav">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headerElement">logo</div>
      <div className="headerElement">
        <nav id="rightNav">
          <ul>
            <li>About Me</li>
            <li>Contact</li>
            <li>Socials</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
