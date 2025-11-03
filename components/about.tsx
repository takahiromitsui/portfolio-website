"use client";
import SectionHeading from "@/components/section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "@/i18n/client";

export default function About({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { ref } = useSectionInView("about");
  const { t } = useTranslation(lng, "about");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("about")}</SectionHeading>
      <p className="mb-3">
        {t("after")}
        <span className="italic">{t("passion")}</span>
        {t("passion2")}
        <span className="font-medium">{t("techStack")}</span>
        {t("additionalProficiency")}
        <span className="font-medium">{t("additionalProficiency2")}</span>
        {t("additionalProficiency3")}
      </p>

      <p>
        <span className="italic">{t("notCoding")}</span>
        {t("bouldering")}
      </p>
    </motion.section>
  );
}
