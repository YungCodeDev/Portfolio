"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import ScrollTo from "./ScrollTo";
import Link from "next/link";

export default function Footer() {
  //useState
  const { theme } = useTheme();

  //Texts
  const PageText = "Footer";
  const SocialMedia = [
    {
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/yungcode.dev/",
    },

    {
      icon: <FaTiktok size={20} />,
      link: "https://www.tiktok.com/@yungcode.dev",
    },
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/YungCodeDev",
    },
    {
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/yung-code-787ba139a/",
    },

    {
      icon: <FaTwitter size={20} />,
      link: "https://x.com/YungCode_dev",
    },
    {
      icon: <FaYoutube size={20} />,
      link: "https://www.youtube.com/@YungCode_dev",
    },
  ];

  //Functions

  return (
    <div>
      <div
        className={`border-t-5 ${
          theme
            ? "border-neutral-400 bg-neutral-400 text-neutral-800"
            : "border-neutral-800 bg-neutral-800 text-neutral-200"
        } w-full py-5 flex items-center flex-col gap-10 transition-colors duration-500 ease-in-out`}
      >
        <motion.div className="flex gap-1">
          {PageText.split("").map((char, index) => (
            <motion.div
              whileHover={{ y: -5, rotate: 10 }}
              key={index}
              className="text-2xl"
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
        <div className="flex md:flex-row flex-col items-center justify-around w-full md:gap-0 gap-10">
          <div className="flex items-center flex-col gap-2">
            <div className="text-2xl">Software Developer</div>
            <div className="text-xl w-50 text-center">
              Creating beautiful and modern web and mobile apps
            </div>
          </div>
          <div className="flex items-center flex-col gap-2">
            <div className="text-2xl">Links</div>
            <div className="text-lg">
              <div
                onClick={() => ScrollTo("Home")}
                className="hover:underline hover:underline-offset-4 cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => ScrollTo("About")}
                className="hover:underline hover:underline-offset-4 cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => ScrollTo("Project")}
                className="hover:underline hover:underline-offset-4 cursor-pointer"
              >
                Project
              </div>
              <div
                onClick={() => ScrollTo("Skills")}
                className="hover:underline hover:underline-offset-4 cursor-pointer"
              >
                Skills
              </div>
              <div
                onClick={() => ScrollTo("Contact")}
                className="hover:underline hover:underline-offset-4 cursor-pointer"
              >
                Contact
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col gap-2">
            <div className="text-2xl">Social Media</div>
            <div className="text-lg grid grid-cols-3 gap-2 mt-10">
              {SocialMedia.map((item, index) => (
                <Link key={index} href={item.link} target="_blank">
                  <div
                    key={index}
                    className={`${
                      theme ? "bg-neutral-300" : "bg-neutral-900"
                    } p-2 rounded-xl flex items-center gap-2 transition-colors duration-500 ease-in-out cursor-pointer`}
                  >
                    <div>{item.icon}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`border-t-3 ${
            theme ? "border-neutral-300" : "border-neutral-900"
          } w-[70%] transition-colors duration-500 ease-in-out`}
        />
        <div>©{new Date().getFullYear()} All rights reserved.</div>
      </div>
    </div>
  );
}
