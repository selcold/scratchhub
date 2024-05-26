"use client";

// React
import { useState, useEffect } from "react";

// next-theme
import { useTheme } from "next-themes";

// image svg
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window !== "undefined") {
    const isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-bs-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-bs-theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  if (!mounted) {
    return (
      <>
        <span
          className="flex items-center w-[24px] h-[24px] cursor-not-allowed"
        >
          <div className="animate-spin h-5 w-5 border-2 border-muted-foreground rounded-full border-t-transparent"></div>
        </span>
      </>
    );
  }

  return (
    <>
      <span className="w-[24px] h-[24px] cursor-pointer hover:scale-[102%] active:scale-[98%] active:opacity-30 transition-all duration-300 ease-in-out">
        {resolvedTheme === "dark" ? (
          <Moon className="" onClick={(e) => setTheme(`light`)} />
        ) : (
          <Sun className="" onClick={(e) => setTheme(`dark`)} />
        )}
      </span>
    </>
  );
};

export function useGetTheme() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme as string;
}