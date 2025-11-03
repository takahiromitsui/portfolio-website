"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslation } from "@/i18n/client";

export default function Experience({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { ref } = useSectionInView("experience", 0.5);
  const { theme } = useTheme();
  const { t } = useTranslation(lng, "experience");
  const isEnglish = t("title") === "My Experience";
  const lngSetting = isEnglish ? "en" : "jp";
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData[lngSetting as keyof typeof experiencesData].map(
          (item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    mounted && theme === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    mounted && theme === "dark"
                      ? "0.4rem solid rgba(255, 255, 255, 0.5)"
                      : "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    mounted && theme === "dark"
                      ? "rgba(255, 255, 255, 0.15)"
                      : "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal mt-0!">{item.location}</p>
                <p className="mt-1! font-normal! text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
