import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function TopBar() {
  return (
    <div className="hidden z-50 text-white sm:block absolute sm:top-0 sm:left-0 w-full sm:p-[10px] md:p-[16px] sm:z-4 transitionduration-1 border-b border-white-alpha-20">
      <div className=" flex justify-center items-center sm:gap-[30px] max-w-screen ">
        <a
          href="https://maps.app.goo.gl/AvdSEwj8FT1iiiyw6"
          className="decoration-none hover:text-gold-crayola"
        >
          <address className="flex items-center sm:gap-[6px] hidden lg:flex">
            <MdOutlineLocationOn
              className="sm:stroke-12"
              size={16}
              color="white"
            />
            w2
            <span className="text-label-1 leading-[1.85em]">
              Gulelel 1/2 , Addis Ababa , Ethiopia
            </span>
          </address>
        </a>
        <div className="w-2 h-2 border border-gold-crayola rotate-45 hidden xl:block"></div>
        <div className="flex items-center sm:gap-[6px] lg:me-auto  hidden lg:flex">
          <IoTimeOutline size={16} color="white" />
          <span className="text-label-1">Daily : 8:00 am to 10:00 pm</span>
        </div>
        <a href="tel:+251929170804" className="flex items-center sm:gap-[6px] ">
          <FaPhoneAlt size={16} color="white" />
          <span className="text-label-1">+251 929 170 804</span>
        </a>
        <div className="w-2 h-2 border border-gold-crayola rotate-45 hidden xl:block"></div>
        <a
          href="mailto:Tamasgenfiqaadu@gmail.com"
          className="flex items-center sm:gap-[6px] "
        >
          <IoMdMail size={16} color="white" />
          <span className="text-label-1">Tamasgenfiqaadu@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
