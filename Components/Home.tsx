"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Images1 from "@/public/Images1.jpg";
import Image from "next/image";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import ScrollTo from "./ScrollTo";

export default function Home() {
  //useState
  const { theme } = useTheme();

  //Texts
  const PageText = "Home";

  //Functions

  return (
    <div
      className={`${
        theme
          ? "bg-neutral-200 text-neutral-800"
          : "bg-neutral-900 text-neutral-200"
      } min-h-screen transition-colors duration-500 ease-in-out py-10`}
    >
      <div className="flex flex-col items-center">
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
        <motion.div
          className={`mt-10 border ${
            theme ? "border-neutral-400" : "border-neutral-700"
          } rounded-xl p-2 flex md:flex-row flex-col md:items-start items-center relative`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <Image
              src={Images1}
              alt="Images1"
              className="md:w-125 sm:w-100 w-80 rounded-xl"
            />
            <div className="hidden md:flex absolute bottom-4 right-4 gap-6">
              <motion.div
                whileHover={{ x: 2 }}
                className={`
        flex items-center gap-2 text-sm cursor-pointer
        ${theme ? "text-black/80" : "text-white/80"}
        hover:text-white transition-colors duration-500 ease-in-out
      `}
                onClick={() => ScrollTo("Contact")}
              >
                <FaPhoneAlt size={14} />
                <span className="border-b border-transparent hover:border-current">
                  Hire
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 2 }}
                className={`
        flex items-center gap-2 text-sm cursor-pointer
        ${theme ? "text-black/80" : "text-white/80"}
        hover:text-white transition-colors
      `}
              >
                <FaDownload size={14} />
                <span className="border-b border-transparent hover:border-current">
                  CV
                </span>
              </motion.div>
            </div>
            <div className="flex md:hidden gap-3 mt-4 justify-center">
              <div
                className={`
        px-5 h-10 rounded-lg text-sm flex items-center gap-2 
        ${theme ? "bg-neutral-300 text-black" : "bg-neutral-800 text-white"}
      transition-colors duration-500 ease-in-out
      `}
                onClick={() => ScrollTo("Contact")}
              >
                <FaPhoneAlt size={16} />
                Hire me
              </div>

              <div
                className={`
        px-5 h-10 rounded-lg text-sm flex items-center gap-2
        ${theme ? "bg-neutral-300 text-black" : "bg-neutral-800 text-white"}
      transition-colors duration-500 ease-in-out`}
              >
                <FaDownload size={16} />
                CV
              </div>
            </div>
          </motion.div>
          <div className="m-10">
            <div className="flex flex-col gap-5 items-start">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl"
              >
                I'm
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl"
              >
                Software Developer
              </motion.div>
            </div>
            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`w-full h-2 border ${
                theme
                  ? "border-neutral-400 bg-neutral-400"
                  : "border-neutral-700 bg-neutral-700"
              } rounded-full mt-10 mb-10`}
            />
            <div className="flex flex-col gap-5 items-start">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I'm Aleksa Dimic
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:w-100 w-70 text-center"
              >
                I build responsive, fast, and visually engaging websites and
                applications, combining modern technologies with creative design
                to bring ideas to life.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
