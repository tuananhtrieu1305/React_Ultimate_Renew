import "./header.css";
import Logo from "../../assets/react.svg";

const Header = () => {
  return (
    <ul>
      <li className="logo">
        <img src={Logo} alt="" />
      </li>
      <li>
        <a className="active" href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a href="/product">Product</a>
      </li>
    </ul>
  );
};

export default Header;
