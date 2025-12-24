"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { FaRegLightbulb, FaSnowflake, FaSun } from "react-icons/fa";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
            theme ? "shadow-yellow-400" : "shadow-neutral-600"
          } relative cursor-pointer`}
          onClick={() => setTheme(!theme)}
        >
          <motion.div
            className={`${theme ? "text-yellow-600" : "text-neutral-200"}`}
          >
            <FaRegLightbulb size={20} />
          </motion.div>
        </motion.div>
        <motion.div
          key={theme ? "sun" : "moon"}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`w-1 h-1 ${
              theme ? "bg-neutral-600" : "bg-neutral-600"
            } rounded-full mt-4`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
