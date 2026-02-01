"use client";
import React from "react";
import { IconHome, IconMessage, IconUser, IconSettings } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/Riishi/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Software Projects",
      link: "/Riishi/Projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Design Projects",
      link: "/Riishi/Blogs",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
