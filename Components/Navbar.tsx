"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  FaArrowDown,
  FaArrowUp,
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import ScrollTo from "./ScrollTo";
import Link from "next/link";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Scrollbar from "./Scrollbar";
import Footer from "./Footer";

export default function Navbar() {
  //useState
  const { theme } = useTheme();
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);
  const [ScrollTop, setScrollTop] = useState(false);
  const [visibleNav, setVisibleNav] = useState(false);
  const [FollowMenu, setFollowMenu] = useState(false);
  const lastScrollY = useRef(0);

  //Texts
  const NavBarMenu = [
    { name: "Home" },
    { name: "About" },
    { name: "Project" },
    { name: "Skills" },
    { name: "Contact" },
  ];
  const FollowMe = [
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/yungcode.dev/",
    },
    {
      name: "Tiktok",
      icon: <FaTiktok size={20} />,
      link: "https://www.tiktok.com/@yungcode.dev",
    },
    {
      name: "Github",
      icon: <FaGithub size={20} />,
      link: "https://github.com/YungCodeDev",
    },
    {
      name: "Youtube",
      icon: <FaYoutube size={20} />,
      link: "https://www.youtube.com/@YungCode_dev",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      link: "https://x.com/YungCode_dev",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/yung-code-787ba139a/",
    },
  ];

  //Functions

  function ScrollToTop() {
    if (window.scrollY > 100) {
      setScrollTop(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setScrollTop(false);
    }
    setActive("Home");
  }

  useEffect(() => {
    const Visible = () => {
      setScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", Visible);
    Visible();

    return () => window.removeEventListener("scroll", Visible);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisibleNav(true);
      }
      if (lastScrollY.current - currentScrollY > 5) {
        setVisibleNav(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${theme ? "text-neutral-800" : "text-neutral-200"}`}>
      <Scrollbar />
      {/*FollowMe*/}
      <AnimatePresence mode="wait">
        <motion.div className="fixed top-1/2 left-0 z-100">
          <motion.div
            className={`w-8 h-8 ${
              theme
                ? "bg-neutral-400 text-neutral-800"
                : "bg-neutral-800 text-neutral-400"
            } rounded-r-full flex items-center justify-center cursor-pointer relative transition-colors duration-500 ease-in-out`}
            onClick={() => setFollowMenu(!FollowMenu)}
            animate={FollowMenu ? { x: 220, y: 10 } : { x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {FollowMenu ? (
              <FaChevronLeft size={20} />
            ) : (
              <FaChevronRight size={20} />
            )}
          </motion.div>
          <motion.div>
            {FollowMenu && (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`${
                  theme
                    ? "bg-neutral-400 text-neutral-800"
                    : "bg-neutral-800 text-neutral-400"
                } w-50 h-max pb-5 pt-5 absolute top-0 left-5 flex flex-col items-center gap-4 rounded-xl transition-colors duration-500 ease-in-out`}
              >
                <div>Follow me on: </div>
                <div className="flex flex-col items-center gap-4">
                  {FollowMe.map((item, index) => (
                    <Link key={index} href={item.link} target="_blank">
                      <motion.div
                        className={`flex items-center gap-3 w-40 cursor-pointer`}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          {item.icon}
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          {item.name}
                        </motion.div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/*ScrollTop*/}
      <motion.div>
        <AnimatePresence mode="wait">
          {" "}
          {ScrollTop && (
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                theme
                  ? "bg-neutral-400 text-neutral-800"
                  : "bg-neutral-800 text-neutral-200"
              } fixed bottom-5 left-5 z-100 w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-colors duration-500 ease-in-out`}
              onClick={ScrollToTop}
            >
              <FaArrowUp size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/*NavBar*/}
      <motion.div
        animate={{ y: visibleNav ? -100 : 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 right-0 z-100 w-full ${
          theme
            ? "bg-neutral-300 text-neutral-800"
            : "bg-neutral-800 text-neutral-200"
        } h-20 flex items-center justify-between transition-colors duration-500 ease-in-out rounded-b-3xl`}
      >
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="ml-5 text-xl"
        >
          Aleksa Dimic
        </motion.div>
        <div className="md:flex hidden">
          <motion.div
            className={`flex items-center gap-5 mr-5 p-1 ${
              theme ? "bg-neutral-400" : "bg-neutral-700"
            } rounded-full cursor-pointer transition-colors duration-500 ease-in-out`}
          >
            {NavBarMenu.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  ScrollTo(item.name);
                  setActive(item.name);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    className={`p-3 ${
                      active === item.name
                        ? theme
                          ? "bg-neutral-800 text-neutral-200 shadow-neutral-800"
                          : "bg-neutral-200 text-neutral-800 shadow-neutral-300"
                        : ""
                    } shadow-xl rounded-full cursor-pointer w-30 flex items-center justify-center`}
                    animate={{
                      scale: active === item.name ? 1 : 0.7,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  >
                    {item.name}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="md:hidden">
          <motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-8 h-8 rounded-full z-100 ${
                  theme ? "bg-neutral-400" : "bg-neutral-700"
                } flex items-center justify-center mr-5 transition-colors duration-500 ease-in-out`}
              >
                {menu ? (
                  <></>
                ) : (
                  <FaBars size={18} onClick={() => setMenu(true)} />
                )}
              </motion.div>
            </AnimatePresence>
            {menu && (
              <div
                className={`flex items-center flex-col justify-center gap-5 fixed inset-0 backdrop-blur-md ${
                  theme ? "bg-neutral-400" : "bg-neutral-800"
                }`}
              >
                {NavBarMenu.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => {
                      ScrollTo(item.name);
                      setActive(item.name);
                      setMenu(false);
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        className={`p-3 ${
                          active === item.name
                            ? theme
                              ? "bg-neutral-800 text-neutral-200 shadow-neutral-800"
                              : "bg-neutral-200 text-neutral-800 shadow-neutral-300"
                            : ""
                        } shadow-xl rounded-full cursor-pointer w-30 flex items-center justify-center`}
                        animate={{
                          scale: active === item.name ? 1 : 0.7,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      >
                        {item.name}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                ))}
                <div
                  className={`absolute top-6 right-5 w-8 h-8 rounded-full z-100 ${
                    theme ? "bg-neutral-400" : "bg-neutral-700"
                  } flex items-center justify-center`}
                >
                  <FaX size={18} onClick={() => setMenu(false)} />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
      {/* Comp */}
      <div id="Home">
        <Home />
      </div>
      <div />
      <div id="About">
        <About />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
