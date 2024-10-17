import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { SkeletonOne, SkeletonThree, SkeletonTwo } from "./Requests";

const ProjectContent = ({ softwaredata }: { softwaredata: any }) => {
  const projectitem = softwaredata?.projects;
  const sortedProjects = projectitem?.sort((a:any, b:any) => {
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
            key={i}
            title={item.title}
            description={item.desc}
            header={headers[i % headers.length].header}
            className={classes[i % classes.length].className}
            icon={icons[i % icons.length].icon}
            link={`/Riishi/Projects/${item.id}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectContent;

const headers = [
  {
    id: 1,
    header: (
      <span>
        {" "}
        <SkeletonOne />
      </span>
    ),
  },
  {
    id: 2,
    header: (
      <span>
        {" "}
        <SkeletonThree />
      </span>
    ),
  },
  {
    id: 3,
    header: (
      <span>
        {" "}
        <SkeletonTwo />
      </span>
    ),
  },
  {
    id: 4,
    header: (
      <span>
        {" "}
        <SkeletonOne />
      </span>
    ),
  },
];

const classes = [
  {
    id: 1,
    className: "md:col-span-2",
  },
  {
    id: 2,
    className: "md:col-span-1",
  },
  {
    id: 3,
    className: "md:col-span-1",
  },
  {
    id: 4,
    className: "md:col-span-2",
  },
];

const icons = [
  {
    id: 1,
    icon: (
      <span>
        <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
  {
    id: 2,
    icon: (
      <span>
        <IconFileBroken className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
  {
    id: 3,
    icon: (
      <span>
        <IconSignature className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
  {
    id: 4,
    icon: (
      <span>
        <IconTableColumn className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
];