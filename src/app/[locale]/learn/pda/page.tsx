import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-pda");

  return (
    <Card className="w-full mt-10 mb-20 max-w-7xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{t("title")}</CardTitle>
        <CardContent className="p-0 my-3">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-6">
        <h2 className="font-semibold text-primary">{t("sub-t-1")}</h2>

        <div>
          <ul className="list-disc pl-6 space-y-2 marker:text-foreground">
            <li>
              <strong>{t("list-1-title-1")}:</strong>{" "}
              {t("list-1-description-1")}
            </li>
            <li>
              <strong>{t("list-1-title-2")}:</strong>{" "}
              {t("list-1-description-2")}
            </li>
            <li>
              <strong>{t("list-1-title-3")}:</strong>{" "}
              {t("list-1-description-3")}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg text-primary font-semibold">
            {t("sub-t-2")}
          </h2>
          <p>{t("description-2")}</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-foreground my-4">
            <li>
              <strong>{t("list-2-title-1")}:</strong>{" "}
              {t("list-2-description-1")}
            </li>
            <li>
              <strong>{t("list-2-title-2")}:</strong>{" "}
              {t("list-2-description-2")}
            </li>
            <li>
              <strong>{t("list-2-title-3")}:</strong>{" "}
              {t("list-2-description-3")}
            </li>
            <li>
              <strong>{t("list-2-title-4")}:</strong>{" "}
              {t("list-2-description-4")}
            </li>
          </ul>
        </div>

        <Button className="p-0">
          <Link href={"/ship-agency-forms"} className="w-full h-full px-4 py-2">
            {t("button")}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
