"use client";

import { motion } from "framer-motion";

export default function Formats() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light)] dark:bg-[var(--color-dark)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Форматы занятий
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Индивидуальные занятия
              </h3>
              <p className="text-lg">
                Персональный подход и детальная проработка навыков, адаптация к
                особенностям и потребностям вашего ребёнка.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Групповые занятия</h3>
              <p className="text-lg">
                Небольшие группы до 5 детей, где дети развивают коммуникативные
                навыки и учатся работать в команде.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
