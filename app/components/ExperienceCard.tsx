import React from "react";

interface ExperienceCardProps {
  companyName: string;
  jobTitle: string;
  dates: string;
  description: string[];
  skills: string[];
}

const ExperienceCard = ({
  companyName,
  jobTitle,
  dates,
  description,
  skills,
}: ExperienceCardProps) => {
  const Tag = ({ tag }: { tag: string }) => {
    return (
      <h2 className="bg-black text-white rounded-md text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">
        {tag}
      </h2>
    );
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <div className="flex justify-between my-4">
        <div>
          <p className="text-lg font-medium">{companyName}</p>
          <p className="leading-loose tracking-widest text-slate-800 dark:text-slate-300">
            {jobTitle}
          </p>
        </div>
        <div className="text-sm text-neutral-900 dark:text-neutral-300">
          <p>{dates}</p>
        </div>
      </div>

      <ul className="leading-loose tracking-wide list-disc px-4">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="my-4 flex flex-row items-center gap-2">
        Skills:
        <div className="my-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill} tag={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
