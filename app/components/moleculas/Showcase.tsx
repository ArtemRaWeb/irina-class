"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const STATS = [
  {
    id: 1,
    value: 11,
    suffix: "",
    label: "Выпущенных\nначальных классов",
  },
  {
    id: 2,
    value: 100,
    suffix: "+",
    label: "Детей, подготовленных к школе",
  },

  {
    id: 3,
    value: 30,
    suffix: "+",
    label: "Мероприятий и творческих программ",
  },
];

function Label({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i} className={i ? "block" : undefined}>
          {line}
        </span>
      ))}
    </>
  );
}

export default function ShowcaseSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section className="snap-start flex items-center justify-center">
      <div ref={ref} className="mx-auto w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12">
          Коротко о результатах
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              className="rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="flex items-center gap-1 text-5xl md:text-6xl font-bold mb-4 text-black">
                <CountUp
                  start={0}
                  end={inView ? stat.value : 0}
                  duration={2}
                  className="text-6xl font-bold bg-clip-text bg-black text-transparent"
                />
                {stat.suffix}
              </span>

              <p className="text-black text-xl leading-relaxed">
                <Label text={stat.label} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
