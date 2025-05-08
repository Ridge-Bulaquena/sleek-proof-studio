
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-muted relative overflow-hidden group"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out z-10"
        style={{
          opacity: theme === "light" ? 1 : 0,
          transform: theme === "light" ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out z-10"
        style={{
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
