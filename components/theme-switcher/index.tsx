import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button isIconOnly color="primary" onClick={toggleTheme} variant="light">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
