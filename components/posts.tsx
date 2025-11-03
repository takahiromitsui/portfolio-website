"use client";
import SectionHeading from "@/components/section-heading";
import { postsData } from "@/lib/data";
import { Fragment } from "react";
import BlogPost from "@/components/blog-post";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "@/i18n/client";

export default function Posts({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { ref } = useSectionInView("posts", 0.5);
  const { t } = useTranslation(lng, "posts");
  const isEnglish = t("title") === "My Blog Posts";
  const lngSetting = isEnglish ? "en" : "jp";

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="posts">
      <SectionHeading>{t("title")}</SectionHeading>

      {/* Optional: Platform filter or description */}
      <p className="text-center mb-8 text-gray-700 dark:text-white/70">
        {t("description")}            
      </p>

      <div>
        {postsData[lngSetting as keyof typeof postsData].map((post, index) => (
          <Fragment key={index}>
            <BlogPost {...post} />
          </Fragment>
        ))}
      </div>

      {/* Optional: Link to full blog */}
      <div className="text-center mt-8">
        <a
          href={t("account")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {t("link")}
        </a>
      </div>
    </section>
  );
}
