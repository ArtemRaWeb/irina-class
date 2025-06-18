"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contacts() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light)] dark:bg-[var(--color-dark)]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 md:pr-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Контакты
          </h2>
          <p className="text-lg mb-4 text-[var(--color-dark-muted)] dark:text-[var(--color-light-muted)]">
            Для записи на занятия и получения дополнительной информации звоните
            по телефону или пишите на WhatsApp:
          </p>
          <p className="text-2xl font-semibold text-[var(--color-accent)]">
            8 (961) 120-70-39
          </p>
          <p className="mt-4 text-lg text-[var(--color-dark-muted)] dark:text-[var(--color-light-muted)]">
            Не упустите возможность обеспечить своему ребенку успешный старт в
            учебе! Мы ждем вас!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 md:pl-8 mt-10 md:mt-0"
        >
          <Image
            src="/images/contact-us.svg"
            alt="Контактная информация"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
