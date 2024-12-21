import React from "react";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import aboutImage from "../assets/images/About-image.jpg";
import competitionPhoto from "../assets/images/competition-photo.jpg";
import { CiShare1 } from "react-icons/ci";
import { MdDownload } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { technologyItems, Tools, Heroes } from "../Constants";
import YeahRightImage from "../assets/images/yeah-right.webp";
import Footer from "../Components/Footer";
import { FaRegSquareCheck } from "react-icons/fa6";
function AboutPage() {
  const imgRef = useRef(null);
  const handleclick = () => {
    imgRef.current.classList.add("left-[0]");
    setTimeout(() => {
      imgRef.current.classList.remove("left-[0]");
    }, 2500);
  };
  return (
    <main className="relative lg:max-w-[1280px] mx-auto max-w-[768px] md:px-[6.4rem] px-[2.4rem] w-full ">
      <div className=" mt-[140px] lg:mt-[205px]">
        <div className="w-full relative grid lg:grid-cols-[1.2fr,1.2fr] grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <h2 className=" font-semibold tracking-tight sm:text-[4.8rem] text-[3rem] lg:leading-tight basis-1/2 mb-[32px]  text-white">
              I'm Temesgen Fikadu, a Full-Stack developer who lives in Addis{" "}
            </h2>
            <p className="mt-2 mb-6 text-[#a1a1aa] text-[16px] leading-relaxed">
              I am a self-driven, career-oriented software developer
              specializing in front-end development and api Integration,
              currently pursuing a bachelors degree in Biomedical Engineering at
              Addis Ababa University. My expertise lies in building interactive
              web applications on the client side. Primarily working with
              technologies like Reactjs, Next.js, Vuejs and styling framewroks
              Tailwind css and bootstrap.
            </p>
            <p className="mt-2 mb-6 text-[#a1a1aa] text-[16px] leading-relaxed">
              I strongly believe in continuous learning and improving myself, so
              I try my best to learn in any situation possible, unfavorable or
              not.
            </p>

            <blockquote className="relative text-[#a1a1aa] overflow-hidden tracking-tight text-[18px] my-[32px] lg:py-[24px] lg:pl-[24px] pr-[48px] p-[16px] border border-zinc-800 rounded-[6px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-7xl absolute -top-7 -right-5 -rotate-12 text-zinc-800 "
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
              </svg>
              If you ever spot me in the wild, don't hesitate to say hello!
              Let's grab a drink and geek-out over the latest advancements in
              front-end development or discuss our favorite programming
              language. ⚡
            </blockquote>
            <br />
            <h3 className=" font-semibold tracking-tight sm:text-[3.6rem] text-[2.4rem] lg:leading-tight basis-1/2 mb-[32px] mt-[16px] text-white">
              What I have been Working on{" "}
            </h3>
            <col />
            <h2 className="pl-4 mb-[10px] mt-[30px] text-3xl font-extrabold leading-none tracking-tight  md:text-3xl text-white">
              Hybrid bed-wheelchair design
            </h2>
            <figure className="my-16">
              <img src={competitionPhoto} alt="" />
              <figcaption className="mt-[1.6rem] text-center text-[14px]  text-gray-400">
                A shot of my teammate and I with host organizers (May 02 2023)
              </figcaption>
            </figure>
            <p className="mt-2 mb-6 text-[#a1a1aa] text-[16px] leading-relaxed">
              we proposed a hybrid bed and wheelchair design combining
              mechanical and electrical systems. It has a rigid base as the bed
              and a detachable wheelchair that operates electrically with the
              press of a button, providing a seamless and comfortable transfer
              process for patients in hospitals.
            </p>

            <h2 className="pl-4 mb-[10px] mt-[30px] text-3xl font-extrabold leading-none tracking-tight  md:text-3xl text-white">
              Biomedical Management System
            </h2>
            <figure className="my-16">
              <img src={competitionPhoto} alt="" />
              <figcaption className="mt-[1.6rem] text-center text-[14px]  text-gray-400">
                A shot of my teammate and I with host organizers (May 02 2023)
              </figcaption>
            </figure>
            <p className="mt-2 mb-6 text-[#a1a1aa] text-[16px] leading-relaxed">
              I recently attended a biomedical management system training at
              Yekatit Hospital. The program focused on managing and maintaining
              biomedical equipment efficiently. It showcased how the software
              was developed to solve challenges in inventory, calibration, and
              scheduling. Seeing its impact inspired me as a developer to create
              innovative solutions for healthcare. This experience enhanced my
              skills and fueled my passion for impactful software development.
            </p>
            <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-[20px] before:text-[2.4rem] before:top-1/2 before:-translate-y-1/2 before:opacity-80 before:text-zinc-500 relative inline-block font-semibold tracking-tight text-[2.4rem] mt-[24px] mb-[8px] text-white">
              <a href="#technologies">Technologies</a>
            </h3>
            <ul className="list-none mt-[8px] ml-[8px] text-zinc-400 ">
              {technologyItems.map((item) => (
                <li className="mb-[16px] text-[16px] flex items-center">
                  <a
                    rel="noopener"
                    target="_blank"
                    className="font-medium inline-flex items-center justify-start gap-x-[4px] text-[#60a5fa] underline"
                    href="https://reactjs.org/?ref=victoreke.com"
                  >
                    <img
                      alt="reactjs"
                      loading="lazy"
                      width="17"
                      height="17"
                      decoding="async"
                      data-nimg="1"
                      className="mr-[8px]"
                      src={item.imageUrl}
                      // style="color: transparent;"
                    />
                    {item.name}
                  </a>{" "}
                  - {item.description}
                </li>
              ))}
            </ul>
            <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-[20px] before:text-[2.4rem] before:top-1/2 before:-translate-y-1/2 before:opacity-80 before:text-zinc-500 relative inline-block font-semibold tracking-tight text-[2.4rem] mt-[24px] mb-[8px] text-white">
              <a href="#technologies">Tools</a>
            </h3>
            <ul className="list-none mt-[8px] ml-[8px] text-zinc-400 ">
              {Tools.map((tool) => (
                <li className="mb-[16px] text-[16px] flex items-center">
                  <a
                    rel="noopener"
                    target="_blank"
                    className="font-medium inline-flex items-center justify-start gap-x-[4px] text-[#60a5fa] underline"
                    href="https://reactjs.org/?ref=victoreke.com"
                  >
                    <img
                      alt="reactjs"
                      loading="lazy"
                      width="17"
                      height="17"
                      decoding="async"
                      data-nimg="1"
                      className="mr-[8px]"
                      src={tool.imageUrl}
                      // style="color: transparent;"
                    />
                    {tool.name}
                  </a>{" "}
                  - {tool.description}
                </li>
              ))}
            </ul>
            <h3 className="font-semibold tracking-tight sm:text-[3rem] text-[2.4rem] lg:leading-tight basis-1/2 mt-[32px] mb-[16px] text-white">
              Soft Skills
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[#a1a1aa] text-[16px] leading-relaxed">
              <li>
                <strong className="text-[#d4d4d8]">Communication:</strong>{" "}
                Excellent verbal and written communication skills, able to
                convey ideas clearly and effectively.
              </li>
              <li>
                <strong className="text-[#d4d4d8]">Teamwork:</strong> Proven
                ability to work collaboratively in a team environment,
                contributing to group success.
              </li>
              <li>
                <strong className="text-[#d4d4d8]">Problem-Solving:</strong>{" "}
                Strong analytical skills, able to identify issues and develop
                effective solutions.
              </li>
              <li>
                <strong className="text-[#d4d4d8]">Adaptability:</strong>{" "}
                Flexible and open to change, able to quickly adjust to new
                situations and challenges.
              </li>
              <li>
                <strong className="text-[#d4d4d8]">Time Management:</strong>{" "}
                Efficient in managing time and prioritizing tasks to meet
                deadlines.
              </li>
              <li>
                <strong className="text-[#d4d4d8]">Leadership:</strong>{" "}
                Experience in leading projects and guiding team members towards
                achieving goals.
              </li>
            </ul>
          </div>
          <div>
            <div>
              <img
                src={aboutImage}
                alt=""
                width="400px"
                height="400px"
                className="rounded-2xl mb-[16px] bg-top max-h-[384px] "
              />
            </div>

            <div className="flex flex-col text-center gap-y-[16px]">
              <div className="flex items-center gap-x-[12px]">
                <a
                  rel="noopener"
                  target="_blank"
                  className="flex items-center justify-center text-white text-center gap-x-[8px] basis-[90%] bg-[#27272b66]   rounded-[6px] py-[8px] text-[18px] font-semibold"
                  href="/showresume"
                >
                  View Résumé{" "}
                  <CiShare1
                    height="1.6em"
                    width="1.6em"
                    className="font-semibold text-white"
                  />
                </a>
                <a
                  href="/Files/Temesgen Fikadu.pdf"
                  className="flex items-center justify-center bg-[#27272b66] text-center  hover:underline basis-[10%]  rounded-[6px] py-[12px] text-[18px]"
                  title="Download Resume"
                  download={true}
                >
                  <MdDownload
                    height="1.6em"
                    width="1.6em"
                    color="#33e092"
                    className="font-semibold"
                  />
                </a>
              </div>
              <a
                href="mailto:tamasgenfiqaadu@gmail.com"
                className="flex items-center gap-x-[8px] text-[1.6rem]  text-white hover:text-[#33e092]"
              >
                <CiMail height="1.6em" width="1.6em" className="text-[18px]" />
                Tamasgenfiqaadu@gmail.com
              </a>
            </div>
          </div>
        </div>
        <section className="mt-[80px] max-w-[1024px]">
          <div>
            <h2 className="text-[3rem] mb-[16px] font-bold tracking-tight text-white">
              Heroes
            </h2>
            <p className="text-zinc-400 max-w-2xl text-[16px]">
              Inspired by
              <a
                rel="noopener"
                target="_blank"
                className="text-blue-400 underline"
                href="https://rafa.design?ref=victoreke.com"
              >
                Rafael Condo's
              </a>
              heroes list, here's my own curated lineup of code conjurers and
              digital dynamos that I'm absolutely stoked to meet someday.
              <strong className="font-semibold">
                "In no particular order"
              </strong>
            </p>
          </div>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] mt-[48px] tracking-tight">
            {Heroes.map((hero) => (
              <li className="flex items-center gap-x-[8px] bg-[#27272b66] border border-zinc-800  rounded-[6px] px-[8px] py-[8px] text-white text-[16px]">
                <button onClick={handleclick}>
                  <FaRegSquareCheck />
                </button>

                <a
                  rel="noopener"
                  target="_blank"
                  className="font-incognito tracking-wide hover:underline null"
                  href="https://github.com/bradtraversy?ref=victoreke.com"
                >
                  {hero}
                </a>
              </li>
            ))}
            <img
              ref={imgRef}
              alt="yeah right"
              loading="lazy"
              width="250"
              height="250"
              decoding="async"
              data-nimg="1"
              className="fixed z-30 bottom-1/2 duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] -left-[250px]"
              src={YeahRightImage}
            />
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
