"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const ICON_SIZE = 16;

  return (
    <Button variant="ghost"  onClick={toggleTheme}>
      {theme === "light" ? (
        <Sun size={ICON_SIZE} className="text-muted-foreground" />
      ) : theme === "dark" ? (
        <Moon size={ICON_SIZE} className="text-muted-foreground" />
      ) : (
        <Laptop size={ICON_SIZE} className="text-muted-foreground" />
      )}
    </Button>
  );
};

export { ThemeSwitcher };
