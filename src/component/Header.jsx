import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <span className="text-blue-400">JA's</span> | BOOKSTORE
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className="hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-400"
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className="hover:text-blue-400 transition duration-300"
                activeClassName="text-blue-400"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
