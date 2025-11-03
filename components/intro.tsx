"use client";
import Image from "next/image";
import portrait from "@/public/portrait.jpg";
import { motion } from "motion/react";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "@/i18n/client";

export default function Intro({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { ref } = useSectionInView("home");
  const { t } = useTranslation(lng, "intro");

  const isEnglish = t("download") === "Download ";
  const pdfs = isEnglish
    ? [{ path: "/Takahiro.Mitsui.CV.pdf", label: "CV" }]
    : [
        { path: "/履歴書_三井貴洋.pdf", label: "履歴書" },
        { path: "/職務経歴書_三井貴洋.pdf", label: "職務経歴書" },
      ];
  return (
    <section
      ref={ref}
      className="mb-28 max-w-180 text-center sm:mb-0 scroll-mt-400"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={portrait}
              alt="Takahiro Mitsui portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full  object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-normal! sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{t("greeting")}</span> {t("role")}
        <span className="font-bold">{t("fullstack")}</span> {t("role2")}
        <span className="font-bold">{t("years", { years: 4 })}</span>
        {t("experience")} {t("thrive")}
        <span className="italic">{t("web")}</span>. {t("expertise")}
        <span className="underline">Python (FastAPI/Flask)</span>
        {t("and")}
        <span className="underline">
          Typescript/JavaScript (Next.js/React/Node.js/NestJS)
        </span>
        {t("end")}
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {pdfs.map((pdf) => (
          <a
            key={pdf.path}
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href={pdf.path}
            download
          >
            {isEnglish
              ? `${t("download")} ${pdf.label}`
              : `${pdf.label} ${t("download")}`}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        ))}

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/takahiro-mitsui-b68238207"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/takahiromitsui"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
