'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

type ProjectCardProps = {
  name: string;
  framework: string;
  repoLink: string;
  liveLink: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
};

// type frameworkIcons = {
//     React: {
//         icon: string;
//         color: string;
//     };
//     Vue: {
//         icon: string;
//         color: string;
//     };
//     Angular: {
//         icon: string;
//         color: string;
//     };
//     'Next.js': {
//         icon: string;
//         color: string;
//     };
//     'Nuxt.js': {
//         icon: string;
//         color: string;
//     }
// }
// const frameworkIcons = {
//   React: { icon: 'logos:react', color: 'text-blue-500' },
//   Vue: { icon: 'logos:vue', color: 'text-green-500' },
//   Angular: { icon: 'logos:angular-icon', color: 'text-red-500' },
//   'Next.js': { icon: 'logos:nextjs-icon', color: 'text-black' },
//   'Nuxt.js': {icon: 'skill-icons:nuxtjs-dark', color: 'text-black' },
// };

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  framework,
  repoLink,
  liveLink,
  image,
  shortDescription,
  fullDescription,
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
              {/* {frameworkIcons[framework] && (
                <Icon icon={frameworkIcons[framework].icon} className={frameworkIcons[framework].color} width="24" height="24" />
              )} */}
            </span>
          </h3>
          <p className="text-gray-600 mb-2 text-sm">{framework}</p>
          <p className="text-gray-700 mb-4 text-sm line-clamp-3">{shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
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
              <Image className='contain md:cover'
                src={image}
                alt={`Screenshot of ${name}`}
                width={600}
                height={300}
                layout="responsive"
                
              />
            </div>
            <p className="text-gray-700 mb-4">{fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
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

      {/* Modal code remains the same */}
    </>
  );
};

export default ProjectCard;