import React, { useEffect, useRef, useState } from "react";
import portfolioImage1 from "../assets/images/Portfolio-image-1.jpg";
import portfolioImage2 from "../assets/images/Portfolio-image-1.jpg";
import portfolioImage3 from "../assets/images/Portfolio-image-3.jpg";
import separatorImage from "../assets/images/separator.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  const slides = [
    {
      id: 1,
      image: portfolioImage1,
      label: "Full-Stack Developer",
      title: "Let me Build you your dream Website",
      description:
        "3 years of experience in  creating responsive and scalable web apps.",
      cta: "View Projects",
      link: "projects",
    },
    {
      id: 2,
      image: portfolioImage2,
      label: "Passion for Innovation",
      title: "A skilled developer with an eye for creativity",
      description:
        "can develop and transform figma designs into beautiful and friendly websites",
      cta: "Explore Skills",
      link: "about",
    },
    {
      id: 3,
      image: portfolioImage3,
      label: "Let's Collaborate",
      title: "Your Vision, My Code",
      description:
        "I will Bring your concepts to life with clean and efficient code.",
      cta: "Hire Me",
      link: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slideNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  const slidePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className="relative w-full min-h-[100vh] xl:h-[880px] overflow-hidden z-10 text-center"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full transition-duration-1 z-10">
        {slides.map((slide, index) => (
          <div
            className={`absolute w-full h-full grid content-center transition-opacity transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0 opacity-100 z-50"
                : index < currentSlide
                ? "-translate-x-full opacity-0 z-10"
                : "translate-x-full opacity-0 z-10"
            }`}
            key={slide.id}
          >
            <div className="absolute top-0 left-0 w-full h-full transform scale-115 -z-10">
              <img
                src={slide.image}
                width="1880"
                height="950"
                alt=""
                className="object-cover w-full h-full animate-smoothScale"
              />
            </div>
            <div className="relative flex flex-col items-center justify-center text-center text-white z-10 h-full">
              <div className="animate-sliderReveal delay-500">
                <p className="text-label-2 font-bold mb-[12px] uppercase tracking-2 text-gold-crayola">
                  {slide.label}
                </p>
                <img
                  src={separatorImage}
                  alt="separator image"
                  className="w-[100px] block mx-auto my-[14px]"
                />
              </div>
              <h1 className="text-display-1 animate-sliderReveal delay-1000 leading-1 xl:max-w-[1200px] mx-auto md:max-w-[820px] lg:max-w-unset">
                {slide.title}
              </h1>
              <p className="text-body-2 animate-sliderReveal delay-[1500ms] mt-[10px] mb-[40px]">
                {slide.description}
              </p>
              <Link
                to={slide.link}
                className="relative text-gold-crayola text-label-2 font-bold uppercase tracking-5 border-2 border-gold-crayola py-[12px] px-[45px] animate-sliderReveal delay-[2000ms]"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-[30px] z-50 border group border-gold-crayola w-[45px] h-[45px] grid place-items-center transform -translate-y-1/2 rotate-45 hover:bg-gold-crayola active:scale-110 duration-200 hidden lg:block"
        onClick={slidePrev}
      >
        <FaChevronLeft
          fontSize={24}
          className="text-gold-crayola transform -rotate-45 group-hover:text-smoky-black-1"
        />
      </button>
      <button
        className="absolute top-1/2 right-[30px] group z-50 border border-gold-crayola w-[45px] h-[45px] grid place-items-center transform -translate-y-1/2 rotate-45 hover:bg-gold-crayola active:scale-110 duration-200 hidden lg:block"
        onClick={slideNext}
      >
        <FaChevronRight
          fontSize={24}
          className="text-gold-crayola transform -rotate-45 group-hover:text-smoky-black-1"
        />
      </button>
    </div>
  );
}

export default Hero;
