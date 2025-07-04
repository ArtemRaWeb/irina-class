"use client";

import { motion } from "framer-motion";

import { Laptop, Lightbulb, UserCheck } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "Индивидуальный подход",
    text: "Методы и темп обучения подстраиваются под конкретные цели ученика — от повышения отметок до подготовки к экзамену.",
    Icon: UserCheck,
    alt: "Учебный план с выделенными задачами",
  },
  {
    id: 2,
    title: "Понятное объяснение",
    text: "Сложные темы раскрываю простыми словами, с аналогиями и интерактивом — без зубрёжки и перегрузки терминами.",
    Icon: Lightbulb,
    alt: "Лампочка идеи рядом с книгой",
  },
  {
    id: 3,
    title: "Онлайн и офлайн",
    text: "Занимайтесь дома по видеосвязи, в мини‑группе или лично. Гибкое расписание и поддержка между уроками.",
    Icon: Laptop,
    alt: "Ноутбук и школьный рюкзак",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="snap-start flex items-center justify-center">
      <div className="mx-auto w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black/80 mb-12">
          Почему выбирают мои занятия
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const { Icon } = feature;

            return (
              <motion.div
                key={feature.id}
                className="rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={idx}
                variants={cardVariants}
              >
                <div className="w-16 h-16 rounded-full border-2 border-[var(--c-text)] flex items-center justify-center mb-4">
                  <Icon size={32} strokeWidth={1.5} className="text-black/80" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  {feature.title}
                </h3>
                <p className="text-black/80/80 text-lg leading-relaxed text-black/60">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
