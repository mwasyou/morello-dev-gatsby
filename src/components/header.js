import React from "react";
import { Link } from "gatsby";

// Components
import Avatar from "./avatar";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-8 mx-auto lg:py-16">
        <div>
          <Link to="/">
            <Avatar />
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/blog"
            activeClassName="text-secondary bg-gray-800"
            className="px-3 py-2 text-xl font-bold transition-colors duration-300 rounded hover:text-secondary hover:bg-gray-800"
          >
            Blog
          </Link>
          <Link
            to="/about"
            activeClassName="text-secondary bg-gray-800"
            className="px-3 py-2 text-xl font-bold transition-colors duration-300 rounded hover:text-secondary hover:bg-gray-800"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
