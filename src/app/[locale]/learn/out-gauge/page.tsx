import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-out-gauge");

  return (
    <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{t("title")}</CardTitle>
        <CardContent className="p-0 my-3">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Section 1 */}
        <h2 className="font-semibold text-primary">{t("sub-t-1")}</h2>
        <div>
          <ul className="list-decimal pl-6 space-y-2 marker:font-semibold">
            <li>
              <strong>{t("list-1-t-1")}</strong>{" "}
              <ol className="list-alphabet pl-6 space-y-2 py-2">
                <li>{t("sub-1-1-1")}</li>
                <li>{t("sub-1-1-2")}</li>
                <li>{t("sub-1-1-3")}</li>
                <li>{t("sub-1-1-4")}</li>
              </ol>
            </li>
            <li>
              <strong>{t("list-1-t-2")}</strong>{" "}
              <ol className="list-alphabet pl-6 space-y-2 py-2">
                <li>{t("sub-1-2-1")}</li>
                <li>{t("sub-1-2-2")}</li>
                <li>{t("sub-1-2-3")}</li>
              </ol>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="font-semibold text-primary">{t("sub-t-2")}</h2>

        <ol className="list-decimal pl-6 space-y-2 marker:font-semibold">
          <li>
            <strong>{t("list-2-t-1")}</strong>{" "}
            <ol className="list-alphabet pl-6 space-y-2 py-2">
              <li>{t("sub-2-1-1")}</li>
              <li>{t("sub-2-1-2")}</li>
            </ol>
          </li>

          <li>
            <strong>{t("list-2-t-2")}</strong>{" "}
            <ol className="list-alphabet pl-6 space-y-2 py-2">
              <li>{t("sub-2-2-1")}</li>
              <li>{t("sub-2-2-2")}</li>
            </ol>
          </li>

          <li>
            <strong>{t("list-2-t-3")}</strong>{" "}
            <ol className="list-alphabet pl-6 space-y-2 py-2">
              <li>{t("sub-2-3-1")}</li>
              <li>{t("sub-2-3-2")}</li>
            </ol>
          </li>

          <li>
            <strong>{t("list-2-t-4")}</strong>{" "}
            <ol className="list-alphabet pl-6 space-y-2 py-2">
              <li>{t("sub-2-4-1")}</li>
              <li>{t("sub-2-4-2")}</li>
            </ol>
          </li>
        </ol>

        <h2 className="font-semibold text-primary">{t("sub-t-3")}</h2>

        <div>
          <ul className="list-disc pl-6 space-y-2 marker:font-semibold">
            <li>
              <strong>{t("list-3-t-1")}</strong> {t("list-3-p-1")}
            </li>
            <li>
              <strong>{t("list-3-t-2")}</strong> {t("list-3-p-2")}
            </li>
            <li>
              <strong>{t("list-3-t-3")}</strong> {t("list-3-p-3")}
            </li>
            <li>
              <strong>{t("list-3-t-4")}</strong> {t("list-3-p-4")}
            </li>
          </ul>
        </div>

        <h2 className="font-semibold text-primary">{t("sub-t-4")}</h2>

        <div>
          <ul className="list-disc pl-6 space-y-2 marker:font-semibold">
            <li>
              <strong>{t("list-4-t-1")}</strong> {t("list-4-p-1")}
            </li>
            <li>
              <strong>{t("list-4-t-2")}</strong> {t("list-4-p-2")}
            </li>
            <li>
              <strong>{t("list-4-t-3")}</strong> {t("list-4-p-3")}
            </li>
          </ul>
        </div>

        <Button className="p-0">
          <Link
            href={"/container-services-forms"}
            className="w-full h-full px-4 py-2"
          >
            {t("button")}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
