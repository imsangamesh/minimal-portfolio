"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import Profile from "@/public/profile.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const MotionImage = motion(Image);

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <MotionImage
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween" }}
            src={Profile}
            alt="profile"
            width="192"
            height="192"
            quality={95}
            priority
            className="rounded-full h-24 w-24 border-[0.35rem] border-white
            object-cover shadow-xl"
          />

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl">
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.{" "}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center
        gap-2 px-4 text-xl font-medium">
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center
          gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 transition">
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="/CV.pdf"
          download
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none hover:scale-105 transition cursor-pointer borderBlack
          dark:bg-white/10">
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          href="linkedin.com"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
          outline-none hover:scale-[1.15] transition cursor-pointer borderBlack hover:text-gray-950
          dark:bg-white/10 dark:text-white/60">
          <FaLinkedin />
        </Link>

        <Link
          href="github.com/imsangamesh"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
          outline-none hover:scale-[1.15] transition cursor-pointer borderBlack hover:text-gray-950
          dark:bg-white/10 dark:text-white/60">
          <FaGithub />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
