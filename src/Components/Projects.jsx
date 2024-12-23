import React from "react";
import restaurantImage from "../assets/images/project-image-1.jpg";
import tourismImage from "../assets/images/tourism-image.jpg";
import cloudingImage from "../assets/images/clouding.jpg";
import separatorImage from "../assets/images/separator.svg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-[100px] overflow-hidden z-[1] text-center bg-black-10"
      aria-label="projects"
    >
      <div className="px-[16px] max-w-[1200px] lg:mx-auto w-full text-white">
        <p className="relative text-gold-crayola font-bold uppercase tracking-2 mb-[12px] text-label-2 text-center">
          Recent Projects
        </p>
        <img
          src={separatorImage}
          alt="separator image"
          className="w-[100px] block mx-auto my-[14px]"
        />

        <h2 className="text-center text-headline-1 mb-[40px] ">My Projects</h2>

        <ul className="grid w-full gap-[40px] md:grid-cols-2 xl:grid-cols-3 place-content-center">
          <li
            className="list-none rounded-[12px] overflow-hidden"
            data-aos="fade-up-right"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Link to="projects/Restaurant Website">
              <div className="relative overflow-hidden z-[1] group">
                <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white-alpha-20 skew-x-[-30deg] translate-x-[-180%] group-hover:skew-x-[-30deg] group-hover:translate-x-[275%] forwards duration-3 z-[10]"></span>
                <div className="card-banner img-holder w-[350px] h-[450px] aspect-square overflow-hidden bg-eerie-black-4 ">
                  <img
                    src={restaurantImage}
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Restaurant Website Project"
                    className="w-full h-full object-cover transform group-hover:scale-105 duration-2"
                  />
                </div>

                <div className="bg-gradient-to-t from-black/90 to-black/70 to-transparent absolute bottom-0 w-full pt-[35px] pr-[35px] pb-[25px]">
                  <p className="text-gold-crayola uppercase font-bold tracking-wider mb-[5px] text-label-2 text-center">
                    Restaurant Website
                  </p>

                  <h3 className="card-title text-title-2 text-center">
                    A user-friendly restaurant website with online ordering.
                  </h3>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="list-none rounded-[12px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Link to="projects/Tourism Agency Website">
              <div className="relative overflow-hidden z-[1] group">
                <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white-alpha-20 skew-x-[-30deg] translate-x-[-180%] group-hover:skew-x-[-30deg] group-hover:translate-x-[275%] duration-3 z-[10]"></span>
                <div
                  className="card-banner img-holder w-[350px] h-[450px] aspect-square overflow-hidden bg-eerie-black-4 "
                  // style="--width: 350; --height: 450;"
                >
                  <img
                    src={tourismImage}
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Tourism Agency Website Project"
                    className="w-full h-full object-cover transform group-hover:scale-105 duration-2"
                  />
                </div>

                <div className="bg-gradient-to-t from-black/90 to-black/70 to-transparent absolute bottom-0 w-full pt-[35px] pr-[35px] pb-[25px]">
                  <p className="text-gold-crayola uppercase font-bold tracking-wider mb-[5px] text-label-2 text-center">
                    Tourism Agency Website
                  </p>

                  <h3 className="card-title text-title-2 text-center">
                    A vibrant website to promote tourism and activities.
                  </h3>
                </div>
              </div>
            </Link>
          </li>

          <li
            className="list-none rounded-[12px] overflow-hidden"
            data-aos="fade-up-left"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Link to="projects/clouder">
              <div className="relative overflow-hidden z-[1] group">
                <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white-alpha-20 skew-x-[-30deg] translate-x-[-180%] forwards group-hover:translate-x-[275%] duration-3 z-[10]"></span>
                <div
                  className="card-banner img-holder w-[350px] h-[450px] aspect-square overflow-hidden bg-eerie-black-4 "
                  // style="--width: 350; --height: 450;"
                >
                  <img
                    src={cloudingImage}
                    width="350"
                    height="450"
                    loading="lazy"
                    alt="Clouding Website Project"
                    className="w-full h-full object-cover transform group-hover:scale-105 duration-2"
                  />
                </div>

                <div className="bg-gradient-to-t from-black/90 to-black/70 to-transparent absolute bottom-0 w-full pt-[35px] pr-[35px] pb-[25px]">
                  <p className="text-gold-crayola uppercase font-bold tracking-wider mb-[5px] text-label-2 text-center">
                    Clouding Website
                  </p>

                  <h3 className="card-title text-title-2 text-center">
                    A sleek website for cloud storage services.
                  </h3>
                </div>
              </div>
            </Link>
          </li>
        </ul>

        <Link
          to="projects"
          className="mx-auto mt-[26px] relative text-gold-crayola text-label-2 font-bold uppercase tracking-5 w-max border-2 border-gold-crayola py-[12px] px-[45px] overflow-hidden z-10 no-underline group block hover:bg-gold-crayola"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <span className="absolute bottom-full left-1/2 translate-x-[-50%] w-[200%] h-[200%] z-[-1] bg-gold-crayola duration-2 rounded-[50%]  group-hover:bottom-[-50%] "></span>

          <span className="duration-1 block transform group-hover:translate-y-[-40px] ">
            See More Projects
          </span>

          <span
            className="absolute top-full left-1/2  translate-x-[-50%] group-hover:translate-x-[-50%]  group-hover:translate-y-[-50%] group-hover:top-1/2 w-max text-smoky-black-1 duration-1"
            aria-hidden="true"
          >
            See More Projects
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
