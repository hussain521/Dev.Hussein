import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconTerminal2,
  IconUser,
  IconBriefcase,
  IconMail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconDownload,
} from "@tabler/icons-react";

function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experiences",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experiences",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/hussein-alsayed12",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/201017285081",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/ana.hussain.3591?locale=ar_AR",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/hussain521",
    },
    {
      title: "Download CV",
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Hussein Al-Sayed.pdf",
    },
  ];
  return (
    <div className="fixed inset-x-0   z-30 w-full">
      <FloatingDock mobileClassName="translate-y-5 " items={links} />
    </div>
  );
}

export default Navbar;
