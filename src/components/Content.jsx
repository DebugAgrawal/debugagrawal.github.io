import React from "react";

import Image from "../assets/images/DeepakCircle.png";
import SocioMark from "../assets/images/SocioMark.png";
import Infy from "../assets/images/InfosysUBS.png";
import OlafsAdventure from "../assets/images/OlafsAdventure.jpg";
import AdminPanel from "../assets/images/AdminPanel.png";
import MyInfo from "./MyInfo";
import { motion } from "framer-motion";
import { techStack } from "../utils/constants";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { CgMouse } from "react-icons/cg";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Content = () => {
  return (
    <div className="flex-col flex-1 order-1 col-span-4 md:order-none">
      <div className="container max-w-full mx-auto 2xl:max-w-6xl">
        {/*End of profile section */}
        <section
          // className="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52"
          className="min-h-[calc(100vh*0.80)] flex mb-52 justify-center"
          id="about"
        >
          <div className="flex flex-col items-center m-auto pt-6 space-x-0 space-y-7 md:space-y-0 md:space-x-7 lg:flex-row">
            <img
              className="w-64 md:mb-6 h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full shadow-inner transition-all motion-reduce:transition-none duration-500 delay-[400ms] translate-y-0 opacity-1 object-cover"
              src={Image}
              alt="Your Image"
            />
            <div className="pt-3">
              <MyInfo />
            </div>
            <a href="#skills" className="md:hidden">
              <CgMouse
                className="animate-bounce 1s h-6 w-6 "
                viewBox="0 0 24 24"
              />
            </a>
          </div>
        </section>
        {/* End of profile section */}

        {/*  Skills */}
        <section className="w-full min-h-screen" id="skills">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-5 text-3xl font-bold">
              🥷 Skills and Technologies
            </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="transition-all duration-500 delay-300 translate-y-0 gap-y-4 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 motion-reduce:transition-none opacity-1 blur-0">
            <p>
              Looking forward to solve complex problems by building efficient
              modern tech platforms using versatile tools and technologies along
              with domain knowledge of software engineering and methodologies.
              Love to build user-focused, performant web applications for
              smartphones, tablets, and desktops Using a combination of
              cutting-edge technologies and reliable open-source software .
            </p>

            <motion.div className="flex flex-wrap justify-between mt-8 text-sm font-medium text-black md:text-lg ">
              {techStack.map((el, index) => (
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                      },
                    },
                    hidden: { opacity: 1, y: 80 },
                  }}
                >
                  <div className="items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-52 bg-gray-50 md:m-4 hover:scale-125 md:w-48">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                  <div className="flex flex-col items-center w-32 px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:hidden bg-gray-50 hover:scale-125">
                    <img alt="" src={el.link} className="w-12" />
                    <h4 className="ml-4 text-md">{el.name}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* End od skills */}

        {/* Experience */}
        <section className="w-full min-h-screen" id="experience">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-2 text-3xl font-bold sm:pr-5">🛡️ Experience</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="flex flex-col mt-12 space-y-12 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">
                  Frontend Engineer
                  <p className="text-lg">Infosys - Union Bank of Switzerland</p>
                  <p className="text-sm">July 2022 - present</p>
                </h3>
                <p className="text-slate-500 text-lg dark:text-slate-300">
                  • Successfully migrated legacy codebase to ReactJS for the KDD
                  application, enhancing its UI/UX, and performance by using
                  Redux, webpack, babel and made application responsive for all
                  viewports. <br />• Improved the efficiency of platform by
                  reducing screen load time by 40% by implementing dynamic
                  bundling. <br />• Developed the UI of the Replay Module using
                  ReactJS, styling with TailwindCSS and core functionalities
                  using ES6 and Vanilla JavaScript, tested each piece of code by
                  writing unit tests with jest. <br />• Deployed the application
                  on Kubernetes using AKS and created Helm Charts for
                  orchestration for different environments
                </p>
                <p className="text-slate-500 text-base bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                  React, Javascript ,Redux, Agile, Docker
                </p>
              </div>
              <div className="order-first pb-8 lg:pb-0 lg:order-none lg:block">
                <img
                  src={Infy}
                  className="transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                  loading="lazy"
                  alt="asmi"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Experience */}

        {/* Projects */}
        <section className="w-full mt-24 min-h-screen" id="projects">
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <h1 className="pr-2 text-3xl font-bold sm:pr-5">💻 Projects</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <a
              href="https://github.com/debugagrawal"
              className="pl-2 text-sm text-right sm:pl-5 hover:text-link-color"
            >
              Visit Archive
            </a>
          </div>
          <div className="flex flex-col mt-12 space-y-12 transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">
                  SocioMark - Secured Social Media Platform
                </h3>
                <p className="text-slate-500 dark:text-slate-300">
                  • SocioMark is essentially a social media platform that lets
                  users create an account to upload and share images. Every
                  image upload is added to the user's profile and can be shared
                  with other users.
                  <br />• After uploading the image, the user's unique hash
                  created from their profile is encoded within the image. Users
                  can verify an image's copyright and see if it matches with the
                  user who uploaded the image. If the verification fails, users
                  can flag an image to be taken down, protecting the original
                  creator's copyright.
                </p>
                <p className="text-slate-500 text-base bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                  ReactJS, TailwindCSS ,FastAPI, MongoDB, OpenCV
                </p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://github.com/MLH-Fellowship/SocioMark"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <FaGithub className="svg-inline--fa fa-github h-7 w-7" />
                    </span>
                  </a>
                  <a
                    href="https://devpost.com/software/sociomark"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-8 lg:pb-0 lg:order-none lg:block">
                <a
                  href="https://devpost.com/software/sociomark"
                  target="_blank"
                >
                  <img
                    src={SocioMark}
                    className="transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="asmi"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="order-first pb-8 lg:pb-0 lg:order-none lg:block">
                <a
                  href="https://debugagrawal.itch.io/olafs-adventure/"
                  target="_blank"
                >
                  <img
                    src={OlafsAdventure}
                    className="transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Ecommerce"
                  />
                </a>
              </div>
              <div className="flex flex-col space-y-4 lg:text-right">
                <h3 className="pb-2 text-xl font-extrabold">
                  Olaf's Adventure - 2D Platformer Game
                </h3>
                <p className="text-slate-500 dark:text-slate-300">
                  Olaf's Adventures is a 2D platformer game in which Olaf is
                  lost in a frozen land and doesn't know his way back home.
                  Along his journey, he encounters snowgie, who demands him to
                  bring some candies in order to reach his destination. So in
                  this adventurous journey, he comes across yetis and fires from
                  which he has to stay away. He finds different candies—some of
                  them are sweet, but some may be poisonous. So come along in
                  this fun filled adventure of Olaf and help him reach his
                  destination!
                </p>
                <p className="text-slate-500 text-base bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                  C#, Unity Engine, WebGL
                </p>
                <div className="flex items-center space-x-6 text-slate-400 lg:justify-end">
                  <a
                    href="https://github.com/Open-Sourced-Olaf/Olafs-Adventure"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <FaGithub className="svg-inline--fa fa-github h-7 w-7" />
                    </span>
                  </a>
                  <a
                    href="https://debugagrawal.itch.io/olafs-adventure"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />

                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col transition-opacity duration-500 lg:grid lg:grid-cols-2 lg:gap-x-4 motion-reduce:transition-none opacity-1">
              <div className="flex flex-col space-y-4 text-left">
                <h3 className="pb-2 text-xl font-extrabold">
                  Admin Portal - Generic Utility Module
                </h3>
                <p className="text-slate-500 dark:text-slate-300">
                  A Generic Admin Panel Utiliy module to Monitor Transactions
                  made by Users - can filter :
                  <br />
                  • Based on A particular User ID. <br />
                  • Between a certain range of days, by using two dedicated date
                  pickers for start and end date. <br />
                  • For a Particular Branch location. <br />
                  • Based on the type of transaction. <br />
                  • Based on the status of transaction. <br />• By a combined
                  accessiblity of all above options simultaneously.
                </p>
                <p className="text-slate-500 text-base bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                  ReactJS, TailwindCSS ,ContextAPI
                </p>
                <div className="flex items-center space-x-6 text-slate-400">
                  <a
                    href="https://github.com/DebugAgrawal/AdminPanel-MahFin"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <FaGithub className="svg-inline--fa fa-github h-7 w-7" />
                    </span>
                  </a>
                  <a
                    href="https://debugagrawal.github.io/AdminPanel-MahFin/"
                    className="flex items-center space-x-2 hover:text-[#4305ba] focus:text-link-color active:text-link-color"
                    target="_blank"
                  >
                    <span className="flex items-center space-x-2">
                      <LuExternalLink className="h-7 w-7" />
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="order-first pb-8 lg:pb-0 lg:order-none lg:block">
                <a
                  href="https://debugagrawal.github.io/AdminPanel-MahFin/"
                  target="_blank"
                >
                  <img
                    src={AdminPanel}
                    className="transition-transform duration-300 ease-in-out rounded-md shadow-md hover:scale-105"
                    loading="lazy"
                    alt="Mindfaqt"
                  />
                </a>
              </div>
            </div>

            {/* Add similar div blocks for other projects */}
            <button className="px-6 py-2 mx-auto mt-10 transition duration-300 ease-in-out bg-transparent border shadow-sm w-52 border-button-color text-button-color shadow-button-color hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
              <a href="https://github.com/debugagrawal" target="_blank">
                Show More
              </a>
            </button>
          </div>
        </section>
        {/* Projects */}

        {/* Contact */}
        <section
          className="flex flex-col mt-24 w-full min-h-screen"
          id="contact"
        >
          <div className="relative flex items-center py-5 transition-all duration-500 translate-y-0 opacity-1 blur-0 motion-reduce:transition-none">
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <h1 className="px-5 text-3xl font-bold">📭 Contact</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
          </div>
          <div className="flex flex-col my-auto transition-all duration-500 delay-300 translate-y-0 motion-reduce:transition-none opacity-1 blur-0">
            <div className="mx-auto space-y-8">
              <h1 className="text-3xl font-extrabold text-center">
                Get in Touch
              </h1>
              <p className="text-slate-500 dark:text-slate-300">
                Feel free to reach out over linkedIn for a quick chat, or just
                drop an email to break the ice.
                <br />
              </p>
              <p className="text-slate-500 dark:text-slate-300">
                For further enquiries regarding collaborations / consulting /
                freelance feel free to drop a{" "}
                <a
                  href="https://t.me/debugagrawal"
                  target="_blank"
                  className=" text-slate-500 text-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent"
                >
                  DM over Telegram.
                </a>
                <br />
              </p>
              <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-5">
                <a
                  href="https://www.linkedin.com/in/debugagrawal/"
                  target="_blank"
                >
                  <button className="px-6 py-2 duration-300 bg-transparent border shadow-sm border-button-color shadow-button-color text-button-color hover:text-white hover:bg-button-color focus:bg-button-color focus:text-white active:bg-button-color active:text-white">
                    Reach Out
                  </button>
                </a>
              </div>
              {/* <div className="fixed h-[200px] w-[200px]">
                <MapContainer center={[44.96366, 19.61045]} zoom={2}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[44.96366, 19.61045]}>
                    <Popup>
                      Sloba lives here, come over for a cup of coffee :)
                    </Popup>
                  </Marker>
                </MapContainer>
              </div> */}
            </div>
          </div>
        </section>
        {/* Contact */}

        <footer className="hidden mb-5 text-center md:block">
          <a
            href="https://github.com/debugagrawal"
            className="hover:text-link-color"
            target="_blank"
          >
            Feel free to clone 👾| FOSS 💛
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Content;
