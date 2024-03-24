import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      Header
      <nav>
        <ul>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
