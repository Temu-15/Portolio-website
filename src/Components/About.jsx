import React, { useEffect, useState } from "react";
import badge2 from "../assets/images/webcircular.png";
import aboutBanner from "../assets/images/web-developer-2.jpg";
import absImage from "../assets/images/web-development.svg";
import separatorImage from "../assets/images/separator.svg";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 10 - 5;
      const y = (event.clientY / window.innerHeight) * 10 - 5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative py-[70px] overflow-hidden text-center z-10 xl:pt-[170px] xl:pb-[100px]"
      id="about"
    >
      <div className="grid gap-[120px] px-[16px] sm:gap-[80px] lg:gap-[30px] xl:mx-auto xl:max-w-[1200px] xl:w-full lg:grid-cols-[0.7fr,1fr]">
        <div
          className="text-center"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <p
            className="relative text-gold-crayola font-bold tracking-2 mb-[12px] text-label-2 uppercase"
            id="about-label"
          >
            About Me
          </p>
          <img
            src={separatorImage}
            alt="separator image"
            className="w-[100px] block mx-auto my-[14px]"
          />

          <h2 className="text-headline-2 text-white leading-2 font-regular">
            A little Intro
          </h2>

          <p className="text-body-4 font-regular leading-5 text-white mt-[15px] mb-[30px] sm:max-w-[420px] sm:mx-auto">
            I am a full-stack web developer with 3 years of experience building
            dynamic and scalable web applications. Based in Addis Ababa,
            Ethiopia, I specialize in both front-end and back-end technologies,
            combining my expertise in development with a strong design sense to
            craft seamless and user-centric experiences.
          </p>

          <div className="font-bold text-body-4 leading-5 text-white">
            Connect With Me
          </div>

          <a
            href="mailto:Tamasgenfiqaadu@gmail.com"
            className="relative max-w-max text-gold-crayola mx-auto text-body-1 leading-6 no-underline"
          >
            Tamasgenfiqaadu@gmail.com
          </a>

          <a
            href="about"
            className="mx-auto mt-[26px] relative text-gold-crayola text-label-2 font-bold uppercase tracking-5 w-max border-2 border-gold-crayola py-[12px] px-[45px]   overflow-hidden z-10 no-underline group block hover:bg-gold-crayola"
          >
            <span className="absolute bottom-full left-1/2 translate-x-[-50%] w-[200%] h-[200%] z-[-1] bg-gold-crayola duration-2 rounded-[50%]  group-hover:bottom-[-50%] "></span>

            <span className="duration-1 block transform group-hover:translate-y-[-40px] ">
              Read More
            </span>

            <span
              className="absolute top-full left-1/2  translate-x-[-50%] group-hover:translate-x-[-50%]  group-hover:translate-y-[-50%] group-hover:top-1/2 w-max text-smoky-black-1 duration-1"
              aria-hidden="true"
            >
              Read More
            </span>
          </a>
        </div>

        <figure
          className="relative mb-[120px]"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <img
            src={aboutBanner}
            width="400"
            loading="lazy"
            alt="about banner"
            className="transform translate-x-[-5px] translate-y-[5px] pl-[50px] w-full max-h-[400px] block sm:pl-[90px] object-cover"
            style={{
              transform: `translate3d(${mousePosition.x * 1.4}px, ${
                mousePosition.y * 1.4
              }px, 0px)`,
            }}
          />

          <div
            className="transform translate-x-[-9px] translate-y-[7px] absolute bottom-[-120px] left-0 py-[50px] w-[150px] sm:w-[285px] z-10"
            data-parallax-item=""
            data-parallax-speed="1.75"
            style={{
              transform: `translate3d(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px, 0px)`,
            }}
          >
            <img
              src={absImage}
              width="255"
              height="255"
              loading="lazy"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-[-65px] right-0 overflow-hidden z-20">
            <img
              src={badge2}
              width="133"
              height="134"
              loading="lazy"
              className="relative animate-rotate360 object-contain"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default About;
