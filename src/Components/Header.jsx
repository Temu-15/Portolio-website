import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "../Constants";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const [positiony, setPositiony] = useState(0);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > positiony && window.scrollY > 51 && !menuOpen) {
        headerRef.current.classList.add(
          "translate-y-[-110%]",
          "duration-500",
          "ease-in-out"
        );
      } else {
        headerRef.current.classList.remove("translate-y-[-110%]");
      }
      setPositiony(window.scrollY);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [positiony]);

  return (
    <header
      className="fixed top-0 sm:top-[51px] left-0 w-full bg-transparent py-[40px] z-50 border-e border-transparent transition-duration-1 overflow-hidden"
      ref={headerRef}
    >
      <div className="px-5 flex justify-between items-center gap-2 relative">
        <Link
          to="/"
          className="no-underline me-auto mr-[60px] flex items-center gap-4 md:pl-[2rem]"
          onClick={() => {
            setActive("");
          }}
        >
          <FaHome color="hsl(38, 61%, 73%)" size="2rem" />
          <span
            className="relative text-gold-crayola font-bold tracking-2  text-[15px] uppercase text-center text-white"
            id="about-label"
          >
            Temesgen
          </span>
        </Link>
        <nav className="ml-auto">
          <button className="xl:hidden">
            <MdOutlineClose />
          </button>
          <ul className="hidden xl:flex gap-[30px] text-white ml-auto mr-4">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  to={`${navLink.id}`}
                  className="relative py-[10px]"
                  onClick={() => {
                    setActive(navLink.id);
                  }}
                >
                  <div className="xl:hidden w-2 h-2 border border-gold-crayola rotate-45 hidden xl:block"></div>
                  <span className="block text-label-2 uppercase  lg:font-bold lg:tracking-1 ">
                    {navLink.title}
                  </span>
                  <div
                    className={`absolute -bottom-4 border-t border-b border-gold-crayola w-full h-2 transition transition-duration-1 ${
                      active == navLink.id ? "block" : "hidden"
                    }`}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <HashLink
          to="/#contact"
          className="hidden sm:block ml-auto xl:ml-0 bg-gold-crayola text-black text-label-2 font-bold uppercase tracking-5 max-w-content border-2 border-gold-crayola py-[12px] px-[45px] z- 1 overflow-hidden"
        >
          <span aria-hidden="true">Contact Me</span>
        </HashLink>
        <button className="p-[12px] pr-0 xl:hidden" onClick={toggleMenu}>
          <span className="block w-[34px] h-[2px] bg-white my-[5px]  transform origin-left animate-menuBtn"></span>
          <span
            className="block w-[34px] h-[2px] bg-white my-[5px] transform origin-left animate-menuBtn "
            style={{ animationDelay: "150ms" }}
          ></span>
          <span
            className="block w-[34px] h-[2px] bg-white my-[5px] transform origin-left animate-menuBtn"
            style={{ animationDelay: "300ms" }}
          ></span>
        </button>
      </div>
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black-alpha-80 z-3 xl:hidden"
        ></div>
      )}
      <div
        ref={menuRef}
        className={`fixed top-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } bottom-0 bg-smoky-black-1 w-[360px] px-[30px] overflow-y-auto h-full transition-transform ease-in-out duration-500 xl:hidden z-4`}
      >
        <div className="w-full flex flex-col justify-between pb-20">
          <div className="  flex justify-end mb-[30px] mt-[50px] mx-[20px] ">
            <MdOutlineClose
              size={16}
              color="white"
              className="w-[30px] h-[30px] flex items-center justify-center border border-white rounded-full p-2 hover:bg-gold-crayola transition-duration-1"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          </div>

          <Link
            to="#"
            className="no-underline me-auto mr-[60px] mx-auto mb-[60px] flex items-center gap-4 md:pl-[20px]"
            onClick={() => {
              setActive("");
            }}
          >
            <FaHome color="hsl(38, 61%, 73%)" size="2rem" />
            <span
              className="relative text-gold-crayola font-bold tracking-2 mb-[12px] text-[15px] uppercase text-center text-white"
              id="about-label"
            >
              Temesgen
            </span>
          </Link>
          <nav className="text-white mb-[100px]">
            <ul className="w-full">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className="w-full border-t border-white-alpha-20 px-1 mt-2 "
                >
                  <Link
                    to={`${navLink.id}`}
                    onClick={() => {
                      setActive(navLink.id);
                      setMenuOpen(!menuOpen);
                    }}
                    className="relative text-label-2 py-[10px] flex items-center gap-4"
                  >
                    <div
                      className={`${
                        active === navLink.id ? "block" : "hidden"
                      } transition-duration-1 w-2 h-2 border border-gold-crayola rotate-45`}
                    ></div>
                    <span className="block text-label-2 uppercase  lg:font-bold lg:tracking-1 leading-5">
                      {navLink.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center">
            <p className="text-white mb-[15px] text-headline-1">Contact me</p>

            <address className="text-quick-silver text-body-4 my-[10px]">
              Gulelel 1/2 , Addis Ababa , Ethiopia
            </address>

            <p className="text-quick-silver text-body-4 my-[10px] ">
              Available : 9.30 am - 2.30pm
            </p>

            <Link
              to="mailto:Tamasgenfiqaadu@gmail.com"
              className="text-quick-silver text-body-4"
            >
              Tamasgenfiqaadu@gmail.com"
            </Link>

            <div className="transition-duration-1 w-3 h-3 border border-gold-crayola rotate-45 xl:block my-[30px] mx-auto"></div>

            <p className="mb-[10px] text-white text-[16px] mb-[10px] font-bold">
              for something urgent
            </p>

            <Link
              to="tel:+88123123456"
              className="text-body-1 leading-6 text-gold-crayola"
            >
              +251-929-170-804
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
