import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { AnimatedTooltip } from "./ui/animated-tooltip";
interface ProjectDetailsProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  href?: string;
  closeModal: () => void;
}
const ProjectDetails = ({
  title,
  description,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  const people = [
    {
      id: 1,
      name: "React.js",
      image: "assets/logos/react.svg",
    },
    {
      id: 2,
      name: "Tailwind",
      image: "assets/logos/tailwindcss.svg",
    },
    {
      id: 3,
      name: "Jane Smith",
      image: "assets/logos/javascript.svg",
    },
    {
      id: 4,
      name: "Vite.js",
      image: "assets/logos/vitejs.svg",
    },
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="  "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {description}
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem translateZ={20} translateX={-40}>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardItem>
              <a
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                href={href}
              >
                Try now →
              </a>
            </div>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
