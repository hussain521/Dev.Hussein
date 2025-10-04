"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient.tsx";
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "hussainelsid990@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <HoverBorderGradient
      as={motion.button} 
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      duration={1.2}  
      className="bg-primary text-sm font-extralight w-[14rem] text-center cursor-pointer"
      containerClassName="rounded-lg"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </HoverBorderGradient>
  );
};

export default CopyEmailButton;
