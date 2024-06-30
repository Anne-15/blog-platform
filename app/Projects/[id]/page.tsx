import React from "react";
import ProjectPage from "@/app/components/projects/ProjectPage";
import { getoneProject } from "../Requests";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = await getoneProject(id);
  return <ProjectPage project={project} />;
};

export default page;
