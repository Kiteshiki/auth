import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button isIconOnly color="primary" onClick={toggleTheme} variant="light">
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
