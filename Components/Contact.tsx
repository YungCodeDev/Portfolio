"use client";

import { FaEnvelope, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  //useState
  const { theme } = useTheme();

  //Texts
  const PageText = "Contact";
  const ContactPage = [
    {
      icon: <FaEnvelope size={20} />,
      name: "Email",
      text: "Contact me via email",
      contact: "yungcode.dev@gmail.com",
      link: "https://mail.google.com/mail/u/0/#search/yungcode.dev%40gmail.com?compose=new",
    },
    {
      icon: <FaPhone size={20} />,
      name: "Phone Number",
      text: "Contact me via phone",
      contact: "+381 64 5624181",
      link: "https://wa.me/381645624181",
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      text: "Follow me on Instagram",
      contact: "@yungcode.dev",
      link: "https://www.instagram.com/yungcode.dev/",
    },
    {
      icon: <FaGithub size={20} />,
      name: "Github",
      text: "Check my Github",
      contact: "@YungCodeDev",
      link: "https://github.com/YungCodeDev",
    },
  ];

  //Functions

  return (
    <div>
      <div
        className={`${
          theme ? "bg-neutral-200 " : "bg-neutral-900 "
        } min-h-screen transition-colors duration-500 ease-in-out py-10`}
      >
        <div className="flex flex-col items-center">
          {" "}
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
          <motion.div className="flex md:flex-row flex-col items-center justify-around w-full mt-40">
            <div
              className={`flex flex-col items-center gap-5 ${
                theme ? "bg-neutral-300" : "bg-neutral-800"
              } w-95 py-3 rounded-xl transition-colors duration-500 ease-in-out`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl"
              >
                Contact info!
              </motion.div>
              <div className="flex flex-col items-start gap-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl"
                >
                  Email:{" "}
                  <Link
                    href="https://mail.google.com/mail/u/0/#search/yungcode.dev%40gmail.com?compose=new"
                    target="_blank"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className={`${
                        theme ? "text-blue-400" : "text-yellow-400"
                      } transition-colors duration-500 ease-in-out hover:underline hover:underline-offset-4 cursor-pointer`}
                    >
                      yungcode.dev@gmail.com
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl"
                >
                  Location:{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={`${
                      theme ? "text-blue-400" : "text-yellow-400"
                    } transition-colors duration-500 ease-in-out`}
                  >
                    Serbia
                  </motion.span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl"
                >
                  Phone Number:{" "}
                  <Link href="https://wa.me/381645624181" target="_blank">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className={`${
                        theme ? "text-blue-400" : "text-yellow-400"
                      } transition-colors duration-500 ease-in-out hover:underline hover:underline-offset-4 cursor-pointer`}
                    >
                      +381 64 5624181
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mt-0 mt-10">
              {ContactPage.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className={`flex flex-col items-center justify-center gap-5 ${
                    theme ? "bg-neutral-300 " : "bg-neutral-800 "
                  } p-6 rounded-2xl transition-colors duration-500 ease-in-out relative shadow-lg w-70`}
                >
                  <Link href={item.link} target="_blank">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className={`p-3 rounded-xl ${
                        theme ? "bg-neutral-400" : "bg-neutral-700"
                      } transition-colors duration-500 ease-in-out absolute top-4 left-4 cursor-pointer`}
                    >
                      {item.icon}
                    </motion.div>
                  </Link>
                  <div className="text-center mt-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-xl font-semibold"
                    >
                      {item.name}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="text-sm opacity-70"
                    >
                      {item.text}
                    </motion.div>
                  </div>
                  <Link href={item.link} target="_blank">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`font-medium ${
                        theme ? "text-blue-600" : "text-yellow-400"
                      } transition-colors duration-500 ease-in-out text-center mt-4`}
                    >
                      {item.contact}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
