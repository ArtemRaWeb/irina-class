"use client";

// components/Testimonials.tsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Екатерина, мама ученика",
    text: "После занятий с Ириной Николаевной сын стал увереннее, ему легко даются чтение и математика. Нам понравился индивидуальный подход и доброжелательная атмосфера на уроках.",
  },
  {
    name: "Олег, папа первоклассницы",
    text: "Дочь быстро адаптировалась к школе и нашла новых друзей. Занятия были интересными, и главное — ребёнок пошёл учиться с радостью!",
  },
  {
    name: "Анна, мама будущей первоклассницы",
    text: "Очень благодарна Ирине Николаевне! Видно, что педагог с огромным опытом, умеет найти подход к каждому ребёнку. Спасибо за заботу и поддержку.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-light-muted)] dark:bg-[var(--color-dark-muted)]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-dark)] dark:text-[var(--color-light)]">
            Отзывы родителей
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl bg-white/90 dark:bg-[var(--color-dark)] shadow-lg p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium text-[var(--color-dark)] dark:text-[var(--color-light)] mb-4">
                  “{t.text}”
                </p>
                <div className="mt-auto text-right text-base font-semibold text-[var(--color-violet)] dark:text-[var(--color-accent)]">
                  — {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
