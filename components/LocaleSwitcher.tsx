import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelector from "./LocaleSwitcherSelector";
import { routing } from "@/src/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelector defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option className="" key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelector>
  );
}
