"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Есть ли бесплатный пробный урок?",
    answer:
      "Да. Мы проводим 25-минутное ознакомительное занятие: знакомимся, оцениваем уровень ребёнка, формируем программу обучения. После урока вы решаете, бронировать ли пакет занятий.",
  },
  {
    question: "Сколько стоит обучение и какие есть скидки?",
    answer:
      "Базовая цена за один урок 700р. Оплатить можно картой РФ или через СБП.",
  },
  {
    question: "Как проходят онлайн-занятия?",
    answer:
      "Формат «1 на 1» с педагогом в Google Meet. За пол-часа до старта присылаем ссылку; ребёнок подключается по расписанию, а запись урока и домашнее задание появляются в личном кабинете автоматически.",
  },
  {
    question: "Можно ли перенести или отменить урок?",
    answer:
      "Да. Бесплатная отмена — не позднее чем за 24 часа. В непредвиденных случаях доступны два внеплановых переноса без потери оплаты.",
  },
  {
    question: "Сколько длится урок и как часто нужно заниматься?",
    answer:
      "Малышам — до 30 минут, школьникам — 40 минут. Для стабильного прогресса рекомендуем минимум два занятия в неделю.",
  },
  {
    question: "Что нужно для подключения?",
    answer:
      "Стабильный интернет ≥ 10 Мбит/с, камера, микрофон и желательно наушники. Никаких учебников покупать не нужно — все материалы в цифровом формате.",
  },
  {
    question: "Как мы увидим прогресс ребёнка?",
    answer:
      "После каждого урока педагог заполняет отчёт, а раз в месяц вы получаете сводку с рекомендациями и динамикой навыков.",
  },
] as const;

export default function FaqAccordion() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--c-primary)] mb-12">
          Часто задаваемые вопросы
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-2xl font-medium hover:text-[var(--c-primary)] transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
