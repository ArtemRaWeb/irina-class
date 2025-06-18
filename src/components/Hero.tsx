"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-[var(--color-light)] py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center text-center px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          🌟 С уверенностью в первый класс!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          Индивидуальная подготовка к школе с Ириной Николаевной. Опытный
          педагог и психолог поможет вашему ребёнку войти в школьную жизнь легко
          и увлекательно. Современные методики и персональный подход для
          успешного старта!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button className="bg-[var(--color-accent)] hover:bg-[var(--color-primary-dark)] uppercase font-bold text-sm py-3 px-6 rounded-full">
            Записаться на первое занятие
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <Image
            src="/images/hero-illustration.svg"
            alt="Подготовка к школе"
            width={500}
            height={350}
          />
        </motion.div>
      </div>
    </section>
  );
}
