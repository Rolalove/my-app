"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

function HomePage() {
  return (
    <section id="about" className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Updated mobile-only image section with diagonal gradient and decorative element */}
        <div className="w-full lg:hidden bg-gradient-to-br from-second_Bc/20 via-first_Bc to-first_Bc flex items-center justify-center py-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-second_Bc/10 rounded-full"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-second_Bc/10 rounded-full"></div>
          </div>
          {/* Image container */}
          <div className="rounded-full mt-10 overflow-hidden w-64 h-64 border-4 border-second_Bc shadow-lg relative z-10">
            <Image
              src="/Rola.webp"
              width={256}
              height={256}
              alt="Kofoworola Shonuyi"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-[45%] bg-first_Bc text-text_one flex items-center justify-center">
          <div className="px-4 py-8 lg:py-0 lg:px-10 max-w-2xl ">
            <p>
              <span className="text-2xl font-semibold ">
                Hello there, I&apos;m{" "}
              </span>
              <br />
              <br />
              <span className=" text-xl font-semibold text-second_Bc">
                KOFOWOROLA SHONUYI
              </span>
              <span className="border-2 mt-5 w-fit px-2 py-1 text-xl mb-4 flex items-center rounded-full border-second_Bc">
                Frontend Developer{" "}
                <span className="ml-2 flex">
                  <Icon icon="fluent-emoji-flat:sparkles" />
                </span>
              </span>
            </p>

            <p className="mt-5 text-xl">
              A dedicated Frontend developer with a passion for open-source
              development. I see the potential in ideas and bring them to life
              through clean and efficient code.
            </p>
            <p className="mt-5 text-xl">
              I&apos;m committed to building collaborative and inclusive
              projects that make a positive impact.
            </p>
            <nav aria-label="Links to kofoworola social">
              <ul className="flex mt-4 items-center gap-x-4">
                <li>
                  {" "}
                  <Link
                    aria-label="kofoworola Github profile"
                    href="https://github.com/Rolalove"
                    target="blank"
                  >
                    <Icon className="w-[35px] h-[25px]" icon="mdi:github" />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="kofoworola Linkedin profile"
                    href="https://www.linkedin.com/in/kofoworola-shonuyi-647835220/"
                    target="blank"
                  >
                    <Icon
                      className="w-[35px] h-[25px]"
                      icon="mingcute:linkedin-fill"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="kofoworola Twitter profile"
                    href="https://x.com/rola_dev"
                    target="blank"
                  >
                    <Icon className="w-[35px] h-[20px]" icon="prime:twitter" />
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-6">
              <button
                className="bg-second_Bc text-white px-5 py-2 rounded-md"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1GKBaimQP0xMaSV3FWQGeNCV_0RHZ3x2s/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                View Resume
              </button>
            </div>
          </div>
        </div>

        <div className="w-full right lg:w-[55%] bg-second_Bc flex items-center justify-center py-8 lg:py-0 hidden lg:flex">
          <Image
            src="/Rola.webp"
            width={400}
            height={400}
            alt="Kofoworola Shonuyi"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
