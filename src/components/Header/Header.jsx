import "./header.css";
import Logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header-ul">
      <li className="logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="" />
        </Link>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
    </ul>
  );
};

export default Header;
