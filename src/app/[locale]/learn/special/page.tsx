import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-special");

  return (
    <Card className="w-full mt-10 mb-20 max-w-7xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{t("title")}</CardTitle>
        <CardContent className="p-0 my-3">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <ul className="list-disc pl-6 space-y-2 marker:font-semibold">
            <li>
              <strong>{t("list-3-title-1")}:</strong>{" "}
              {t("list-3-description-1")}
            </li>
            <li>
              <strong>{t("list-3-title-2")}:</strong>{" "}
              {t("list-3-description-2")}
            </li>
            <li>
              <strong>{t("list-3-title-3")}:</strong>{" "}
              {t("list-3-description-3")}
            </li>
            <li>
              <strong>{t("list-3-title-4")}:</strong>{" "}
              {t("list-3-description-4")}
            </li>
            <li>
              <strong>{t("list-3-title-5")}:</strong>{" "}
              {t("list-3-description-5")}
            </li>
            <li>
              <strong>{t("list-3-title-6")}:</strong>{" "}
              {t("list-3-description-6")}
            </li>
            <li>
              <strong>{t("list-3-title-7")}:</strong>{" "}
              {t("list-3-description-7")}
            </li>
          </ul>
        </div>

        <p>{t("conc")}</p>

        <Button className="p-0">
          <Link
            href={"/special-services-forms"}
            className="w-full h-full px-4 py-2"
          >
            {t("button")}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
