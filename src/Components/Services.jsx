import React from "react";
import separatorImage from "../assets/images/separator.svg";

function Services() {
  return (
    <section
      className="relative py-[100px] overflow-hidden z-[1] text-center"
      aria-label="services"
    >
      <div className="px-[16px] max-w-[1200px] lg:mx-auto w-full text-white">
        <p className="relative text-gold-crayola font-bold uppercase tracking-2 mb-[12px] text-label-2">
          Why Choose Me
        </p>

        <img
          src={separatorImage}
          alt="separator image"
          className="w-[100px] block mx-auto my-[14px]"
        />
        <h2 className="text-headline-1 mb-[40px] ">My Services</h2>

        <ul className="grid gap-[40px] md:grid-cols-[1fr,1fr] xl:grid-cols-4">
          <li
            className="list-none"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="bg-eerie-black-3 pt-[30px] pr-[20px] pb-[40px] pl-[20px] group">
              <div className="card-icon max-w-max mx-auto duration-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // React logo icon for Front-End Development
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="icon"
                  className="group-hover:-scale-100 group-hover:rotate-180 duration-2 w-[100px] h-[80px] object-contain"
                />
              </div>

              <h3 className="text-title-2 my-[20px] group-hover:text-gold-crayola">
                Front-End Development
              </h3>

              <p className="text-label-1 leading-6 text-quick-silver">
                Creating beautiful and responsive user interfaces with the
                latest front-end technologies.
              </p>
            </div>
          </li>

          <li
            className="feature-item"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="bg-eerie-black-3 pt-[30px] pr-[20px] pb-[40px] pl-[20px] group">
              <div className="card-icon max-w-max mx-auto duration-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" // Node.js logo icon for Back-End Development
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="icon"
                  className="group-hover:-scale-100 group-hover:rotate-180 duration-2 w-[100px] h-[80px] object-contain"
                />
              </div>

              <h3 className="text-title-2 my-[20px] group-hover:text-gold-crayola">
                Back-End Development
              </h3>

              <p className="text-label-1 leading-6 text-quick-silver">
                Building robust and scalable back-end systems using modern
                frameworks and databases.
              </p>
            </div>
          </li>

          <li
            className="feature-item"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="bg-eerie-black-3 pt-[30px] pr-[20px] pb-[40px] pl-[20px] group  h-[315px]">
              <div className="card-icon max-w-max mx-auto duration-2">
                <img
                  src="https://www.iconpacks.net/icons/5/free-api-integration-and-blue-cloud-icon-17288-thumb.png" // API icon for API Integration
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="icon"
                  className="group-hover:-scale-100 group-hover:rotate-180 duration-2 w-[100px] h-[80px] object-contain"
                />
              </div>

              <h3 className="text-title-2 my-[20px] group-hover:text-gold-crayola">
                API Integration
              </h3>

              <p className="text-label-1 leading-6 text-quick-silver">
                Seamlessly integrating third-party APIs to enhance functionality
                and connectivity.
              </p>
            </div>
          </li>

          <li
            className="feature-item "
            data-aos="fade-up"
            data-aos-delay="550"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="bg-eerie-black-3 pt-[30px] pr-[20px] pb-[40px] pl-[20px] group">
              <div className="card-icon max-w-max mx-auto duration-2">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/telegram.svg" // Telegram logo icon for Telegram Bot Development
                  width="100"
                  height="80"
                  loading="lazy"
                  alt="icon"
                  className="group-hover:-scale-100 group-hover:rotate-180 duration-2 w-[100px] h-[80px] object-contain"
                />
              </div>

              <h3 className="text-title-2 my-[20px] group-hover:text-gold-crayola">
                Telegram Bot Development
              </h3>

              <p className="text-label-1 leading-6 text-quick-silver">
                Developing smart and efficient Telegram bots to automate tasks
                and improve user experience.
              </p>
            </div>
          </li>
        </ul>

        {/* <img
          src={shape7}
          width="208"
          height="178"
          loading="lazy"
          alt="shape"
          className="absolute top-[40px] right-[100px] hidden lg:block"
        />

        <img
          src={shape8}
          width="120"
          height="115"
          loading="lazy"
          alt="shape"
          className="absolute top-[40px] left-[100px] hidden lg:block"
        /> */}
      </div>
    </section>
  );
}

export default Services;
