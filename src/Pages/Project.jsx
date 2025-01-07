import React from "react";
import { useParams } from "react-router-dom";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ProjectInfo } from "../Constants";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Project() {
  const { project } = useParams();
  const navigate = useNavigate();
  const ProjectInfoFilterred = ProjectInfo.filter((proj) => {
    return proj.name === project;
  })[0];

  return (
    <main className="max-w-[115.2rem] mx-auto lg:px-[6.4rem] px-[3.2rem] mt-[140px] lg:mt-[205px]">
      <div className="max-w-[76.8rem] mx-auto text-white text-[16px]">
        <div className="flex items-center justify-between flex-wrap mb-[1.6rem]">
          <h1 className="font-incognito font-black tracking-tight sm:text-[4.8rem] text-[3rem] mb-[1.6rem] max-w-[44.8rem] ">
            {ProjectInfoFilterred
              ? ProjectInfoFilterred.name
              : "Project not found"}
          </h1>
          <div className="flex items-center gap-x-[8px]">
            <a
              href={ProjectInfoFilterred.liveLink}
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center gap-x-[8px] bg-[#27272b66]  text-white  border border-transparent rounded-[6px] px-[1.6rem] py-[8px] duration-200 cursor-pointer hover:border-zinc-700 text-[1.6rem]"
            >
              <CiShare1 height="1em" width="1em" />
              Live URL
            </a>
            <a
              href={ProjectInfoFilterred.GithubLink}
              rel="noreferrer noopener"
              target="_blank"
              className="flex items-center gap-x-[8px] bg-[#27272b66] text-white  border border-transparent rounded-md px-[1.6rem] py-[8px] duration-200 cursor-pointer hover:border-zinc-700 text-[1.6rem]"
            >
              <FaGithub height="1em" width="1em" />
              GitHub
            </a>
          </div>
        </div>
        <div className="relative w-full h-[16rem] pt-[52.5%]">
          {ProjectInfoFilterred.previewImage ? (
            <img
              alt="Cover image for Spotify"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="rounded-[12px] border border-zinc-800 object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
              sizes="100vw"
              src={ProjectInfoFilterred.previewImage}
            />
          ) : (
            <iframe
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              src={ProjectInfoFilterred.previewVideoLink}
              className="rounded-[12px] border border-zinc-800 object-contain"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
                border: 0,
              }}
              controls
            ></iframe>
          )}
        </div>
        <div className="mt-[3.2rem] text-zinc-400 leading-relaxed">
          <h2
            id="overview"
            className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-[2rem] before:-left-[1.6rem] lg:before:text-[2.4rem] before:text-[2rem] block before:top-1/2 before:-translate-y-1/2 before:opacity-80 before:text-zinc-500 relative font-bold tracking-tight text-zinc-100 lg:text-[3.6rem] text-[3rem] my-[3.2rem]"
          >
            <a href="#overview">Overview</a>
          </h2>
          {ProjectInfoFilterred.overviewInfo.map((info) => (
            <p className="mt-[8px] mb-[2.4rem]">{info}</p>
          ))}

          <h2
            id="technologies"
            className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-[2rem] before:-left-[1.6rem] lg:before:text-[2.4rem] before:text-[2rem] block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight text-zinc-100 lg:text-[3.6rem] text-[3rem]  my-[3.2rem]"
          >
            <a href="#technologies">Technologies</a>
          </h2>

          <ul className="list-[square] mt-[2rem] ml-[2rem]">
            {ProjectInfoFilterred.technologies.map((technology) => (
              <li className="mb-[1.6rem]">
                <a
                  rel="noopener"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                  href={technology.link}
                >
                  {technology.name}{" "}
                  <CiShare1 height="1em" width="1em" className="inline" />
                </a>{" "}
              </li>
            ))}
          </ul>
          <h2
            id="technologies"
            className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-[2rem] before:-left-[1.6rem] lg:before:text-[2.4rem] before:text-[2rem] block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight text-zinc-100 lg:text-[3.6rem] text-[3rem]  my-[3.2rem]"
          >
            <a href="#features">Features</a>
          </h2>
          <p className="mt-[8px] mb-[2.4rem]">
            {ProjectInfoFilterred.features.smallDescription}
          </p>

          <ul className="list-[square] mt-[2rem] ml-[2rem]">
            {ProjectInfoFilterred.features.featureLists.map(
              (featurparagraph) => (
                <li className="mb-[1.6rem]">{featurparagraph}</li>
              )
            )}
          </ul>

          <h2
            id="development-and-challenges"
            className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-[2rem] before:-left-[1.6rem] lg:before:text-[2.4rem] before:text-[1rem] block before:top-1/2 before:-translate-y-1/2 before:opacity-80 before:text-zinc-500  relative font-bold tracking-tight text-zinc-100 lg:text-[3.6rem] text-[3rem]  my-[3.2rem]"
          >
            <a href="#development-and-challenges">Development and Challenges</a>
          </h2>
          <p className="mt-[8px] mb-[2.4rem]">
            {ProjectInfoFilterred.challenges.smallDescription}
          </p>
          <ul className="list-[square] mt-[2rem] ml-[2rem]">
            {ProjectInfoFilterred.challenges.challengeLists.map((challenge) => (
              <li className="mb-[1.6rem]">{challenge}</li>
            ))}
          </ul>
        </div>
        <div class="flex justify-between mt-[3.2rem]">
          <button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
            class="bg-[#27272b66]  text-white rounded-l-md  py-2 hover:bg-gold-crayola hover:text-black px-12"
          >
            <div class="flex flex-row align-middle">
              <svg
                class="w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="ml-2">Prev</p>
            </div>
          </button>
          <button
            type="button"
            class="bg-[#27272b66]  text-white rounded-r-md py-[8px] hover:bg-gold-crayola hover:text-black px-12"
            onClick={() => {
              navigate(`/projects/${ProjectInfoFilterred.nextItemLink}`);
            }}
          >
            <div class="flex flex-row align-middle">
              <span class="mr-2">Next</span>
              <svg
                class="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Project;
