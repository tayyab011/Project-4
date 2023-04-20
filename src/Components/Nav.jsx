import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="text-orange-600 bg-orange-200 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center text-base font-bold lg:w-2/5 md:ml-auto">
          <Link to={"/contact"} className="mr-5 hover:text-red-900">
            Contact us
          </Link>
          <Link to={"/about"} className="mr-5 hover:text-red-900">
            About us
          </Link>
          <Link to={"/offers"} className="mr-5 hover:text-red-900">
            Offers
          </Link>
          <Link to={"/blog"} className="hover:text-red-900">
            Blogs{" "}
          </Link>
        </nav>
        <Link
          to={"/"}
          className="flex items-center order-first mb-4 font-medium text-white lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"
        >
          <span className="ml-3 text-4xl font-bold">Uchiha</span>
        </Link>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
         
        </div>
      </div>
    </header>
  );
};
export default Nav;
