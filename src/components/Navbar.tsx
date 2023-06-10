import { useState } from 'react';

import Logo from '../assets/images/logo.svg';
import OpenMenu from '../assets/images/icon-menu.svg';
import CloseMenu from '../assets/images/icon-menu-close.svg';

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className="flex justify-between items-center sticky lg:static top-0 py-4 lg:p-0 bg-off-white">
      <a href=".">
        <img src={Logo} alt="Logo" className="w-[50px] lg:w-auto" />
      </a>
      <button className="lg:hidden" onClick={() => setShowNavLinks(true)}>
        <img src={OpenMenu} alt="Open Navigation" />
      </button>
      <div
        className={`bg-very-dark-blue transition-opacity fixed inset-0 lg:hidden ${
          showNavLinks
            ? 'opacity-50 duration-150 delay-0'
            : 'opacity-0 duration-300 delay-150 pointer-events-none'
        }`}
        onClick={() => setShowNavLinks(false)}
      />
      <div
        className={`flex flex-col lg:flex-row px-6 pt-[150px] lg:p-0 gap-5 lg:gap-10 bg-off-white lg:bg-transparent text-very-dark-blue lg:text-dark-grayish-blue text-[18px] lg:text-[16px] transition-transform w-[256px] lg:w-auto fixed right-0 top-0 h-full lg:h-auto lg:static ${
          showNavLinks
            ? 'translate-x-0 duration-300 delay-150'
            : 'translate-x-full lg:translate-x-0 duration-150 delay-0'
        }`}
      >
        <a href="." className="hover:text-soft-orange transition duration-300">
          Home
        </a>
        <a href="." className="hover:text-soft-orange transition duration-300">
          New
        </a>
        <a href="." className="hover:text-soft-orange transition duration-300">
          Popular
        </a>
        <a href="." className="hover:text-soft-orange transition duration-300">
          Trending
        </a>
        <a href="." className="hover:text-soft-orange transition duration-300">
          Categories
        </a>
        <button
          className="absolute right-6 top-6 lg:hidden"
          onClick={() => setShowNavLinks(false)}
        >
          <img src={CloseMenu} alt="Close Navigation" />
        </button>
      </div>
    </nav>
  );
}
