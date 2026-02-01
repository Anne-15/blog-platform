import { getoneDesign } from "@/app/Riishi/Blogs/Requests";
import { notFound } from "next/navigation";
import AddDesigns from "@/app/components/designs/AddDesigns";

export default async function EditBlogPage({
  params,
}: {
  params: { id: string };
}) {
  let blog;
  try {
    const res = await getoneDesign(params.id);
    blog = res.blog;
  } catch {
    notFound();
  }
  if (!blog) notFound();

  const initialData = {
    name: blog.name,
    title: blog.title,
    category: blog.category || "",
    projectType: blog.projectType || "",
    role: blog.role || "",
    industry: blog.industry || "",
    problemStatement: blog.problemStatement || "",
    description: blog.description || "",
    designLink: blog.designLink || "",
    headerimage: blog.headerimage || "",
    contentHeader: blog.contentHeader || "",
    contentHeader2: blog.contentHeader2 || "",
    content: blog.content || "",
    images: blog.images || "",
    presentationLink: blog.presentationLink || "",
    conclusion: blog.conclusion || "",
  };

  return (
    <div>
      <AddDesigns initialData={initialData} editId={blog.id} />
    </div>
  );
}
