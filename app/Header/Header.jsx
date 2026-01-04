import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
           
 <div className="navbar shadow-md px-4 bg-white font-bold py-4 w-full">
      
  <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] flex gap-4 xl:w-max w-full ">

        {/* Left: Logo */}
      <div className="navbar-start xl:justify-normal lg:justify-normal  justify-between flex  w-full">
        {/* Mobile Menu */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
          >
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul>
                
                  <li><a>USA</a></li>
                </ul>
              </details>
            </li>
            <li><a>Products</a></li>
          </ul>
        </div>

        {/* Logo */}
 <Image src="https://www.tuneprotect.com/wp-content/themes/tuneprotectglobal/assets/img/xtp.png.pagespeed.ic.vF3N1Tm3RH.webp" width={70} height={70} alt="logo" />
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Manage & Claims</a></li>
          <li><a>About</a></li>

          {/* Dropdown */}
          <li>
            <details>
              <summary>Product</summary>
              <ul className="p-2 bg-white w-40">
                <li><a>Corporate</a></li>
                <li><a>Partner</a></li>
              </ul>
            </details>
          </li>

          <li><a>Help & Support</a></li>
        </ul>
      </div>


      
  </div>


    </div>

    );
};

export default Header;