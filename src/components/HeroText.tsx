import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const HeroText = () => {
 const { t, i18n } = useTranslation();
 const isArabic = i18n.language === "ar";

  const words = [t("secure"), t("modern"), t("scalable")];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className=" z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi! I’m Hussein AL-Sayed 👋🏻
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300 w-150 capitalize py-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            frontend web developer based in cairo.
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium pt-3 text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi! I’m Hussein AL-Sayed👋🏻
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-black text-neutral-300 pt-3"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
