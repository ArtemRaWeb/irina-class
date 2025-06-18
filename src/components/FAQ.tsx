"use client";

import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light)] dark:bg-[var(--color-dark)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6">
            <div className="p-4 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Какие методики используются?
              </h3>
              <p className="text-lg">
                Современные игровые и адаптивные методики, направленные на
                развитие речи, письма, математических и социальных навыков.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Как проходят занятия?
              </h3>
              <p className="text-lg">
                Занятия проходят индивидуально или в небольших группах, с учетом
                особенностей каждого ребенка.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Как записаться на занятия?
              </h3>
              <p className="text-lg">
                Вы можете позвонить по номеру 8 (961) 120-70-39 или написать в
                WhatsApp.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
