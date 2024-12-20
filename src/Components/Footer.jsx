import React from "react";

function Footer() {
  return (
    <footer class="border-t border-zinc-800 mt-44 lg:min-h-[250px] min-h-full relative text-[16px]">
      <div class="max-w-[128rem] mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-[1.6rem] md:px-[6.4rem] px-[2.4rem] py-[6.4rem] text-[1.6rem]">
        <div class="flex md:flex-row flex-col items-center gap-x-[16px]">
          <h3 class="font-inter text-[16px] text-white">Built with:</h3>
          <ul class="flex items-center gap-x-[20px] text-sm text-zinc-600  md:mt-0 mt-[12px]">
            <li>
              <a
                href="https://react.dev/"
                rel="noreferrer noopener"
                target="_blank"
                class="flex items-center gap-x-[8px] text-white  hover:underline text-[16px]"
              >
                <img
                  alt="ReactJs Logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  //   style="color:transparent"
                  src="https://www.devtopics.com/wp-content/uploads/2023/01/React-icon.svg_.png"
                />{" "}
                ReactJS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                rel="noreferrer noopener"
                target="_blank"
                class="flex items-center gap-x-[8px] text-white hover:underline text-[16px]"
              >
                <img
                  alt="tailwindcss logo"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  //   style="color:transparent"
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                />{" "}
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col lg:items-end items-center lg:text-start text-center ">
          <small class="text-zinc-500 text-[14px]">
            Copyright © Temesgen Fikadu 2023 All rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
