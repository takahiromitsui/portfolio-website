import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionProvider from "@/context/active-section-context";
import LanguageSwitcher from "@/components/language-switcher";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

type Params = Promise<{ lng: string }>;

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Takahiro Mitsui| Portfolio",
  description:
    "Takahiro is a full-stack developer with 4 years of experience based in Berlin/Germany.",
};

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
