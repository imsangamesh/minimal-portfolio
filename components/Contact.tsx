"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at &nbsp;
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
        &nbsp; or through this form
      </p>

      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          maxLength={100}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-[rgba(255,255,255,0.05)]
          dark:focus:bg-[rgba(255,255,255,0.1)] transition-all dark:outline-none"
        />
        <textarea
          maxLength={500}
          name="message"
          placeholder="your message..."
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-[rgba(255,255,255,0.05)]
          dark:focus:bg-[rgba(255,255,255,0.1)] transition-all dark:outline-none resize-none"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
        bg-gray-900 text-white rounded-full outline-none transition-all
          hover:scale-110 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10">
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1
            group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
