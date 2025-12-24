"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import ScrollTo from "./ScrollTo";

export default function Skills() {
  //useState
  const { theme } = useTheme();

  //Texts
  const PageText = "Skills";
  const Languages = [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }];

  const Frameworks = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "TailwindCSS" },
    { name: "ShadcnUI" },
    { name: "Framer Motion" },
  ];

  const Databases = [
    { name: "Firebase" },
    { name: "Supabase" },
    { name: "PostgreSQL" },
  ];

  const Tools = [
    { name: "Git" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Vercel" },
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
          <div className="flex flex-col items-center gap-10 mt-10">
            <div className="text-2xl">Languages: </div>
            <div className="flex md:flex-row flex-col items-center gap-5">
              {Languages.map((lang, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={lang.name}
                  className={`w-40 ${
                    theme ? "bg-neutral-400" : "bg-neutral-800"
                  } flex items-center gap-2 justify-center rounded-lg p-2 text-lg cursor-pointer transition-colors duration-500 ease-in-out`}
                >
                  <div>{lang.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:gap-50 gap-20 mt-20">
            <div className="flex flex-col items-center gap-10 mt-10">
              <div className="text-2xl">Frameworks: </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {Frameworks.map((lang, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={lang.name}
                    className={`w-40 ${
                      theme ? "bg-neutral-400" : "bg-neutral-800"
                    } flex items-center gap-2 justify-center rounded-lg p-2 text-lg cursor-pointer transition-colors duration-500 ease-in-out`}
                  >
                    <div>{lang.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-10 mt-10">
              <div className="text-2xl">Databases: </div>
              <div className="flex md:flex-row flex-col  items-center gap-5">
                {Databases.map((lang, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={lang.name}
                    className={`w-40 ${
                      theme ? "bg-neutral-400" : "bg-neutral-800"
                    } flex flex-col items-center gap-2 justify-center rounded-lg p-2 text-lg cursor-pointer transition-colors duration-500 ease-in-out`}
                  >
                    <div>{lang.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 mt-20">
            <div className="text-2xl">Other Tools: </div>
            <div className="flex md:flex-row flex-col  items-center gap-5">
              {Tools.map((lang, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={lang.name}
                  className={`w-40 ${
                    theme ? "bg-neutral-400" : "bg-neutral-800"
                  } flex flex-col items-center gap-2 justify-center rounded-lg p-2 text-lg cursor-pointer transition-colors duration-500 ease-in-out`}
                >
                  <div>{lang.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`border-t-3 ${
            theme ? "border-neutral-400" : "border-neutral-800"
          } w-full mt-10`}
        />
        <div className="flex flex-col items-center text-center gap-5 mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            Interested in working together?
          </motion.div>
          <motion.div
            className={`p-4 rounded-xl text-lg ${
              theme ? "bg-neutral-300" : "bg-neutral-800"
            } cursor-pointer flex items-center gap-2 transition-colors duration-500 ease-in-out`}
            onClick={() => ScrollTo("Contact")}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hire me <FaPhoneAlt size={20} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
