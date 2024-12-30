import React from "react";

const Preloader = ({ text, isVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-gold-crayola z-50 flex flex-col items-center justify-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-28 h-28 border-4 border-t-gray-800 border-gray-200 rounded-full animate-spin mb-8"></div>
      <p className="text-5xl font-bold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default Preloader;
