import { Icon } from "@iconify/react";
function Myskills() {
  return (
    <section className=" ">
      <main className="h-[100vh] w-[100%] gap-x-4   flex">
        <section className="w-[45%] my-auto py-3 item-center px-8 container mx-auto">
          <p className="font-medium text-2xl text-center mx-auto px-6 hover:animate-shake">
            My skillset encompasses a variety of frontend tools and frameworks
          </p>
          <p className="text-[18px] text-sm mt-2 text-center px-8">
            Blueprinting and building the future of the web, one line of code at
            a time. Specializing in crafting scalable, responsive, and intuitive
            interfaces that stand the test of time and technology.{" "}
          </p>
        </section>

        <section className="w-[60%] right bg-second_Bc ">
          <ul className=" mt-24  py-2 px-2">
            <div className="flex justify-center gap-x-4 mb-2">
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 shadow-md hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="vscode-icons:file-type-html"
                />
                <p className=" text-[20px]">HTML</p>
              </li>
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="vscode-icons:file-type-css"
                />
                <p className=" text-[20px]">CSS</p>
              </li>
            </div>

            <div className="flex justify-center gap-x-4 mb-2">
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon className="w-[35px] h-[35px]" icon="logos:javascript" />
                <p className="text-[20px]">JavaScript</p>
              </li>
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon className="w-[35px] h-[35px]" icon="devicon:git" />
                <p className="text-[20px]">Git</p>
              </li>
            </div>

            <div className="flex justify-center gap-x-4 mb-2">
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon className="w-[35px] h-[35px]" icon="logos:react" />
                <p className="text-[20px]">React</p>
              </li>
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="devicon:tailwindcss"
                />
                <p className="text-[20px]">TailwindCSS</p>
              </li>
            </div>

            <div className="flex justify-center gap-x-4 mb-2">
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon className="w-[35px] h-[35px]" icon="logos:vue" />
                <p className="text-[20px]">Vue</p>
              </li>

              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="logos:typescript-icon"
                />
                <p className="text-[20px]">TypeScript</p>
              </li>
            </div>

            <div className="flex justify-center gap-x-4 mb-2">
              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="skill-icons:nextjs-light"
                />
                <p className="text-[20px]">Next.js</p>
              </li>

              <li className="w-[163px] h-[77px] bg-[#F9FEF9] flex items-center justify-center rounded gap-x-4 hover:scale-95 transition-transform duration-200 ease-in-out">
                <Icon
                  className="w-[35px] h-[35px]"
                  icon="skill-icons:nuxtjs-light"
                />
                <p className="text-[20px]">Nuxt.js</p>
              </li>
            </div>
          </ul>
        </section>
      </main>
    </section>
  );
}
export default Myskills;
