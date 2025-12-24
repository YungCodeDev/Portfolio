"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import coding1 from "@/public/coding1.jpg";
import coding2 from "@/public/coding2.jpg";
import coding3 from "@/public/coding3.jpg";
import Image from "next/image";
import { useState } from "react";
import { FaArrowDown, FaDownload, FaLink, FaPhoneAlt } from "react-icons/fa";
import ScrollTo from "./ScrollTo";
import Link from "next/link";

export default function About() {
  //useState
  const { theme } = useTheme();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  //Texts
  const PageText = "About";
  const TextBox = [
    "Hello, I'm Aleksa Dimic, and I am a software developer. I build professional, modern, and responsive websites and applications, combining modern technologies with creative design to bring ideas to life.",
    "I started my career as a web developer. I am 15 years old and started in July 2025. I am a self-taught developer with experience in frontend, backend, and full-stack development.",
    "I love coding and building websites and applications. What fulfills me the most is transforming ideas into real products and constantly pushing my skills to the next level.",
  ];
  const images = [
    {
      id: 1,
      image: coding1,
      name: "Lagana Lova",
      link: "https://lagana-lova.vercel.app/",
    },
    {
      id: 2,
      image: coding2,
      name: "Titan Games",
      link: "https://titangames.vercel.app/",
    },
    {
      id: 3,
      image: coding3,
      name: "Today XI",
      link: "https://today-xi.vercel.app/",
    },
  ];

  //Functions

  return (
    <div>
      <div
        className={`flex flex-col items-center ${
          theme
            ? " bg-neutral-100 text-neutral-800"
            : "bg-neutral-950 text-neutral-200"
        } min-h-screen transition-colors duration-500 ease-in-out py-10`}
      >
        <motion.div
          className="flex items-center gap-1 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        <div>
          <motion.div
            className={`${
              theme ? "bg-neutral-200" : "bg-neutral-800"
            } p-5 rounded-xl flex flex-col items-center gap-10 mt-10 transition-colors duration-500 ease-in-out`}
          >
            {TextBox.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="md:w-120 w-70">{item}</div>
                <div
                  className={`w-full h-1 border ${
                    theme
                      ? "border-neutral-400 bg-neutral-400"
                      : "border-neutral-700 bg-neutral-700"
                  } rounded-full transition-colors duration-500 ease-in-out`}
                />
              </motion.div>
            ))}
            <div className="flex items-center gap-10">
              <motion.div
                className={`flex items-center justify-center gap-2 p-4 ${
                  theme ? "bg-neutral-300" : "bg-neutral-900"
                } rounded-xl cursor-pointer transition-colors duration-500 ease-in-out`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                CV
                <FaDownload size={15} />
              </motion.div>
              <motion.div
                className={`flex items-center justify-center gap-2 p-4 ${
                  theme ? "bg-neutral-300" : "bg-neutral-900"
                } rounded-xl cursor-pointer transition-colors duration-500 ease-in-out`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => ScrollTo("Contact")}
              >
                Hire me!
                <FaPhoneAlt size={15} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl"
          >
            Sneak peek
          </motion.div>
          <motion.div className="flex md:flex-row flex-col items-center gap-5">
            {images.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={item.image}
                  alt=""
                  className={`
                    md:w-100 w-70 rounded-2xl
                    transition-all duration-300
                    ${
                      hoveredId && hoveredId !== item.id
                        ? "blur-sm scale-95"
                        : ""
                    }
                    ${hoveredId === item.id ? "z-50 scale-105" : "z-10"}
                    `}
                />
                <AnimatePresence>
                  {hoveredId && hoveredId === item.id && (
                    <div>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute -top-2 -left-2.5 rounded-2xl border-r border-b border-neutral-400 text-neutral-800 bg-neutral-400 p-5"
                      >
                        {item.name}
                      </motion.div>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Link
                          className="absolute -bottom-2 -right-2.5 rounded-2xl border-r border-b border-neutral-400 text-neutral-800 bg-neutral-400 p-5 flex items-center gap-2"
                          href={item.link}
                          target="_blank"
                        >
                          View <FaLink size={15} />
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => ScrollTo("Project")}
              className={`flex items-center justify-center gap-2 p-4 ${
                theme ? "bg-neutral-200" : "bg-neutral-800"
              } rounded-xl cursor-pointer transition-colors duration-500 ease-in-out`}
            >
              View Project{" "}
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowDown size={15} />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
