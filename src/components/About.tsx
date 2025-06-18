"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light)] dark:bg-[var(--color-dark)]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 md:pr-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Об Ирине Николаевне
          </h2>
          <p className="text-lg mb-4 text-[var(--color-dark-muted)] dark:text-[var(--color-light-muted)]">
            Ирина Николаевна — педагог с более чем 30-летним стажем работы. Она
            психолог, социолог, преподаватель русского языка и литературы, а
            также начальных классов. Ирина Николаевна ранее руководила детским
            садом и церковно-приходской школой, преподавала музыку и разработала
            инновационные методики обучения дошкольников.
          </p>
          <p className="text-lg text-[var(--color-dark-muted)] dark:text-[var(--color-light-muted)]">
            Благодаря богатому опыту и знаниям в области психологии и
            педагогики, она находит индивидуальный подход к каждому ребёнку,
            создавая комфортную и дружелюбную атмосферу на занятиях.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 md:pl-8 mt-10 md:mt-0"
        >
          <Image
            src="/images/about-teacher.svg"
            alt="Ирина Николаевна"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
