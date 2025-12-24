"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Link from "next/link";
import { FaEye, FaPhoneAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ScrollTo from "./ScrollTo";

export default function Project() {
  //useState
  const { theme } = useTheme();

  //Texts
  const PageText = "Project";
  const Project = [
    {
      id: 1,
      role: "Frontend Developer",
      name: "Lagana Lova",
      description:
        "Lagana Lova is a reselling-focused website that helps people start and grow an online reselling business. It provides access to suppliers, basic guidance, and insights on how to sell products using social media and online platforms",
      link: "https://lagana-lova.vercel.app/",
      githublink: "https://github.com/YungCodeDev/laganalova",
      language: ["NextJS", "TailwindCSS", "Framer Motion"],
    },
    {
      id: 2,
      role: "Frontend + Backend Developer",
      name: "Today XI",
      description:
        "Today XI is a modern landing page-style web project deployed on Vercel. It showcases a clean, responsive layout that can be used as a promotional or informational site. The project emphasizes simple navigation and modern UI design, suitable for presenting services, products, or app features online.",
      link: "https://today-xi.vercel.app/",
      githublink: "https://github.com/YungCodeDev/Today",
      language: ["NextJS", "TailwindCSS", "Framer Motion", "Supabase"],
    },
    {
      id: 3,
      role: "Full Web Developer",
      name: "Titan Games",
      description:
        "Titan Games is an online game store platform with a simple storefront layout where users can browse and purchase gaming products. The site features basic navigation options such as Store, Support, Contact, and FAQ, and displays accepted payment methods including PayPal, credit card, and bank transfer.",
      link: "https://lagana-lova.vercel.app/",
      githublink: "https://github.com/YungCodeDev/Titan",
      language: ["NextJS", "TailwindCSS", "Framer Motion", "Supabase"],
    },
  ];

  //Functions

  return (
    <div
      className={`${
        theme ? "bg-neutral-200" : "bg-neutral-900"
      } min-h-screen transition-colors duration-500 ease-in-out py-10`}
    >
      <div className="flex flex-col items-center gap-10">
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
          <motion.div className="flex flex-col items-center gap-25">
            <motion.div>My Previous Projects</motion.div>
            <motion.div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
              {Project.map((item) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  key={item.id}
                  className={`border ${
                    theme ? "border-neutral-400" : "border-neutral-700"
                  } rounded-xl p-5 flex flex-col items-center gap-5 relative`}
                >
                  <motion.div
                    animate={{ y: [0, 5, 0], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -top-7  border ${
                      theme
                        ? "border-neutral-400 bg-neutral-400 text-neutral-800"
                        : "border-neutral-700 bg-neutral-700 text-neutral-200"
                    } rounded-xl p-2 flex items-center gap-2`}
                  >
                    <div>{item.role}</div>
                  </motion.div>
                  <div>{item.name}</div>
                  <div className="md:w-120 w-70 text-center">
                    {item.description}
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div>Language Used: </div>
                    <div className="mb-10 flex md:flex-row flex-col items-center gap-2">
                      {item.language.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-opacity-30 hover:bg-opacity-50 cursor-default transition-all duration-200"
                        >
                          <div
                            className={`p-2 rounded-xl flex flex-wrap gap-2 justify-start transition-colors duration-500 ease-in-out
                      ${
                        theme
                          ? "bg-linear-to-r from-neutral-300 via-neutral-200 to-neutral-100 text-neutral-800 shadow-md hover:shadow-lg"
                          : "bg-linear-to-r from-neutral-800 via-neutral-700 to-neutral-600 text-neutral-100 shadow-md hover:shadow-lg"
                      }`}
                          >
                            {lang}
                          </div>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="absolute left-5 bottom-2"
                    >
                      <motion.div
                        className={`border ${
                          theme
                            ? "border-neutral-400 bg-neutral-400"
                            : "border-neutral-700 bg-neutral-700"
                        } rounded-xl p-2 flex items-center gap-2 transition-colors duration-500 ease-in-out`}
                      >
                        View Site <FiExternalLink size={15} />
                      </motion.div>
                    </Link>
                    <Link
                      href={item.githublink}
                      target="_blank"
                      className="absolute right-5 bottom-2"
                    >
                      <div
                        className={`border ${
                          theme
                            ? "border-neutral-400 bg-neutral-400"
                            : "border-neutral-700 bg-neutral-700"
                        } rounded-xl p-2 flex items-center gap-2 transition-colors duration-500 ease-in-out`}
                      >
                        View Demo <FaEye size={15} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div
          className={`border-t-3 ${
            theme ? "border-neutral-400" : "border-neutral-800"
          } w-full mt-10 transition-colors duration-500 ease-in-out`}
        />
        <div className="flex flex-col items-center text-center gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl"
          >
            Interested in working together?
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl"
          >
            I’m always open to new projects, ideas and collaborations.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${
              theme ? "bg-neutral-300" : "bg-neutral-800"
            } p-5 rounded-xl cursor-pointer flex items-center gap-2 transition-colors duration-500 ease-in-out mt-10`}
            onClick={() => ScrollTo("Contact")}
          >
            Hire me <FaPhoneAlt size={20} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
