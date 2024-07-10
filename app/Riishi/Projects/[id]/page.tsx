import React from "react";
import { getoneProject } from "../Requests";
import ProjectPage from "@/app/components/projects/ProjectPage";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = await getoneProject(id);
  return <ProjectPage project={project} />;
};

export default page;
