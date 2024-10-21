"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type ProjectCardProps = {
  name: string;
  framework: string;
  repoLink: string;
  liveLink: string;
  image: string;
  shortDescription: string;
  technologyStack: string[];
  keyFeatures: string[];
  overview: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  framework,
  repoLink,
  liveLink,
  image,
  shortDescription,
  technologyStack,
  keyFeatures,
  overview,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-[#B05555] transition-all duration-300 w-full max-w-sm">
        <div className="h-48 relative">
          <Image
            src={image}
            alt={`Screenshot of ${name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            {name}
            <span className="ml-2">
              {/* Framework icon can be added here if needed */}
            </span>
          </h3>
          <p className="text-gray-600 mb-2 text-sm">{framework}</p>
          <p className="text-gray-700 mb-4 text-sm line-clamp-3">
            {shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#B05555] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8a4141] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B05555] focus:ring-opacity-50"
            >
              Read More
            </button>
            <div className="flex space-x-4">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B05555] transition-colors"
              >
                <Icon icon="mdi:github" width="24" height="24" />
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B05555] transition-colors"
              >
                <Icon icon="mdi:external-link" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon icon="mdi:close" width="24" height="24" />
              </button>
            </div>
            <div className="mb-4">
              <Image
                src={image}
                alt={`Screenshot of ${name}`}
                width={600}
                height={300}
                layout="responsive"
                className="contain md:cover"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-700">{overview}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
              <ul className="list-disc list-inside">
                {technologyStack.map((tech, index) => (
                  <li key={index} className="text-gray-700">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B05555] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8a4141] transition-colors"
              >
                View Repository
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B05555] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8a4141] transition-colors"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
