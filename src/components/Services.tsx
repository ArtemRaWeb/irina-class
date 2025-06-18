"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light)] dark:bg-[var(--color-dark)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Подготовка к чтению и письму
              </h3>
              <p className="text-lg">
                Индивидуальные занятия для развития навыков чтения и письма,
                адаптированные под уровень ребёнка.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Развитие математических навыков
              </h3>
              <p className="text-lg">
                Игровые методики для укрепления базовых математических умений и
                логического мышления.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Развитие речи и коммуникации
              </h3>
              <p className="text-lg">
                Занятия, направленные на развитие речи, коммуникативных навыков
                и уверенности в общении.
              </p>
            </div>
            <div className="p-6 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)] rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Социальные навыки</h3>
              <p className="text-lg">
                Помощь в адаптации и развитие социальных навыков для успешного
                старта в школе.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
