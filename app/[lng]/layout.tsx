import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import "@/globals.css";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/active-section-context";
import LanguageSwitcher from "@/components/language-switcher";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

type Params = Promise<{ lng: string }>;

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const siteUrl =
  "https://portfolio-website-takahiromitsuis-projects.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lng } = await params;

  const metadata: Record<
    string,
    {
      title: string;
      description: string;
      keywords: string[];
    }
  > = {
    en: {
      title: "Takahiro Mitsui | Full-Stack Developer Portfolio",
      description:
        "Takahiro Mitsui is a full-stack developer with 4 years of experience based in Japan. Specializing in modern web development with React, Next.js, and TypeScript.",
      keywords: [
        "Takahiro Mitsui",
        "Full-Stack Developer",
        "Web Developer",
        "React Developer",
        "Next.js",
        "TypeScript",
        "Japan",
        "Berlin",
        "Germany",
        "Portfolio",
      ],
    },
    jp: {
      title: "三井貴洋 | フルスタック開発者ポートフォリオ",
      description:
        "三井貴洋は日本を拠点とする4年の経験を持つフルスタック開発者です。React、Next.js、TypeScriptを使用した最新のWeb開発を専門としています。",
      keywords: [
        "三井貴洋",
        "フルスタック開発者",
        "Web開発者",
        "React開発者",
        "Next.js",
        "TypeScript",
        "日本",
        "ベルリン",
        "ドイツ",
        "ポートフォリオ",
      ],
    },
  };

  const content = metadata[lng] || metadata.en;

  return {
    title: {
      default: content.title,
      template: "%s | Takahiro Mitsui",
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "Takahiro Mitsui" }],
    creator: "Takahiro Mitsui",
    publisher: "Takahiro Mitsui",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lng}`,
      languages: {
        "en-US": "/en",
        "ja-JP": "/jp",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: lng === "jp" ? "ja_JP" : "en_US",
      url: `${siteUrl}/${lng}`,
      title: content.title,
      description: content.description,
      siteName: "Takahiro Mitsui Portfolio",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    }
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)} className="scroll-smooth!">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        suppressHydrationWarning
      >
        <ThemeContextProvider>
          <div className="bg-[#fbe2e3] absolute -top-24 -z-10 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute -top-4 -z-10 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20 dark:bg-[#676394]"></div>
          <ActiveSectionProvider>
            <LanguageSwitcher params={{ lng }} />
            <Header params={{ lng }} />
            {children}
            <Footer params={{ lng }} />
            <ThemeSwitch />
          </ActiveSectionProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
