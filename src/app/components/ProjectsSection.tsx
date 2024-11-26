import ProjectCard from "./ProjectCard";

const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      name: "ALTDEV",
      framework: "Nuxt.js",
      repoLink: "https://github.com/Rolalove/altdev",
      liveLink: "https://altdever.vercel.app/",
      image: "/altdev.png",
      shortDescription:
        "Altdev is a robust content platform built using Nuxt.js, a popular Vue.js framework for server-side rendering (SSR).",
      overview:
        "Altdev is a comprehensive content platform that leverages modern web technologies to provide a seamless user experience for content creation and management.",
      technologyStack: [
        "Nuxt.js: The primary framework for building the project, offering SSR and other benefits.",
        "Tailwind CSS: A utility-first CSS framework for rapid styling and customization.",
        "Supabase: A backend-as-a-service (BaaS) platform used for authentication and other backend functionalities.",
      ],
      keyFeatures: [
        "Markdown Editor: Enables users to create and format rich text content using Markdown syntax.",
        "Article Posting: Allows users to publish articles on the platform, making their content accessible to others.",
        "Search Functionality: Provides a search feature to help users discover articles based on keywords or topics.",
        "Like, Comment, and Share: Facilitates user interaction and engagement through like, comment, and share buttons.",
      ],
      tags: ["Nuxt.js", "Supabase", "Tailwind CSS", "Responsive Design"],
    },
    {
      name: "RolaGit",
      framework: "React",
      repoLink: "https://github.com/Rolalove/rolagit",
      liveLink: "https://rolagit.vercel.app/",
      image: "/rolasgit.png",
      shortDescription:
        "A GitHub profile viewer built with React and the GitHub API.",
      overview:
        "Rolas GitHub Profile Viewer project is a web application built using React, a popular JavaScript library for building user interfaces. It leverages the GitHub API to fetch and display information about GitHub users, providing a convenient way to explore profiles and their contributions.",
      technologyStack: ["React", "Tailwind CSS", "GitHub API", "Axios"],
      keyFeatures: [
        "Display of user repositories and activity",
        "Responsive design with Tailwind CSS",
        "Error handling and loading states",
      ],
      tags: ["React", "Tailwind CSS", "GitHub API", "Responsive Design"],
    },
    {
      name: "Tabler",
      framework: "React",
      repoLink: "https://github.com/Rolalove/Tablerr",
      liveLink: "https://tabler-sand.vercel.app/",
      image: "/Tabler.png",
      shortDescription:
        "A responsive and interactive dashboard built with React and Redux-Saga, utilizing mock data to simulate real-time updates.",
      overview:
        "A feature-rich and responsive dashboard built with React and Redux-Saga, showcasing dynamic data interaction using mock APIs. The project includes user authentication with login functionality, allowing users to securely access their dashboard. Once logged in, users can view and manage tasks, visualize data dynamically, and customize their experience. Designed for an intuitive user flow, the dashboard combines functionality and responsiveness for seamless user engagement.",
      technologyStack: ["React", "Tailwind CSS", "React Router", "Redux & Redux-Saga"],
      keyFeatures: [
        "Dynamic Data Interaction",
        "Responsive design with Tailwind CSS",
      ],
      tags: ["React", "Tailwind CSS", "Redux", "Responsive Design"],
    },
    {
      name: "Ice-cream pop",
      framework: "Next.js",
      repoLink: "https://github.com/Rolalove/ice_cream_pop",
      liveLink: "https://rolalove.github.io/ice_cream_pop/",
      image: "/ice-creampop.png",
      shortDescription:
        "An ice cream themed website showcasing various flavors and designs.",
      overview:
        "Ice-CreamPop is a visually appealing static landing page designed to showcase your ice cream product or brand. It's built using HTML and CSS, ensuring cross-browser compatibility and responsiveness.",
      technologyStack: ["HTML", "CSS"],
      keyFeatures: [
        "Responsive Design: Adapts seamlessly to different screen sizes and devices, providing a consistent user experience.",
        "Visually Appealing: Features eye-catching visuals and engaging content to capture user attention.",
        "Static Nature: A single-page website that provides a focused and streamlined user experience.",
      ],
      tags: ["HTML", "CSS", "Responsive Design"],
    },
    
  ];

  return (
    <section id="project" className="container mx-auto px-4 py-8 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
