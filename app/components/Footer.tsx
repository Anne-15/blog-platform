import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src={"/footer-grid.svg"}
          alt={"footer"}
          layout="fill"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="heading text-3xl font-bold lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href="mailto:wariiyu.nduati@gmail.com">
          <MagicButton title={"Let's Get in Touch"} />
        </a>
      </div>
      <div className="flex m-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light flex items-center gap-4">
          <ThemeToggle />
          Copyright © 2024 Anne Wariiyu
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {/* {socialMedia.length === 0 ? (
            <div>No data</div>
          ) : (
            socialMedia.map((social) => (
              <div
                key={social.id}
                className="w-10 h-10 cursor-pointer flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.src}
                    width={20}
                    height={20}
                    alt="Linkedin"
                    className="cursor-pointer ml-4"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
            ))
          )} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
