'use client';

import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-blue-950 font-mono text-orange-400">
      <div className="flex-1">
        <a href="/">
          <img
            src="https://www.finelib.com/images/listings/61024_company_logo.JPG"
            alt="logo"
            className="h-16 w-16 rounded-2xl"
          />
        </a>
      </div>
      <div className={`flex-none ${menuOpen ? 'menu-open' : ''}`}>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu menu-horizontal ${menuOpen ? 'show-menu' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .burger-menu {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 3px 0;
        }

        @media (max-width: 640px) {
          .burger-menu {
            display: flex;
          }

          .menu {
            display: none;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.8);
            position: absolute;
            top: 3.5rem;
            right: 0;
            width: 100%;
          }

          .menu-open .menu {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
