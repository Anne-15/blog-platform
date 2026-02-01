import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { IconArrowUpRight } from "@tabler/icons-react";

const gridClasses = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const ProjectContent = ({ softwaredata }: { softwaredata: any }) => {
  const projectitem = softwaredata?.projects;
  const sortedProjects = projectitem?.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return (
    <div className="mx-auto">
      <div className="pt-8 text-center space-y-2">
        <p className="font-bold md:text-4xl">Software Engineering Projects</p>
        <p className="text-sm">
          Find all my projects here. As I take you through my thought process
          and execution.
        </p>
        <p className="text-sm italic font-semibold">
          It's not perfect but its authentic
        </p>
      </div>
      <BentoGrid className="max-w-7xl md:auto-rows-[20rem] my-8">
        {sortedProjects.map((item: any, i: number) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.desc}
            header={
              <div className="relative w-full h-full min-h-[10rem] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={item.image || "/landscape.jpg"}
                  alt={item.name || item.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={i < 4 ? "eager" : "lazy"}
                />
              </div>
            }
            className={gridClasses[i % gridClasses.length]}
            icon={
              <span className="text-neutral-500 group-hover/bento:text-purple-500 transition-colors">
                <IconArrowUpRight className="h-4 w-4" />
              </span>
            }
            link={`/Riishi/Projects/${item.id}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectContent;