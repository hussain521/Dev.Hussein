import Card from "../components/Card.tsx";
import { Globe } from "../components/globe";
import { useRef } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "@/components/Frameworks.tsx";
import { SparklesCore } from "@/components/ui/sparkles.tsx";
import { CometCard } from "@/components/ui/comet-card.tsx";
import { motion } from "motion/react";
import { HoverBorderGradient } from "@/components/ui/hover-border.tsx";
function About() {
  const grid2Container = useRef<HTMLDivElement>(null);
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <CometCard className="z-10 absolute left-1/2 top-[50%] md:top-[40%] -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              className="my-10 flex w-45 md:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#e6e6e610] p-2  md:my-10 "
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] pb-2  object-cover contrast-75"
                    alt="Invite background"
                    src="assets/shs.png"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </button>
          </CometCard>
          <img
            src="assets/coding-pov.png"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]  md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi! I’m Hussein AL-Sayed 👋🏻</p>
            <p className="subtext ">
              I’m a Frontend Developer from Tanta, working at Sync8Solutions and
              Developer 30. Specialized in building responsive, modern, and
              high-performance web interfaces.
            </p>
          </div>
          <div
            className="absolute inset-x-0
 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
          ></div>
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "60deg", top: "25%", left: "15%" }}
              text="GSAP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "55%", left: "50%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "95deg", bottom: "25%", left: "75%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "15deg", top: "12%", left: "35%" }}
              image="assets/logos/github.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "18%", left: "45%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "8%", left: "55%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "22%", left: "65%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "40deg", top: "68%", left: "78%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "72%", left: "30%" }}
              image="assets/logos/Next.js.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "80%", left: "8%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-50deg", top: "10%", left: "58%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-5deg", top: "50%", left: "10%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* grid 3 */}
        <div className="grid-black-color grid-3">
          <SparklesCore
            id="tsparticlesfullpageded"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="z-10 absolute inset-y-3 md:inset-y-9  w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I’m based in Tanta, open to work remotely</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* grid 4 */}
        <HoverBorderGradient
          as={motion.button}
          duration={1.2}
          className="  grid-4 "
        >
          <div className="flex flex-col items-center  justify-center gap-4 w-full   size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </HoverBorderGradient>

        {/* grid 5 */}
        <div className="p-6 grid-5 border rounded-2xl border-gray-800  ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-y-3 md:inset-y-9 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>

          <div className="z-10 absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
