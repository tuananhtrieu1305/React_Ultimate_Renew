import "./header.css";
import Logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const { user } = useContext(AuthContext);

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
      {user && user.id ? (
        <>
          <li style={{ float: "right", marginRight: "20px" }}>
            <a href="#">Log out</a>
          </li>
          <span
            style={{
              float: "right",
              color: "#fff",
              fontSize: "18px",
              padding: "14px 20px",
            }}
          >
            Welcome {user.fullName}
          </span>
        </>
      ) : (
        <li style={{ float: "right", marginRight: "20px" }}>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
    </ul>
  );
};

export default Header;
