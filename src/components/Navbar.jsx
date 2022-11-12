import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <Link to={"/"}>
            <div className="flex ">
              <svg
                class="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span class="font-semibold text-xl tracking-tight">CWR FONT</span>
            </div>
          </Link>
        </div>

        <div class="w-full   lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex  flex">
            <div className="">
              <Link
                to={"/fonts"}
                class="block lg:inline-block text-lg  text-teal-200 hover:text-white mr-4"
              >
                Fonts
              </Link>
            </div>
            <div className="">
              <Link
                to={"/create-groups"}
                class="block  lg:inline-block text-lg text-teal-200 hover:text-white mr-4"
              >
                Create Groups
              </Link>
            </div>
            <div className="">
              <Link
                to={"/font-groups"}
                class="block  lg:inline-block text-lg text-teal-200 hover:text-white mr-4"
              >
                Font Groups
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
