import DesignProjects from "@/app/components/designs/DesignProjects";
import React from "react";
import { alldesigns } from "./Requests";

const Blogs = async() => {
  const designs = await alldesigns();
  return (
      <div>
        <DesignProjects designs={designs}/>
      </div>
  );
};

export default Blogs;
