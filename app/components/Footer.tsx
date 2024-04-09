import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 right-0 bg-black p-4 flex justify-between">
      {/* logo */}
      <Link href={"/"}>
        <div className="flex items-center gap-3 text-2xl m-11">
          <button className="rounded-full bg-white w-8 h-8 text-black font-bold">
            R
          </button>
          <h1 className="font-bold text-white">Riishi</h1>
        </div>
      </Link>
      {/* social */}
      <div className="flex items-center gap-4 mr-11">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={"/github.png"}
            width={30}
            height={30}
            alt="GitHub"
            className="cursor-pointer"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/instagram.png"}
            width={30}
            height={30}
            alt="Instagram"
            className="cursor-pointer ml-4"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/linkedin.png"}
            width={30}
            height={30}
            alt="Linkedin"
            className="cursor-pointer ml-4"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/mail.png"}
            width={30}
            height={30}
            alt="Mail"
            className="cursor-pointer ml-4"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
