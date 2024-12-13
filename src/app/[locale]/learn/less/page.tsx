import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-less");

  return (
    <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{t("title")}</CardTitle>
        <CardContent className="p-0 my-3">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-3 ">
        <h2>
          <span className="text-xl font-semibold">{t("sub-t-1")}</span>
        </h2>
        <ol className="pl-6 list-disc pb-6">
          <li>
            <span>{t("list-1")}</span>
          </li>
          <li>
            <span>{t("list-2")}</span>
          </li>
        </ol>

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
