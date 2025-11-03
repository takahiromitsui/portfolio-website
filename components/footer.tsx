"use client";
import { useTranslation } from "@/i18n/client";

export default function Footer({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "footer");
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Takahiro Mitsui. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("aboutWebsite")}</span>{" "}
        {t("aboutWebsite2")}
      </p>
    </footer>
  );
}
