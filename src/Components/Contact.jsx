import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import separatorImage from "../assets/images/separator.svg";
function Contact() {
  return (
    <div className="w-full flex flex-col" id="contact">
      <p
        className="relative text-gold-crayola font-bold tracking-2 mb-[12px] text-[15px] uppercase text-center"
        id="about-label"
      >
        Contact Me
      </p>
      <img
        src={separatorImage}
        alt="separator image"
        className="w-[100px] block mx-auto my-[14px]"
      />

      <div class="grid sm:grid-cols-2 items-start gap-[6.4rem] px-[4rem]  py-[6.4rem] mx-auto max-w-[112.4rem] text-white">
        <div>
          <h1 class=" text-[3rem] font-extrabold">Let's Talk</h1>
          <p class="text-[16px] text-[#a1a1aa] mt-[1.6rem">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>

          <div class="mt-[4rem] text-[1.6rem]">
            <h2 class="text-[1.6rem] font-bold">Email</h2>
            <ul class="mt-[1.6rem]">
              <li class="flex items-center">
                <div class="bg-[#000] h-[4rem] w-[4rem] rounded-full flex items-center justify-center shrink-0">
                  <CiMail color="hsl(38, 61%, 73%)" size="20px" />
                </div>
                <a
                  href="mailto:Tamasgenfiqaadu@gmail.com"
                  class=" text-[1.4rem] ml-[1.6rem]"
                >
                  <small class="block text-[#a1a1aa]">Mail</small>
                  <strong>Tamasgenfiqaadu@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-[4.8rem]">
            <h2 class="text-white text-[1.6rem] font-bold">Socials</h2>

            <ul class="flex mt-[1.6rem] space-x-[1.6rem]">
              <li class="bg-[#000] h-[4rem] w-[4rem] rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <FaFacebook color="hsl(38, 61%, 73%)" size="20px" />
                </a>
              </li>
              <li class="bg-[#000] h-[4rem] w-[4rem] rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <CiLinkedin color="hsl(38, 61%, 73%)" size="20px" />
                </a>
              </li>
              <li class="bg-[#000] h-[4rem] w-[4rem] rounded-full flex items-center justify-center shrink-0">
                <a href="#">
                  <FaInstagram color="hsl(38, 61%, 73%)" size="20px" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form
          class="ml-auto space-y-[1.6rem]"
          action="https://formsubmit.co/06e09d805a272efb4b5537c39b43df1f"
          method="POST"
        >
          <input
            required={true}
            name="name"
            type="text"
            placeholder="Name"
            class="w-full rounded-[6px] py-[1.2rem] px-[1.6rem]  text-white text-[16px] bg-[#27272b66]  outline-none border-0"
          />
          <input
            required={true}
            name="email"
            type="email"
            placeholder="Email"
            class="w-full rounded-[6px] py-[1.2rem] px-[1.6rem]  text-white text-[1.6rem] bg-[#27272b66]  outline-none border-0"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            class="w-full rounded-[6px] py-[1.2rem] px-[1.6rem]  text-white text-[1.6rem] bg-[#27272b66]  outline-none border-0"
          />
          <textarea
            required={true}
            name="message"
            placeholder="Message"
            rows="6"
            class="w-full rounded-[6px] px-[1.6rem]  text-white text-[1.6rem] pt-[1.2rem] bg-[#27272b66]  outline-none border-0"
            draggable="false"
          ></textarea>
          <button
            className="mx-auto mt-[26px] relative text-gold-crayola text-label-2 font-bold uppercase tracking-5 w-max border-2 border-gold-crayola py-[12px] px-[45px]  overflow-hidden z-10 no-underline group block hover:bg-gold-crayola"
            type="submit"
          >
            <span className="absolute bottom-full left-1/2 translate-x-[-50%] w-[200%] h-[200%] z-[-1] bg-gold-crayola duration-2 rounded-[50%]  group-hover:bottom-[-50%] "></span>

            <span className="duration-1 block transform group-hover:translate-y-[-40px] ">
              Submit
            </span>

            <span
              className="absolute top-full left-1/2  translate-x-[-50%] group-hover:translate-x-[-50%]  group-hover:translate-y-[-50%] group-hover:top-1/2 w-max text-smoky-black-1 duration-1"
              aria-hidden="true"
            >
              Submit
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
