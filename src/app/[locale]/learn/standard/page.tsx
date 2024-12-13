import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DangerousCargoInfo() {
  const t = useTranslations("learn-standard");

  return (
    <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-2">{t("title")}</CardTitle>
        <CardContent className="p-0">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">{t("list-1-t-1")}:</span>{" "}
              {t("list-1-p-1")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-t-2")}:</span>{" "}
              {t("list-1-p-2")}
            </li>

            <p className="py-3 -ml-6 font-semibold">{t("p-1")}</p>

            <li>
              <span className="font-bold">{t("list-1-t-3")}:</span>{" "}
              {t("list-1-p-3")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-t-4")}:</span>{" "}
              {t("list-1-p-4")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-t-5")}:</span>{" "}
              {t("list-1-p-5")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-t-6")}:</span>{" "}
              {t("list-1-p-6")}{" "}
            </li>
          </ul>

          <h2 className="pt-6 text-xl text-primary font-semibold">
            {t("sub-t-2")}
          </h2>
          <p className="py-6">{t("sub-p-2")}</p>

          <ol className="list-disc pl-6 pb-4 space-y-2">
            <li>
              <span className="font-bold">{t("list-2-t-1")}</span>{" "}
              {t("list-2-p-1")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-2-t-2")}</span>{" "}
              {t("list-2-p-2")}{" "}
            </li>
          </ol>
          <p>{t("p-2")} </p>
        </section>

        <h2>
          <span className="font-semibold text-xl text-primary">
            {t("sub-t-3")}
          </span>
        </h2>

        <p className="">{t("sub-p-3")}</p>

        <ol className="pl-6 space-y-3 list-disc">
          <h2>
            <span className="font-semibold -ml-6">{t("sub-t-3-1")}</span>
          </h2>
          <li>
            <span className="font-bold">{t("list-3-t-1")}:</span>{" "}
            {t("list-3-p-1")}{" "}
          </li>
          <li>
            <span className="font-bold">{t("list-3-t-2")}:</span>{" "}
            {t("list-3-p-2")}{" "}
          </li>
          <li>
            <span className="font-bold">{t("list-3-t-3")}:</span>{" "}
            {t("list-3-p-3")}{" "}
          </li>

          <h2>
            <span className="font-semibold -ml-6">{t("sub-t-3-2")}</span>
          </h2>

          <li>
            <span className="font-bold">{t("list-3-t-4")}:</span>{" "}
            {t("list-3-p-4")}{" "}
          </li>
          <li>
            <span className="font-bold">{t("list-3-t-5")}:</span>{" "}
            {t("list-3-p-5")}{" "}
          </li>
          <li>
            <span className="font-bold">{t("list-3-t-6")}:</span>{" "}
            {t("list-3-p-6")}{" "}
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
