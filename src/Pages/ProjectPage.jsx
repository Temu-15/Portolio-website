import React from "react";
import { ProjectItems } from "../Constants";
import Footer from "../Components/Footer";
function ProjectPage() {
  return (
    <main className="max-w-[1280px] mx-auto md:px-[64px] px-[24px] mt-[140px] lg:mt-[205px]">
      <header className="mb-[40px]">
        <h1 className="max-w-[768px] font-incognito font-semibold tracking-tight sm:text-[48px] text-[3rem] mb-[2.4rem] lg:leading-[6rem] text-white">
          Projects
        </h1>
        <p className="max-w-[672px] text-[1.6rem] text-zinc-400 leading-relaxed">
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas on how it can be improved.
        </p>
      </header>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] mb-[48px]">
        {ProjectItems.map((project) => (
          <a
            className="flex items-center gap-x-[16px] bg-[#27272b66] border border-transparent hover:border-zinc-700 hover:border-zinc-200 p-[16px] rounded-[8px]"
            href={`/projects/${project.name}`}
          >
            <img
              alt="Currencee"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              data-nimg="1"
              className="bg-zinc-800 rounded-[10px] p-[8px] aspect-square object-cover"
              src={project.imageUrl}
            />
            <div>
              <h2 className="text-[18px] tracking-wide mb-[4px] text-white leading-[28px]">
                {project.name}
              </h2>
              <div className="text-[14px] text-zinc-400 line-clamp-2">
                {project.description}
              </div>
            </div>
          </a>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default ProjectPage;
