import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex  items-center py-5 px-3 mr-4 text-red-100 hover:text-green-800 font-bold cursive tracking-widest"
          >
            RS
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon
            url="https://github.com/rstix"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/roman.stix/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
