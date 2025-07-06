"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import TelegramIcon from "@/app/components/atoms/icons/TelegramIcon";
import VkIcon from "@/app/components/atoms/icons/VkIcon";
import WhatsappIcon from "@/app/components/atoms/icons/WhatsappIcon";
import Image from "next/image.js";

const CONTACTS = [
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/nikiryna",
    Icon: TelegramIcon,
    color: "bg-[#24A1DE]",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/79611207039",
    Icon: WhatsappIcon,
    color: "bg-[#25D366]",
  },
  {
    id: "vk",
    label: "ВКонтакте",
    href: "https://vk.com/irinarakhimzhanova",
    Icon: VkIcon,
    color: "bg-[#0077FF]",
  },
] as const;

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center px-4 text-center"
    >
      <Image
        src="/logo.png"
        alt="IRINA-CLASS"
        width={222}
        height={40}
        className="h-10 w-auto mb-10 select-none"
      />

      {/* <img
        src="/logo.png"
        alt="IRINA-CLASS"
        width={222}
        height={40}
        className="h-10 w-auto mb-10 select-none"
      /> */}

      <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
      <p className="text-xl leading-[34px] text-gray-700 max-w-3xl">
        Если у&nbsp;вас есть вопросы или вы&nbsp;хотите уточнить детали,
        пишите&nbsp;нам удобным способом:
      </p>

      <motion.ul
        className="flex flex-wrap justify-center gap-10 mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {CONTACTS.map(({ id, label, href, Icon, color }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center"
          >
            <Link
              href={href}
              aria-label={label}
              title={`Открыть чат в ${label}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} w-20 h-20 rounded-full grid place-content-center
                transition-transform focus-visible:ring-2
                focus-visible:ring-offset-2 focus-visible:ring-${color}/70`}
            >
              <div className="w-10 h-10 text-white">
                <Icon />
              </div>
            </Link>

            <span className="mt-2 text-sm text-gray-600">{label}</span>
          </motion.li>
        ))}
      </motion.ul>

      <p className="text-sm text-gray-500 max-w-lg">
        Нажимая на любую из ссылок выше, вы&nbsp;соглашаетесь с&nbsp;нашей&nbsp;
        <Link
          href="/privacy-policy"
          target="_blank"
          className="underline hover:text-gray-700"
        >
          Политикой обработки персональных данных
        </Link>
        .
      </p>

      <p className="text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} IRINA-CLASS. Все права защищены.
      </p>
    </section>
  );
}
