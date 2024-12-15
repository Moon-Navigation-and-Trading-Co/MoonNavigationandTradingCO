"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelector({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter(); // Correct import from next/navigation
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      // Manually constructing the path, including the nextLocale
      const newPath = `/${nextLocale}`;
      router.push(newPath);
    });
  }

  return (
    <label className="">
      <select
        name="locale"
        id="locale"
        defaultValue={defaultValue}
        disabled={isPending}
        className=" rounded-md px-3 py-2 bg-secondary focus:outline-none"
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
