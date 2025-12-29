"use client";
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <LampContainer >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Where Ideas Take Flight <br /> Get Lost in My Creative Kaleidoscope
        </motion.h1>
      </LampContainer>
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-gray-700 dark:bg-gray-300 p-3 mt-20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToContent}
        aria-label="Scroll down to view content"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white dark:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Hero;
