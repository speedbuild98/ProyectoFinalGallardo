// Desc: This is the NavBar component
import { Link } from "react-router-dom";
//Assets
import { links } from "../../assets/constants";
import { logo, menu } from "../../assets";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="navbar bg-base-100 border-b border-gray-600 relative md:px-32">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="logo coderhouse" />
          </Link>
        </div>
        <div className="flex-none">
          <CartWidget />
          <div className="dropdown dropdown-end z-40">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-6 rounded-full">
                <img src={menu} alt="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40"
            >
              {links.map((link) => (
                <li key={link.id}>
                  <Link to={link.url} className="menu-link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
