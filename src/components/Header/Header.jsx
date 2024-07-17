import "./header.css";
import Logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li className="logo">
        <img src={Logo} alt="" />
      </li>
      <li>
        <Link to="/" className="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
    </ul>
  );
};

export default Header;
