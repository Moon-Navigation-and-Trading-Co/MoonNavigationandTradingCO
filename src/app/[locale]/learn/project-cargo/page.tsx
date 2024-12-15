import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCargoInfo() {
  const t = useTranslations("learn-project-cargo");

  return (
    <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-2">{t("title")}</CardTitle>
        <CardContent className="p-0">{t("description")}</CardContent>
      </CardHeader>
      <CardContent className="space-y-12">
        <div className="relative">
          <Image
            src="/project-cargo-1.jpeg"
            width={1200}
            height={1200}
            alt="Project Cargo"
            className="object-cover w-full h-96 mb-4 rounded-xl "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black-overlay opacity-60 rounded-xl" />
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">
            {t("sub-t-1")}:
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-bold">{t("list-1-title-1")}:</span>{" "}
              {t("list-1-description-1")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-title-2")}:</span>{" "}
              {t("list-1-description-2")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-title-3")}:</span>{" "}
              {t("list-1-description-3")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-title-4")}:</span>{" "}
              {t("list-1-description-4")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-1-title-5")}:</span>{" "}
              {t("list-1-description-5")}{" "}
            </li>
          </ol>
        </section>

        <section className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-5 ">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">
              {" "}
              {t("sub-t-2")}:
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("list-2-title-1")}</li>
              <li>{t("list-2-title-2")}</li>
              <li>{t("list-2-title-3")}</li>
              <li>{t("list-2-title-4")}</li>
              <li>{t("list-2-title-5")}</li>
            </ul>
          </div>

          <div className="relative overflow-hidden w-full h-44 max-w-[400px]">
            <Image
              src="/project-cargo-2.webp"
              width={1000}
              height={1000}
              alt="Project Cargo"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-primary">
            {t("sub-t-3")}:
          </h2>
          <p className="mb-2">{t("description-3")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-bold">{t("list-3-title-1")}:</span>{" "}
              {t("list-3-description-1")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-3-title-2")}:</span>{" "}
              {t("list-3-description-2")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-3-title-3")}:</span>{" "}
              {t("list-3-description-3")}{" "}
            </li>
          </ul>
          <p className="my-6">{t("description-3-bot")}</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-bold">{t("list-4-title-1")}:</span>{" "}
              {t("list-4-description-1")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-2")}:</span>{" "}
              {t("list-4-description-2")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-3")}:</span>{" "}
              {t("list-4-description-3")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-4")}:</span>{" "}
              {t("list-4-description-4")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-5")}:</span>{" "}
              {t("list-4-description-5")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-6")}:</span>{" "}
              {t("list-4-description-6")}{" "}
            </li>
            <li>
              <span className="font-bold">{t("list-4-title-7")}:</span>{" "}
              {t("list-4-description-7")}{" "}
            </li>
          </ol>
        </section>

        <Button className="p-0">
          <Link
            href={"/ocean-freight-forms"}
            className="w-full h-full px-4 py-2"
          >
            {t("button")}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
