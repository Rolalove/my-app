import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      name: "ALTDEV",
      framework: "Nuxt.js",
      repoLink: "https://github.com/Rolalove/altdev",
      liveLink: "https://altdever.vercel.app/",
      image: "/altdev.png",
      shortDescription: "A brief overview of Project 1. This is a React-based web application with modern features.",
      fullDescription: "Project 1 is a comprehensive React-based web application that showcases modern frontend development practices. It features a responsive design, state management with Redux, and integration with a RESTful API. The project aims to solve [specific problem] by providing [key features]. Throughout the development process, I learned [key learnings] and overcame challenges such as [challenges]. The application is designed with scalability in mind and follows best practices for code organization and testing.",
      tags: ["Nuxt.js", "supabase", "Tailwindcss", "Responsive Design"],
    },
    
    {
      name: "Advice-generator",
      framework: "Next.js",
      repoLink: "https://github.com/Rolalove/ice_cream_pop",
      liveLink: "https://rolalove.github.io/ice_cream_pop/",
      image: "/ice-creampop.png",
      shortDescription: "An overview of Project 2. This is a Next.js application with server-side rendering and optimized performance.",
      fullDescription: "Project 2 leverages the power of Next.js to create a fast, SEO-friendly web application. It utilizes server-side rendering and static site generation to optimize performance and user experience. The project includes features such as [key features] and addresses the need for [specific need]. During development, I gained deep insights into [key learnings] and successfully implemented [specific implementations]. The application demonstrates best practices in Next.js development, including API routes, dynamic imports, and optimized images.",
      tags: ["Html", "CSS", "Responsive Design"],
    },
    
      {
        name: "RolaGit",
        framework: "React",
        repoLink: "https://github.com/Rolalove/altdev",
        liveLink: "https://altdever.vercel.app/",
        image: "/rolasgit.png",
        shortDescription: "A brief overview of Project 1. This is a React-based web application with modern features.",
        fullDescription: "Project 1 is a comprehensive React-based web application that showcases modern frontend development practices. It features a responsive design, state management with Redux, and integration with a RESTful API. The project aims to solve [specific problem] by providing [key features]. Throughout the development process, I learned [key learnings] and overcame challenges such as [challenges]. The application is designed with scalability in mind and follows best practices for code organization and testing.",
        tags: ["React","Tailwincss", "  GitHub API", "Responsive Design"],
      },
      
    // Add more projects as needed
  ];

  return (
    <div className="mt-32 w-full container mx-auto">
     
      <div className="px-5 gap-y-6 gap-x-6 grid lg:grid-cols-3 place-items-center lg:gap-y-10 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
// grid grid-cols-2 place-items-center items-center