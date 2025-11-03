import { MetadataRoute } from "next";
import { languages } from "@/i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://portfolio-website-takahiromitsuis-projects.vercel.app";

  // Generate sitemap entries for each language
  const languagePages = languages.flatMap((lng) => [
    {
      url: `${siteUrl}/${lng}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          languages.map((lang) => [lang === "jp" ? "ja" : lang, `${siteUrl}/${lang}`])
        ),
      },
    },
  ]);

  return languagePages;
}
