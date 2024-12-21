"use client";
import { useTheme } from "next-themes";
import { IoMdColorPalette } from "react-icons/io";

import "@/styles/themes/base.css";

import "@/styles/themes/github/dark.css";
import "@/styles/themes/github/light.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components";
import { themeKeys, themeKeysToLabel } from "@/constants/themes";

function ThemePicker() {
  const { theme, setTheme } = useTheme() as {
    theme: "github-dark" | "github-light";
    setTheme: (theme: string) => void;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-full">
        <div className="flex items-center h-full px-4 hover:bg-editor-background-highlight transition-all">
          <IoMdColorPalette size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme}>
          {themeKeys.map((themeId) => (
            <DropdownMenuRadioItem
              value={themeId}
              key={themeId}
              onFocus={() => {
                setTheme(themeId);
              }}
            >
              {themeKeysToLabel[themeId as keyof typeof themeKeysToLabel]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ThemePicker };
