import { Link } from "react-router-dom";
import logo2 from "../../../public/logo/logo2.png";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-lg z-10">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Our Works</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Members</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link>Contract Us</Link>
            </li>
          </ul>
        </div>
        <Link className="w-16 h-10 mb-5">
          <img className="" src={logo2} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[100] font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <Link>Our Works</Link>
              </summary>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/team">Members</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link>Contract Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/application-form" className="btn">
          Apply for Membership
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
