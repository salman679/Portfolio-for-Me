// @flow strict
"use client";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent sticky">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#9a6eff] text-3xl font-bold">
            {/* <Image
              width={250}
              height={200}
              className="mt-3"
              src="/signature (2).png"
              alt=""
            /> */}
            Salman Izhar
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#experience"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#skills"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#education"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                EDUCATION
              </div>
            </a>
          </li>
          {/* <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#blogs"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                BLOGS
              </div>
            </a>
          </li> */}
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/projects"
            >
              <div className="dark:text-gray-300 text-white font-bold text-sm  transition-colors duration-300 hover:text-gray-400 focus:text-white dark:hover:text-pink-600">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
