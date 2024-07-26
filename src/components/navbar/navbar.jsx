import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          YourArt
        </a>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" />
    </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mr">
              <Link className="nav-link" to="/shop">
                Shop{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
