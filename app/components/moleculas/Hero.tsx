"use client";

import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

const MotionButton = motion.create(Button);

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } },
};
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
};

export default function Hero() {
  const handleClick = () =>
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.div
      className="flex flex-col justify-center items-center md:grid md:grid-cols-2 w-full p-6 md:p-8 md:pl-[50px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <section className="flex flex-col justify-center w-full gap-8 md:gap-6">
        <motion.h1
          variants={headingVariants}
          className="font-bold text-2xl text-center md:text-left leading-10 md:text-3xl md:leading-10 
          text-white line-height-[48px]"
        >
          Подготовка к школе. Индивидуальные занятия для 1–4 классов.
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-[22px] text-center md:text-left text-white/80 md:leading-[32px]"
        >
          Моя цель — сделать обучение увлекательным и эффективным.
        </motion.p>

        <MotionButton
          variants={buttonVariants}
          onClick={handleClick}
          className="
            w-fit px-6 py-6 text-[18px] font-bold text-[var(--c-text)]/80 rounded-xl
            bg-[#E9D328] hover:cursor-pointer
            transition-colors duration-150 hover:bg-[#D9C018] active:bg-[#C7AE12]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            focus-visible:ring-[#E9D328]/70
          "
        >
          Получить консультацию
        </MotionButton>
      </section>
    </motion.div>
  );
}
