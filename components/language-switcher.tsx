"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/client";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "jp", name: "日本語", flag: "🇯🇵" },
];

export default function LanguageSwitcher({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { i18n } = useTranslation(lng, "navigation");
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage =
    languages.find((lang) => lang.code === lng) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = async (language: (typeof languages)[0]) => {
    await i18n.changeLanguage(language.code);
    setIsOpen(false);
    router.refresh();
  };

  return (
    <div className="z-1000 relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed sm:top-7 top-30 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-sm border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="inline sm:hidden">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="fixed sm:top-18 top-32 right-5 z-1000 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700">
          <ul
            className="py-1"
            role="listbox"
            aria-labelledby="language-menu-button"
            tabIndex={-1}
          >
            {languages.map((language) => (
              <li
                key={language.code}
                role="option"
                aria-selected={currentLanguage.code === language.code}
                className={`flex cursor-pointer items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLanguage.code === language.code
                    ? "bg-gray-50 text-primary dark:bg-gray-700"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => changeLanguage(language)}
              >
                <div className="flex items-center gap-2">
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
