import { Icon } from "@iconify/react";

function Myskills() {
  const skills = [
    { icon: "vscode-icons:file-type-html", name: "HTML" },
    { icon: "vscode-icons:file-type-css", name: "CSS" },
    { icon: "logos:javascript", name: "JavaScript" },
    { icon: "devicon:git", name: "Git" },
    { icon: "logos:react", name: "React" },
    { icon: "devicon:tailwindcss", name: "TailwindCSS" },
    { icon: "logos:vue", name: "Vue" },
    { icon: "logos:typescript-icon", name: "TypeScript" },
    { icon: "skill-icons:nextjs-light", name: "Next.js" },
    { icon: "skill-icons:nuxtjs-light", name: "Nuxt.js" }
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      <main className="flex-grow flex flex-col lg:flex-row mt-28 lg:mt-0">
        <section className="w-full px-4 lg:w-[45%] flex items-center justify-center">
          <div className="lg:max-w-md">
            <p className="font-medium text-2xl text-center lg:text-left lg:px-6 hover:animate-shake">
              My skillset encompasses a variety of frontend tools and frameworks
            </p>
            <p className="text-sm mt-2 text-center lg:text-left lg:px-6">
              Blueprinting and building the future of the web, one line of code at
              a time. Specializing in crafting scalable, responsive, and intuitive
              interfaces that stand the test of time and technology.
            </p>
          </div>
        </section>

        <section className="w-full right lg:w-[55%] lg:bg-second_Bc flex items-center justify-center py-8 lg:py-0">
          <ul className="grid grid-cols-2 gap-4 p-4">
            {skills.map((skill, index) => (
              <li key={index} className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 shadow-md hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon className="w-[35px] h-[35px]" icon={skill.icon} />
                <p className="text-[20px]">{skill.name}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </section>
  );
}

export default Myskills;