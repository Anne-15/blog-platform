import { getoneProject } from "@/app/Riishi/Projects/Requests";
import { notFound } from "next/navigation";
import AddProject from "@/app/components/projects/AddProject";

export default async function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  let project;
  try {
    const res = await getoneProject(params.id);
    project = res.project;
  } catch {
    notFound();
  }
  if (!project) notFound();

  const initialData = {
    name: project.name,
    title: project.title,
    desc: project.desc,
    headerimage: project.image,
    backgroundInfo: project.backgroundInfo || "",
    objectives: project.objectives || "",
    functionaliy: project.functionaliy || "",
    designs: project.designs || "",
    github: project.github || "",
    url: project.siteurl || "",
    conclusion: project.conclusion || "",
  };

  return (
    <div>
      <AddProject initialData={initialData} editId={project.id} />
    </div>
  );
}
