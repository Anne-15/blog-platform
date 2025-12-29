import React from "react";
import { Metadata } from "next";
import { getoneProject } from "../Requests";
import ProjectPage from "@/app/components/projects/ProjectPage";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const project = await getoneProject(params.id);
    const item = project?.project;
    
    if (!item) {
      return {
        title: "Project Not Found",
        description: "The requested project could not be found.",
      };
    }

    const description = item.desc?.substring(0, 160) || item.title;
    const imageUrl = item.image || "/landscape.jpg";

    return {
      title: item.name || item.title,
      description: description,
      openGraph: {
        title: item.name || item.title,
        description: description,
        images: [imageUrl],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: item.name || item.title,
        description: description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    return {
      title: "Project",
      description: "View project details",
    };
  }
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = await getoneProject(id);
  return <ProjectPage project={project} />;
};

export default page;
